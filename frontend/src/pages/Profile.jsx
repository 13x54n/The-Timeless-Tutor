import React from "react";

export default function Profile() {
  return (
    <div className="flex items-start mx-[5vw] gap-2 py-5">
      <div className="w-[18%]">
        <img
          src="https://avatars.githubusercontent.com/u/135448616?v=4"
          alt=""
          className="mx-auto mb-2"
          width={353}
          height={353}
        />
        <div className="mx-10">
          <h1 className="text-lg font-medium">Sangya Sherpa</h1>
          <p className="text-lg mb-2">13x54n · he/his/him</p>
          <p className="bio text-md mb-2 font-medium text-gray-700">
            Building a more open web, one block at a time. 👋
          </p>
        </div>

        <div className="flex items-center gap-2 border-b-2 pb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
            />
          </svg>
          <span className="text-sm">7 followers · 14 following</span>

          <button>Edit Profile</button>
        </div>

        <div className="border-b-2 pb-4">
          <p className="bio text-md my-1.5 font-medium text-gray-700">
            Achievements
          </p>

          <ul className="flex items-center gap-2 mt-1">
            <li className="bg-gray-200 rounded-full overflow-hidden">
              <img
                width={70}
                height={70}
                className="object-cover"
                src="https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png"
                alt=""
              />
            </li>
            <li className="bg-gray-200 rounded-full overflow-hidden">
              <img
                width={70}
                height={70}
                className="object-cover"
                src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png"
                alt=""
              />
            </li>
            <li className="bg-gray-200 rounded-full overflow-hidden">
              <img
                width={70}
                height={70}
                className="object-cover"
                src="https://github.githubassets.com/assets/yolo-default-be0bbff04951.png"
                alt=""
              />
            </li>
          </ul>
        </div>

        <div>
          <p className="bio text-md my-1.5 font-medium text-gray-700">
            Your Courses
          </p>
        </div>
      </div>
      <div>dvdvsv</div>
    </div>
  );
}
