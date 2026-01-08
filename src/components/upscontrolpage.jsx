import React, { useState } from "react";

export default function UPSControlPage() {
  const ups = {
    soc: 75,
    status: "IDLE",
    current: 0,
    voltage: 384,
    main: "OFF",
    pre: "ON",
  };

  const [mode, setMode] = useState("CHARGE/DISCHARGE");
  const [func, setFunc] = useState("ON/OFF");
  const [pin, setPin] = useState("");

  const cardStyle = {
    background: "#fff",
    borderRadius: "25px",
    padding: "35px",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.20)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  };

  // ⭐ New row style for identical layout
  const rowStyle = {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    width: "100%",
    height: "48px",
    marginBottom: "20px",
    background: "#fff",
  };

  const labelStyle = {
    width: "130px",
    background: "#f2f2f2",
    padding: "12px",
    fontWeight: 600,
    color: "#666",
    borderRight: "1px solid #ddd",
    height: "100%",
    display: "flex",
    alignItems: "center",
  };

  const selectStyle = {
    flex: 1,
    border: "none",
    outline: "none",
    padding: "10px",
    color: "#444",
    fontWeight: 500,
    height: "100%",
    background: "#fff",
  };

  const inputStyle = {
    flex: 1,
    border: "none",
    outline: "none",
    padding: "10px",
    color: "#444",
    fontWeight: 500,
    height: "100%",
  };

  return (
    <div
      className="container-fluid"
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "1.1rem",
      }}
    >
      <h3 className="text-center mb-4" style={{ fontWeight: 700 }}>
        UPS Battery Control
      </h3>

      <div className="row g-4 align-items-stretch">
        {/* LEFT CARD */}
        <div className="col-md-7 d-flex">
          <div style={{ width: "100%" }}>
            <h5
              className="text-center mb-4"
              style={{ color: "#8B0000", fontWeight: 700 }}
            >
              Overview
            </h5>

            <div style={cardStyle}>
              {/* SOC */}
              <div className="d-flex align-items-center mb-3">
                <div
                  className="fw-bold"
                  style={{ color: "#006666", width: "180px", marginRight: "400px" }}
                >
                  SoC(%)
                </div>

                <div
                  style={{
                    width: "100px",
                    height: "26px",
                    background: "#999",
                    borderRadius: "6px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: `${ups.soc}%`,
                      height: "100%",
                      background: "#4C83FF",
                      borderRadius: "6px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      color: "white",
                      textAlign: "center",
                      fontSize: "13px",
                      lineHeight: "26px",
                      fontWeight: 600,
                    }}
                  >
                    {ups.soc}%
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div
                className="mt-3"
                style={{
                  fontSize: "1.5rem",
                  lineHeight: "1.1",
                  color: "#006666",
                  display: "grid",
                  rowGap: "8px",
                  gridTemplateColumns: "550px 1fr",
                }}
              >
                <div className="fw-semibold">Current Status</div>
                <div style={{ color: "black" }}>: {ups.status}</div>

                <div className="fw-semibold">Current (A)</div>
                <div style={{ color: "black" }}>: {ups.current}</div>

                <div className="fw-semibold">Voltage (V)</div>
                <div style={{ color: "black" }}>: {ups.voltage}</div>

                <div className="fw-semibold">Main Contactor Status</div>
                <div style={{ color: "black" }}>: {ups.main}</div>

                <div className="fw-semibold">Precharge Contactor Status</div>
                <div style={{ color: "black" }}>: {ups.pre}</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="col-md-5 d-flex">
          <div style={{ width: "100%" }}>
            <h5
              className="text-center mb-4"
              style={{ color: "#8B0000", fontWeight: 700 }}
            >
              Instantaneous Control
            </h5>

            <div style={cardStyle}>

              {/* STATUS ROW */}
              <div style={rowStyle}>
                <div style={labelStyle}>Status</div>
                <select
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                  style={selectStyle}
                >
                  <option>CHARGE/DISCHARGE</option>
                  <option>CHARGE</option>
                  <option>DISCHARGE</option>
                </select>
              </div>

              {/* FUNCTION ROW */}
              <div style={rowStyle}>
                <div style={labelStyle}>Function</div>
                <select
                  value={func}
                  onChange={(e) => setFunc(e.target.value)}
                  style={selectStyle}
                >
                  <option>ON/OFF</option>
                  <option>ON</option>
                  <option>OFF</option>
                </select>
              </div>

              {/* PIN ROW */}
              <div style={rowStyle}>
                <div style={labelStyle}>PIN</div>
                <input
                  type="password"
                  placeholder="*****"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <button
                className="btn btn-primary mt-auto w-100"
                style={{
                  borderRadius: "8px",
                  padding: "10px",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
