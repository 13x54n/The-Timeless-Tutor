import React from "react";
import { DashboardMain } from "../components/Dashboard/DashboardMain";
import RecentActivities from "../components/Dashboard/RecentActivities";
import DashboardDiscussions from "../components/Dashboard/DashboardDiscussions";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const user = auth.currentUser;
  const navigate = useNavigate();

  return (
    <div className="py-5 mx-[3vw]">
      <div className="flex items-start flex-wrap-reverse sm:flex-nowrap gap-3">
        <div className="w-[100%]">
          <DashboardMain />
        </div>
        <div className="w-full sm:w-[30vw] flex flex-col gap-3">
          <RecentActivities /> <DashboardDiscussions />
        </div>
      </div>
    </div>
  );
}
