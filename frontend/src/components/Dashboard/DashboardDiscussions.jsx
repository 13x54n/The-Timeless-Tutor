import React from "react";

export default function DashboardDiscussions() {
  return (
    <div className="border-2 p-2 px-4 rounded-lg pb-4">
      <p className="text-sm font-medium mb-3">🏛️ Active Discussions</p>
      <ul className="flex flex-col gap-4">
        <li className="flex items-start gap-2">
          <img
            className="w-6 h-6 object-cover rounded-full"
            src="https://avatars.githubusercontent.com/u/135448616?s=400&u=74e9ea61cb4c7d10e70fea3138c49d8b437c644f&v=4"
            alt=""
          />
          <div>
            <div className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              13x54n/dApp Development
            </div>
            <h3 className="text-sm font-semibold text-gray-900 ">
              I guess arbitrum is better than solana.
            </h3>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <img
            className="w-6 h-6 object-cover rounded-full"
            src="https://avatars.githubusercontent.com/u/135448616?s=400&u=74e9ea61cb4c7d10e70fea3138c49d8b437c644f&v=4"
            alt=""
          />
          <div>
            <div className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              13x54n/dApp Development
            </div>
            <h3 className="text-sm font-semibold text-gray-900 ">
              I guess arbitrum is better than solana.
            </h3>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <img
            className="w-6 h-6 object-cover rounded-full"
            src="https://avatars.githubusercontent.com/u/135448616?s=400&u=74e9ea61cb4c7d10e70fea3138c49d8b437c644f&v=4"
            alt=""
          />
          <div>
            <div className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              13x54n/dApp Development
            </div>
            <h3 className="text-sm font-semibold text-gray-900 ">
              I guess arbitrum is better than solana.
            </h3>
          </div>
        </li>
      </ul>
    </div>
  );
}
