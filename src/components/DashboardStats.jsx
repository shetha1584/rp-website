import React from "react";

const DashboardStats = () => {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "14px",
        padding: "22px 35px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        marginTop: "5px",
        width: "100%",
      }}
    >
      <div style={{ flex: 1, paddingLeft: "10px" }}>
        <div style={{ fontSize: "19px", fontWeight: "700", color: "#111" }}>
          Energy Consumed
        </div>
        <div
          style={{
            fontSize: "34px",
            fontWeight: "700",
            marginTop: "6px",
            color: "#1e90ff",
          }}
        >
          238
        </div>
        <div style={{ marginTop: "2px", color: "#444", fontSize: "15px" }}>
          kWh
        </div>
      </div>

      <div style={{ width: "1px", height: "48px", backgroundColor: "#dcdcdc" }} />

      <div style={{ flex: 1, paddingLeft: "33px" }}>
        <div style={{ fontSize: "19px", fontWeight: "700", color: "#111" }}>
          Today's CO₂ Reduction
        </div>
        <div
          style={{
            fontSize: "34px",
            fontWeight: "700",
            marginTop: "6px",
            color: "#27c845",
          }}
        >
          12
        </div>
        <div style={{ marginTop: "2px", color: "#444", fontSize: "15px" }}>
          Tons of CO₂ Equivalent
        </div>
      </div>

      <div style={{ width: "1px", height: "48px", backgroundColor: "#dcdcdc" }} />

      <div style={{ flex: 1, paddingLeft: "33px" }}>
        <div style={{ fontSize: "19px", fontWeight: "700", color: "#111" }}>
          Peak Demand
        </div>
        <div
          style={{
            fontSize: "34px",
            fontWeight: "700",
            marginTop: "6px",
            color: "#db2a2a",
          }}
        >
          164
        </div>
        <div style={{ marginTop: "2px", color: "#444", fontSize: "15px" }}>
          kVA
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
