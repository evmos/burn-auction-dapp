// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

/* eslint-disable */
/**
 * DO NOT MANUALLY EDIT THIS FILE!
 * This file is generated by calling the `pnpm run build:registry` command.
 *
 * You can find the source code for this script on /scripts/typegen.ts
 */

export default {
  prefix: 'kujira',
  name: 'Kujira',
  cosmosId: 'kaiyo-1',
  identifier: 'kujira',
  gasPriceStep: {
    low: '0.01',
    average: '0.025',
    high: '0.03',
  },
  evmId: null,
  channels: {
    evmos: {
      channelId: 'channel-23',
      counterpartyChannelId: 'channel-18',
    },
  },
  feeToken: 'ukuji',
  cosmosRest: [
    'https://rest.cosmos.directory/kujira',
    'https://lcd.kaiyo.kujira.setten.io',
    'https://lcd-kujira.whispernode.com',
    'https://kujira-api.lavenderfive.com:443',
    'https://kujira-api.polkachu.com',
    'https://rest-kujira.ecostake.com',
    'https://api.kujira.chaintools.tech',
    'https://api-kujira-ia.cosmosia.notional.ventures',
    'https://kujira-lcd.wildsage.io',
    'https://api-kujira.nodeist.net',
    'https://kujira-api.ibs.team',
    'https://api-kujira.starsquid.io',
    'https://kujira.api.kjnodes.com',
    'https://kuji-api.kleomedes.network',
  ],
  tendermintRest: ['https://rpc.cosmos.directory/kujira', 'https://rpc.kaiyo.kujira.setten.io'],
  evmRest: null,
  cosmosGRPC: ['https://rpc.kaiyo.kujira.setten.io'],
  tokens: [
    {
      category: 'cosmos',
      decimals: 6,
      denom: 'KUJI',
      erc20Address: null,
      handledByExternalUI: null,
      description: '',
      listed: false,
      minCoinDenom: 'ukuji',
      name: 'KUJI',
      ref: 'kujira:KUJI',
      sourceDenom: 'ukuji',
      sourcePrefix: 'kujira',
      symbol: 'KUJI',
      tokenRepresentation: null,
      coingeckoId: null,
      type: 'IBC',
    },
  ],
  explorerUrl: 'https://finder.kujira.network/kaiyo-1/tx',
  env: 'mainnet',
} as const;
