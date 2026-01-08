import React from "react";
import SystemOverview from "./Systemsoverview";
import GridVsWheeledEnergy from "./GridVsWheeledEnergy ";
const BuildingHighlights = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: "#ffffffff", // light grey background
        minHeight: "100vh", // optional: full height
      }}
    >
      <SystemOverview />
      <GridVsWheeledEnergy/>
    </div>
  );
};

export default BuildingHighlights;
