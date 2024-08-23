import { expect, describe, it, expectTypeOf, beforeEach, afterEach, vi } from 'vitest';
import { rpcFetchEpochInfo } from '../rpcFetchEpochInfo';
import { fetchCurrentAuctionDates } from '../fetchCurrentAuctionDates';
import { epochInfoResponse } from './mockedData';

beforeEach(() => {
  vi.mock('../rpcFetchEpochInfo', async (importOriginal) => {
    const actual = await importOriginal();
    return {
      // @ts-ignore
      ...actual,
      rpcFetchEpochInfo: vi.fn(() => epochInfoResponse),
    };
  });
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('fetchCurrentAuctionDates()', async () => {
  it('should return the start and end dates', async () => {
    const result = await fetchCurrentAuctionDates();
    expect(result).not.toBeNull();
    expectTypeOf(result.start).toMatchTypeOf<Date>();
    expectTypeOf(result.end).toMatchTypeOf<Date>();
    expect(result.start).toBeInstanceOf(Date);
    expect(result.end).toBeInstanceOf(Date);
    expect(result.start.getTime()).toBeLessThan(result.end.getTime());
  });
});
