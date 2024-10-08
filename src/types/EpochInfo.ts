// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/burn-auction-dapp/blob/main/LICENSE)

type EpochInfo = {
  identifier: 'day' | 'week';
  start_time: string;
  duration: string;
  current_epoch: string;
  current_epoch_start_time: string;
  epoch_counting_started: boolean;
  current_epoch_start_height: string;
};

type Pagination = {
  next_key: null | string;
  total: string;
};

export type EpochResponse = {
  epochs: EpochInfo[];
  pagination: Pagination;
};
