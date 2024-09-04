// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/burn-auction-dapp/blob/main/LICENSE)

/* eslint-disable */
/**
 * DO NOT MANUALLY EDIT THIS FILE!
 * This file is generated by calling the `pnpm run build:registry` command.
 *
 * You can find the source code for this script on /scripts/typegen.ts
 */

export default {
  prefix: 'stride',
  name: 'Stride',
  cosmosId: 'stride-1',
  identifier: 'stride',
  gasPriceStep: {
    low: '0.01',
    average: '0.025',
    high: '0.03',
  },
  evmId: null,
  channels: {
    evmos: {
      channelId: 'channel-9',
      counterpartyChannelId: 'channel-25',
    },
  },
  feeToken: 'ustrd',
  cosmosRest: [
    'https://rest.cosmos.directory/stride',
    'https://stride-api.polkachu.com',
    'https://stride.api.chandrastation.com',
    'https://api.stride.bh.rocks',
    'http://api-stride.nodeist.net',
    'https://stride-api.lavenderfive.com',
    'https://stride.rest.interchain.ivaldilabs.xyz',
    'https://api.stride.nodestake.top',
    'https://api-stride.d-stake.xyz',
  ],
  tendermintRest: ['https://rpc.cosmos.directory/stride', 'https://stride-rpc.polkachu.com:443'],
  evmRest: null,
  cosmosGRPC: ['https://stride-rpc.polkachu.com:443'],
  tokens: [
    {
      name: 'Stride Staked Stars',
      ref: 'stride:stSTARS',
      description: 'Staking derivative by Stride',
      symbol: 'stSTARS',
      denom: 'stSTARS',
      sourcePrefix: 'stride',
      sourceDenom: 'stustars',
      minCoinDenom: 'stustars',
      category: 'cosmos',
      tokenRepresentation: 'STARS',
      type: 'IBC',
      decimals: 6,
      erc20Address: '0xc7e56EEc629D3728fE41baCa2f6BFc502096f94E',
      handledByExternalUI: null,
      listed: true,
      coingeckoId: 'stride-staked-stars',
    },
    {
      name: 'Stride Staked Osmo',
      ref: 'stride:stOSMO',
      description: 'Staking derivative by Stride',
      symbol: 'stOSMO',
      denom: 'stOSMO',
      sourcePrefix: 'stride',
      sourceDenom: 'stuosmo',
      minCoinDenom: 'stuosmo',
      category: 'cosmos',
      tokenRepresentation: 'OSMO',
      type: 'IBC',
      decimals: 6,
      erc20Address: '0xD32eB974468ed767338533842D2D4Cc90B9BAb46',
      handledByExternalUI: null,
      listed: true,
      coingeckoId: 'stride-staked-osmo',
    },
    {
      name: 'Stride Staked Juno',
      ref: 'stride:stJUNO',
      description: 'Staking derivative by Stride',
      symbol: 'stJUNO',
      denom: 'stJUNO',
      sourcePrefix: 'stride',
      sourceDenom: 'stujuno',
      minCoinDenom: 'stujuno',
      category: 'cosmos',
      tokenRepresentation: 'JUNO',
      type: 'IBC',
      decimals: 6,
      erc20Address: '0xc71aAf8e486e3F33841BB56Ca3FD2aC3fa8D29a8',
      handledByExternalUI: null,
      listed: true,
      coingeckoId: 'stride-staked-juno',
    },
    {
      name: 'Stride Staked Inj',
      ref: 'stride:stINJ',
      description: 'Staking derivative by Stride',
      symbol: 'stINJ',
      denom: 'stINJ',
      sourcePrefix: 'stride',
      sourceDenom: 'stinj',
      minCoinDenom: 'stinj',
      category: 'cosmos',
      tokenRepresentation: 'INJ',
      type: 'IBC',
      decimals: 18,
      erc20Address: '0x786744d8B40ee154FA4a74153c4d33dF09aBf015',
      handledByExternalUI: null,
      listed: true,
      coingeckoId: '',
    },
    {
      name: 'Stride Staked Evmos',
      ref: 'stride:stEVMOS',
      description: 'Staking derivative by Stride',
      symbol: 'stEVMOS',
      denom: 'stEVMOS',
      sourcePrefix: 'stride',
      sourceDenom: 'staevmos',
      minCoinDenom: 'staevmos',
      category: 'cosmos',
      tokenRepresentation: 'EVMOS',
      type: 'IBC',
      decimals: 18,
      erc20Address: '0x2C68D1d6aB986Ff4640b51e1F14C716a076E44C4',
      handledByExternalUI: null,
      listed: true,
      coingeckoId: 'stride-staked-evmos',
    },
    {
      name: 'Stride Staked Atom',
      ref: 'stride:stATOM',
      description: 'Staking derivative by Stride',
      symbol: 'stATOM',
      denom: 'stATOM',
      sourcePrefix: 'stride',
      sourceDenom: 'stuatom',
      minCoinDenom: 'stuatom',
      category: 'cosmos',
      tokenRepresentation: 'ATOM',
      type: 'IBC',
      decimals: 6,
      erc20Address: '0xB5124FA2b2cF92B2D469b249433BA1c96BDF536D',
      handledByExternalUI: null,
      listed: true,
      coingeckoId: 'stride-staked-atom',
    },
    {
      name: 'Stride',
      ref: 'stride:STRD',
      description: 'The native token of Stride',
      symbol: 'STRD',
      denom: 'STRD',
      sourcePrefix: 'stride',
      sourceDenom: 'ustrd',
      minCoinDenom: 'ustrd',
      category: 'cosmos',
      tokenRepresentation: 'STRD',
      type: 'IBC',
      decimals: 6,
      erc20Address: '0x8FA78CEB7F04118Ec6d06AaC37Ca854691d8e963',
      handledByExternalUI: null,
      listed: true,
      coingeckoId: 'stride',
    },
  ],
  explorerUrl: 'https://www.mintscan.io/stride/txs',
  env: 'mainnet',
} as const;
