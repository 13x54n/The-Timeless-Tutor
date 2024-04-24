import React from "react";
import { DashboardMain } from "../components/Dashboard/DashboardMain";
import RecentActivities from "../components/Dashboard/RecentActivities";
import DashboardDiscussions from "../components/Dashboard/DashboardDiscussions";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const user = auth.currentUser;
  const navigate = useNavigate()

  return (
    <div className="py-5 mx-[3vw]">
      <div className="flex items-start flex-wrap sm:flex-nowrap gap-3">
        <div className="w-[100%]">
          <div className="flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="#0009"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>

            <div>
              {" "}
              <h1 className="text-md font-medium">Dashboard</h1>
              <p className="text-sm">
                Welcome <u onClick={() => navigate("/profile")}>{user.email.split("@")[0]}</u>!
              </p>
            </div>
          </div>
          <DashboardMain />
        </div>
        <div className="w-full sm:w-[30vw] flex flex-col gap-3">
          <RecentActivities /> <DashboardDiscussions />
        </div>
      </div>
    </div>
  );
}
