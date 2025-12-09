import React from "react";

const EvChargersPage = () => {
  return (
    <div style={{ background: "white", minHeight: "100vh" }}>
      <div className="container mt-4">

        {/* ---------- Page Title + Date Dropdown ---------- */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="fw-bold fs-5">EV Chargers</div>

          <div>
            <input
              type="date"
              className="form-control"
              style={{ width: "180px" }}
            />
          </div>
        </div>

        {/* ---------- Stats Row ---------- */}
        <div className="d-flex justify-content-end mb-5">
          <img
            src="/images/evcharger.png"
            alt="Chargers Used"
            style={{
              width: "600px",        // bigger size
              maxWidth: "100%",
              borderRadius: "12px",
            }}
          />
        </div>

        {/* ---------- All Chargers Title ---------- */}
        <div className="fw-bold fs-5 mb-3">All Chargers</div>

        {/* ---------- ONE Pond Area Image ---------- */}
        <div
          className="rounded p-3 mb-4"
          style={{
            minHeight: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
          }}
        >
          <img
            src="/images/allchargers.png"
            alt="Pond Area All Chargers"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default EvChargersPage;
