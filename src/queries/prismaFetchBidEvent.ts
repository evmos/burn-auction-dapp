// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/burn-auction-dapp/blob/main/LICENSE)

import { prisma } from '@/utilities/prisma';
import { E } from '@/utilities/error-handling';

export const prismaFetchBidEvent = async (round: bigint) => {
  const [error, bidEvents] = await E.try(() =>
    prisma.bidEvent.findMany({
      orderBy: {
        blockNumber: 'asc',
      },
      where: {
        round: round.toString(),
      },
    }),
  );

  if (error) {
    console.error('Error fetching bid events:', error);
    throw error;
  }

  return bidEvents;
};
