// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/burn-auction-dapp/blob/main/LICENSE)

import { HistoryContent } from './_components/HistoryContent';
import { fetchAuctionHistory } from '@/queries/fetchAuctionHistory';
import { PAGINATION_ITEMS_PER_PAGE } from '@/constants';

const History = async () => {
  const auctionHistory = await fetchAuctionHistory(1, PAGINATION_ITEMS_PER_PAGE);

  return <HistoryContent auctionHistory={auctionHistory} pageNumber={1} />;
};

export default History;
