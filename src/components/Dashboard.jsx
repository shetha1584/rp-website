import React from "react";
import DashboardStats from "./DashboardStats";
import SecondDashboardCard from "./SecondDashboardCard";
import FacilityUsage from "./FacilityUsage";
import ChillersCard from "./ChillersCard";
import StoredWaterCards from "./StoredWaterCards";
import BatteryCard from "./BatteryCard";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <DashboardStats />
      <SecondDashboardCard />
      <FacilityUsage />
      <ChillersCard/>
      <StoredWaterCards/>
      <BatteryCard/>
    </div>
  );
};

export default Dashboard;
