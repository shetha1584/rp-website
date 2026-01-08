import React from "react";
import DashboardStats from "./DashboardStats";
import SecondDashboardCard from "./SecondDashboardCard";
import FacilityUsage from "./FacilityUsage";
import ChillersCard from "./ChillersCard";
import StoredWaterCards from "./StoredWaterCards";
import BatteryCard from "./BatteryCard"; 
import EvChargersPage from "./EvChargersPage";

const Dashboard = ({ setActivePage }) => {
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <DashboardStats />
      <SecondDashboardCard />
      <FacilityUsage />
      <ChillersCard />
      <StoredWaterCards />
      <BatteryCard setActivePage={setActivePage} /> {/* pass the prop correctly */}
      <EvChargersPage />
    </div>
  );
};

export default Dashboard;
