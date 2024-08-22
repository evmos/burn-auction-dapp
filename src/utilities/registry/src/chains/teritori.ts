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
  prefix: 'tori',
  name: 'Teritori',
  cosmosId: 'teritori-1',
  identifier: 'teritori',
  gasPriceStep: {
    low: '0.01',
    average: '0.025',
    high: '0.03',
  },
  evmId: null,
  channels: {
    evmos: {
      channelId: 'channel-1',
      counterpartyChannelId: 'channel-35',
    },
  },
  feeToken: 'utori',
  cosmosRest: [
    'https://rest.cosmos.directory/teritori',
    'https://teritori-api.lavenderfive.com:443',
    'https://teritori-api.polkachu.com',
    'https://api-teritori.nodeist.net',
    'https://api.teritori.nodestake.top',
    'https://rest.mainnet.teritori.com',
  ],
  tendermintRest: ['https://rpc.cosmos.directory/teritori', 'https://rpc.mainnet.teritori.com'],
  evmRest: null,
  cosmosGRPC: ['https://rpc.mainnet.teritori.com'],
  tokens: [
    {
      name: 'Teritori',
      ref: 'tori:TORI',
      description: 'The native staking and governance token of the Teritori chain',
      symbol: 'TORI',
      denom: 'TORI',
      sourcePrefix: 'tori',
      sourceDenom: 'utori',
      minCoinDenom: 'utori',
      category: 'cosmos',
      tokenRepresentation: 'TORI',
      type: 'IBC',
      decimals: 6,
      erc20Address: '0x205CF44075E77A3543abC690437F3b2819bc450a',
      handledByExternalUI: null,
      listed: true,
      coingeckoId: 'teritori',
    },
  ],
  explorerUrl: 'https://www.mintscan.io/teritori/txs',
  env: 'mainnet',
} as const;
