import React from "react";

export default function RecentActivities() {
  return (
    <div className="border-2 p-2 px-4 rounded-lg">
      <p className="text-sm font-medium mb-3">📜 Recent Activities</p>
      <ol className="relative border-s border-gray-200 ">
        <li className="mb-2 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white  "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
            February 2022
          </time>
          <h3 className="text-sm font-semibold text-gray-900 ">
            Application UI code in Tailwind CSS
          </h3>
        </li>
        <li className="mb-2 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
            March 2022
          </time>
          <h3 className="text-sm font-semibold text-gray-900 ">
            Marketing UI design in Figma
          </h3>
        </li>
        <li className="mb-2 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white  "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            April 2022
          </time>
          <h3 className="text-sm font-semibold text-gray-900 ">
            E-Commerce UI code in Tailwind CSS
          </h3>
        </li>
        <li className="mb-4 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white  "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            April 2022
          </time>
          <h3 className="text-sm font-semibold text-gray-900 ">
            E-Commerce UI code in Tailwind CSS
          </h3>
        </li>
      </ol>
    </div>
  );
}
