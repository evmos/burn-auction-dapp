import type { AuctionnedAsset } from '@/types/AuctionnedAsset';
import Image from 'next/image';

export const AssetsTable = ({ assets }: { assets: AuctionnedAsset[] }) => {
  return (
    <table className="min-w-full divide-y divide-evmos-darkish">
      <thead>
        <tr>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
            Asset
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
            Total value
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-evmos-dark">
        {assets.map((asset) => (
          <tr key={asset.ticker}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
              <div className="flex items-center">
                <div className="h-11 w-11 flex-shrink-0">
                  <Image alt={asset.ticker} src={asset.iconUrl} width="100" height="100" className="h-11 w-11 rounded-full" />
                </div>
                <div className="ml-4">
                  <div className="font-medium text-evmos-lightish">{asset.ticker}</div>
                  <div className="mt-1 text-evmos-lightish opacity-70 text-sm">{asset.name}</div>
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm">
              <p className="text-evmos-lightish">{asset.amount}</p>
              <p className="text-evmos-lightish opacity-70 text-sm">${asset.valueInUsd}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
