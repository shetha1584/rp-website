import React from "react";

const FacilityUsage = () => {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "14px",
        padding: "22px 35px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        marginTop: "3px",
        width: "100%",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <div style={{ fontSize: "16px", fontWeight: "600" }}>
          Facility Usage
        </div>

        <select
          style={{
            padding: "6px 12px",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        >
          <option>10/26/2025</option>
        </select>
      </div>

      {/* ⭐ Replace SVG graph with an image */}
      <div
        style={{
          width: "100%",
          height: "420px",
          marginBottom: "30px",
          marginTop:"10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src="/images/facilityusage.png"
          alt="Facility Graph"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Footer section */}
      <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "20px" }}>
        <div
          style={{ fontSize: "14px", fontWeight: "600", marginBottom: "12px" }}
        >
          Top Clients
        </div>
      </div>
    </div>
  );
};

export default FacilityUsage;
