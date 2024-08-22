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
  prefix: 'gravity',
  name: 'Gravity Bridge',
  cosmosId: 'gravity-bridge-3',
  identifier: 'gravitybridge',
  gasPriceStep: {
    low: '0.000',
    average: '0.000',
    high: '0.035',
  },
  evmId: null,
  channels: {
    evmos: {
      channelId: 'channel-65',
      counterpartyChannelId: 'channel-8',
    },
  },
  feeToken: 'ugraviton',
  cosmosRest: [
    'https://rest.cosmos.directory/gravitybridge',
    'https://gravitychain.io:1317',
    'https://lcd.gravity-bridge.ezstaking.io',
    'https://api-gravitybridge-ia.notional.ventures',
    'https://api.gravity-bridge.nodestake.top',
  ],
  tendermintRest: ['https://rpc.cosmos.directory/gravitybridge', 'https://lcd-gravity-bridge.keplr.app:9090/'],
  evmRest: null,
  cosmosGRPC: ['https://lcd-gravity-bridge.keplr.app:9090/'],
  tokens: [
    {
      name: 'Wrapped Ether',
      ref: 'gravity:gWETH',
      description: 'Wrapped Ether via Gravity Bridge',
      symbol: 'gWETH',
      denom: 'gWETH',
      sourcePrefix: 'gravity',
      sourceDenom: 'gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      minCoinDenom: 'wei',
      category: 'ethereum',
      tokenRepresentation: 'WETH',
      type: 'ERC20',
      decimals: 18,
      erc20Address: '0xc03345448969Dd8C00e9E4A85d2d9722d093aF8E',
      handledByExternalUI: null,
      listed: true,
      coingeckoId: 'weth',
    },
    {
      name: 'Wrapped Bitcoin',
      ref: 'gravity:gWBTC',
      description: 'Wrapped Bitcoin via Gravity Bridge',
      symbol: 'gWBTC',
      denom: 'gWBTC',
      sourcePrefix: 'gravity',
      sourceDenom: 'gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      minCoinDenom: 'satoshi',
      category: 'bitcoin',
      tokenRepresentation: 'WBTC',
      type: 'ERC20',
      decimals: 8,
      erc20Address: '0x1D54EcB8583Ca25895c512A8308389fFD581F9c9',
      handledByExternalUI: null,
      listed: true,
      coingeckoId: 'wrapped-bitcoin',
    },
    {
      name: 'Tether USD',
      ref: 'gravity:gUSDT',
      description: 'Tether USD via Gravity Bridge',
      symbol: 'gUSDT',
      denom: 'gUSDT',
      sourcePrefix: 'gravity',
      sourceDenom: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7',
      minCoinDenom: 'uusdt',
      category: 'stablecoin',
      tokenRepresentation: 'USDT',
      type: 'ERC20',
      decimals: 6,
      erc20Address: '0xecEEEfCEE421D8062EF8d6b4D814efe4dc898265',
      handledByExternalUI: null,
      listed: true,
      coingeckoId: 'tether',
    },
    {
      name: 'USD Coin',
      ref: 'gravity:gUSDC',
      description: 'USD Coin via Gravity Bridge',
      symbol: 'gUSDC',
      denom: 'gUSDC',
      sourcePrefix: 'gravity',
      sourceDenom: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      minCoinDenom: 'uusdc',
      category: 'stablecoin',
      tokenRepresentation: 'USDC',
      type: 'ERC20',
      decimals: 6,
      erc20Address: '0x5FD55A1B9FC24967C4dB09C513C3BA0DFa7FF687',
      handledByExternalUI: null,
      listed: true,
      coingeckoId: 'usd-coin',
    },
    {
      name: 'Dai Stablecoin',
      ref: 'gravity:gDAI',
      description: 'Dai Stablecoin via Gravity Bridge',
      symbol: 'gDAI',
      denom: 'gDAI',
      sourcePrefix: 'gravity',
      sourceDenom: 'gravity0x6B175474E89094C44Da98b954EedeAC495271d0F',
      minCoinDenom: 'dai-wei',
      category: 'stablecoin',
      tokenRepresentation: 'DAI',
      type: 'ERC20',
      decimals: 18,
      erc20Address: '0xd567B3d7B8FE3C79a1AD8dA978812cfC4Fa05e75',
      handledByExternalUI: null,
      listed: true,
      coingeckoId: 'dai',
    },
    {
      name: 'Graviton',
      ref: 'gravity:GRAV',
      description: 'The native token of Gravity Bridge',
      symbol: 'GRAV',
      denom: 'GRAV',
      sourcePrefix: 'gravity',
      sourceDenom: 'ugraviton',
      minCoinDenom: 'ugraviton',
      category: 'cosmos',
      tokenRepresentation: 'GRAVITON',
      type: 'IBC',
      decimals: 6,
      erc20Address: '0x80b5a32E4F032B2a058b4F29EC95EEfEEB87aDcd',
      handledByExternalUI: null,
      listed: true,
      coingeckoId: 'graviton',
    },
  ],
  explorerUrl: 'https://www.mintscan.io/gravity-bridge/txs',
  env: 'mainnet',
} as const;
