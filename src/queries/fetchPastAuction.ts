// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/burn-auction-dapp/blob/main/LICENSE)

import type { AuctionDetailed } from '@/types/AuctionDetailed';
import { E } from '@/utilities/error-handling';
import { Log } from '@/utilities/logger';
import { AuctionnedAsset } from '@/types/AuctionnedAsset';
import { fetchChainRegistryDir } from '@/utilities/fetchChainRegistryDir';
import { TokenEntity } from '@/utilities//registry/autogen/token-entity';
import { EVMOS_DECIMALS, UNKNOWN_TOKEN_METADATA_DEFAULT } from '@/constants';
import type { HexAddress } from '@/types/HexAddress';

import { fetchAuctionDates } from './fetchAuctionDates';
import { fetchPastCryptoPrice } from './fetchPastCryptoPrice';
import { prismaFetchAuctionEvent } from './prismaFetchAuctionEvent';

export const fetchPastAuction = async (round: bigint): Promise<AuctionDetailed> => {
  const [error, auctionEndEvent] = await E.try(() => prismaFetchAuctionEvent(round));

  if (error || auctionEndEvent.length === 0) {
    Log().error('Error fetching auction end event info:', error);
    throw error;
  }

  const roundData = auctionEndEvent[0];
  if (!roundData.coins) {
    throw new Error('No coins found in the auction end event');
  }

  const [errorMetadata, tokensMetadata] = await E.try(() => fetchChainRegistryDir<TokenEntity>('tokens'));

  if (errorMetadata || !tokensMetadata) {
    Log().error('Error fetching tokens metadata:', errorMetadata);
    throw errorMetadata;
  }

  const [errorEndDate, dates] = await E.try(() => fetchAuctionDates(BigInt(roundData.blockNumber)));

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
      bidInEvmos: BigInt(roundData.burned),
      /* eslint-disable-next-line no-magic-numbers */
      bidInEvmosWithDecimals: Number(roundData.burned) / 10 ** EVMOS_DECIMALS,
      bidderAddress: roundData.winner as HexAddress,
      bidInUsd: 0,
    },
    auction: {
      assets: [] as AuctionnedAsset[],
      totalValue: 0,
      hasPriceError: false,
      evmosToUsdRate: 0,
    },
  };

  let totalValue = 0;

  for (const token of roundData.coins) {
    const tokenMetadata = tokensMetadata.find((metadata) => metadata.minCoinDenom === token.denom);

    let asset = {
      ...UNKNOWN_TOKEN_METADATA_DEFAULT,
      denom: token.denom,
      amount: BigInt(token.amount),
      priceError: true,
    };

    if (!tokenMetadata) {
      auctionDetails.auction.assets.push(asset);
      continue;
    }

    const exponent = Number(tokenMetadata.exponent);
    /* eslint-disable-next-line no-magic-numbers */
    const amountWithDecimals = Number(token.amount) / 10 ** exponent;

    const [errorFromFetchPastCryptoPrice, price] = await E.try(() => fetchPastCryptoPrice(tokenMetadata.coingeckoId, dates.end));
    const valueInUsd = price ? price * amountWithDecimals : 0;

    if (errorFromFetchPastCryptoPrice) {
      auctionDetails.auction.hasPriceError = true;
    }

    asset = {
      coingeckoId: tokenMetadata.coingeckoId,
      denom: token.denom,
      name: tokenMetadata.name,
      ticker: tokenMetadata.coinDenom,
      amount: BigInt(token.amount),
      valueInUsd,
      iconUrl: tokenMetadata.img.svg ?? tokenMetadata.img.png,
      exponent,
      amountWithDecimals,
      priceError: !!errorFromFetchPastCryptoPrice,
    };

    totalValue += valueInUsd;

    auctionDetails.auction.assets.push(asset);
  }

  // eslint-disable-next-line no-unused-vars
  const [_, evmosToUsdRateCoingecko] = await E.try(() => fetchPastCryptoPrice('evmos', dates.end));
  const evmosToUsdRate = evmosToUsdRateCoingecko ?? 0;

  auctionDetails.auction.evmosToUsdRate = evmosToUsdRate;
  auctionDetails.auction.totalValue = totalValue;
  auctionDetails.highestBid.bidInUsd = auctionDetails.auction.evmosToUsdRate * auctionDetails.highestBid.bidInEvmosWithDecimals;

  return auctionDetails;
};
