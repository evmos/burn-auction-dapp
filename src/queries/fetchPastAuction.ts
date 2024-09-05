// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/burn-auction-dapp/blob/main/LICENSE)

import type { AuctionDetailed } from '@/types/AuctionDetailed';
import { E } from '@/utilities/error-handling';
import { Log } from '@/utilities/logger';
import { AuctionnedAsset } from '@/types/AuctionnedAsset';
import { fetchChainRegistryDir } from '@/utilities/fetchChainRegistryDir';
import { TokenEntity } from '@/utilities//registry/autogen/token-entity';
import { fetchAuctionDates } from './fetchAuctionDates';
import { EVMOS_DECIMALS, UNKNOWN_TOKEN_METADATA_DEFAULT } from '@/constants';
import { rpcFetchAuctionEnd } from './rpcFetchAuctionEnd';
import { fetchPastCryptoPrice } from './fetchPastCryptoPrice';

export const fetchPastAuction = async (round: bigint): Promise<AuctionDetailed> => {
  const [error, auctionEndEvent] = await E.try(() => rpcFetchAuctionEnd(round));

  if (error || auctionEndEvent.length === 0) {
    Log().error('Error fetching auction end event info:', error);
    throw error;
  }

  const roundData = auctionEndEvent[0];
  if (!roundData.args.coins) {
    throw new Error('No coins found in the auction end event');
  }

  const [errorMetadata, tokensMetadata] = await E.try(() => fetchChainRegistryDir<TokenEntity>('tokens'));

  if (errorMetadata || !tokensMetadata) {
    Log().error('Error fetching tokens metadata:', errorMetadata);
    throw errorMetadata;
  }

  const [errorEndDate, dates] = await E.try(() => fetchAuctionDates(roundData.blockNumber));

  if (errorEndDate || !dates) {
    Log().error('Error fetching current end date:', errorEndDate);
    throw errorEndDate;
  }

  const auctionDetails: AuctionDetailed = {
    round: {
      round: round,
      isLast: false,
      startDate: dates.start,
      endDate: dates.end,
    },
    highestBid: {
      bidInEvmos: roundData.args.burned,
      bidInEvmosWithDecimals: Number(roundData.args.burned) / 10 ** EVMOS_DECIMALS,
      bidderAddress: roundData.args.winner,
      bidInUsd: 0,
    },
    auction: {
      assets: [] as AuctionnedAsset[],
      totalValue: 0,
    },
  };

  let totalValue = 0;

  for (const token of roundData.args.coins) {
    const tokenMetadata = tokensMetadata.find((metadata) => metadata.minCoinDenom === token.denom);

    let asset = {
      ...UNKNOWN_TOKEN_METADATA_DEFAULT,
      denom: token.denom,
      amount: token.amount,
    };

    if (!tokenMetadata) {
      auctionDetails.auction.assets.push(asset);
      continue;
    }

    const exponent = Number(tokenMetadata.exponent);
    const amountWithDecimals = Number(token.amount) / 10 ** exponent;
    const valueInUsd = (await fetchPastCryptoPrice(tokenMetadata.coingeckoId, dates.end)) * amountWithDecimals;

    asset = {
      coingeckoId: tokenMetadata.coingeckoId,
      denom: token.denom,
      name: tokenMetadata.name,
      ticker: tokenMetadata.coinDenom,
      amount: token.amount,
      valueInUsd,
      iconUrl: tokenMetadata.img.svg ?? tokenMetadata.img.png,
      exponent,
      amountWithDecimals,
    };

    totalValue += valueInUsd;

    auctionDetails.auction.assets.push(asset);
  }

  auctionDetails.auction.totalValue = totalValue;
  auctionDetails.highestBid.bidInUsd = (await fetchPastCryptoPrice('evmos', dates.end)) * auctionDetails.highestBid.bidInEvmosWithDecimals;

  return auctionDetails;
};
