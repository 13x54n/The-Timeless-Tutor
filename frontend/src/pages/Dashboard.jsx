import React from "react";
import { DashboardMain } from "../components/Dashboard/DashboardMain";
import RecentActivities from "../components/Dashboard/RecentActivities";
import DashboardDiscussions from "../components/Dashboard/DashboardDiscussions";

export default function Dashboard() {
  return (
    <div className="py-5 mx-[3vw]">
      <div className="flex items-start flex-wrap sm:flex-nowrap gap-3">
        <div className="w-[100%]">
          <DashboardMain />
        </div>
        <div className="w-full sm:w-[30vw] flex flex-col gap-3"><RecentActivities/> <DashboardDiscussions/></div>
      </div>
    </div>
  );
}
