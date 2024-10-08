// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/burn-auction-dapp/blob/main/LICENSE)

'use client';
import { useEffect } from 'react';

import reloadData from '../_actions/reloadData';

const DEFAULT_REFRESH_INTERVAL_MS = 60000;
const NEXT_PUBLIC_REFRESH_INTERVAL_MS = parseInt(process.env.NEXT_PUBLIC_REFRESH_INTERVAL_MS as string) ?? DEFAULT_REFRESH_INTERVAL_MS;

export const RefreshHome = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      reloadData();
    }, NEXT_PUBLIC_REFRESH_INTERVAL_MS);
    return () => {
      clearInterval(interval);
    };
  });

  return null;
};
