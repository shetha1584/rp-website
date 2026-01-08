import React, { useState } from "react";

export default function ControlPage() {
  const socMain = 23;
  const currentStatus = "IDLE";

  const [selectedString, setSelectedString] = useState(3);

  const [mode, setMode] = useState("CHARGE/DISCHARGE");
  const [func, setFunc] = useState("ON/OFF");
  const [cRate, setCRate] = useState("C-Rate");
  const [pin, setPin] = useState("");

  const stringData = {
    1: { soc: 40, status: "IDLE", current: "0.30", voltage: "680", main: "OFF", pre: "OFF" },
    2: { soc: 55, status: "CHARGING", current: "1.20", voltage: "700", main: "ON", pre: "ON" },
    3: { soc: 75, status: "IDLE", current: "0.24", voltage: "679", main: "OFF", pre: "OFF" },
    4: { soc: 88, status: "DISCHARGING", current: "2.10", voltage: "690", main: "ON", pre: "ON" },
    5: { soc: 62, status: "IDLE", current: "0.10", voltage: "675", main: "OFF", pre: "OFF" },
  };

  const active = stringData[selectedString];

  const cardStyle = {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.20)",
  };

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
      <h3 className="text-center mb-3" style={{ fontWeight: 600 }}>
        IOE Battery Control
      </h3>

      <div className="row g-2">
        
        {/* LEFT SIDE */}
        <div className="col-md-7">
          <h5 className="text-center mb-4" style={{ color: "#8B0000", fontWeight: 600 }}>
            Overview
          </h5>

          <div className="p-4 mb-3" style={cardStyle}>
            
            {/* MAIN SOC */}
            <div className="mb-3">
              <div className="d-flex align-items-center mb-2" style={{ gap: "8px" }}>
                <div className="fw-bold" style={{ minWidth: "70px" }}>
                  SoC (%)
                </div>

                <div
                  style={{
                    flex: 1,
                    height: "22px",
                    background: "#999",
                    borderRadius: "4px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: `${socMain}%`,
                      height: "100%",
                      background: "#007bff",
                      borderRadius: "10px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      width: "100%",
                      height: "100%",
                      fontSize: "11px",
                      textAlign: "center",
                      lineHeight: "22px",
                      color: "white",
                    }}
                  >
                    {socMain}%
                  </div>
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className="d-flex align-items-center mb-3">
              <div className="fw-semibold" style={{ width: "540px" }}>
                Current Status:
              </div>
              <div>{currentStatus}</div>
            </div>

            {/* STRING BUTTONS */}
            <div className="d-flex gap-4 mb-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setSelectedString(num)}
                  className={`btn btn-sm ${selectedString === num ? "btn-secondary" : "btn-outline-secondary"}`}
                  style={{ fontSize: "12px", minWidth: "110px", width: "40px" }}
                >
                  String {num}
                </button>
              ))}
            </div>

            {/* STRING DETAILS */}
            <h6 className="fw-bold text-center mb-2">String {selectedString}</h6>

            {/* STRING SOC */}
            <div className="d-flex align-items-center mb-2" style={{ gap: "8px" }}>
              <div className="fw-bold" style={{ minWidth: "70px" }}>SoC (%)</div>

              <div
                style={{
                  flex: 1,
                  height: "22px",
                  background: "#999",
                  borderRadius: "4px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: `${active.soc}%`,
                    height: "100%",
                    background: "#6cbc6fff",
                    borderRadius: "10px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    height: "100%",
                    fontSize: "11px",
                    textAlign: "center",
                    lineHeight: "22px",
                    color: "white",
                  }}
                >
                  {active.soc}%
                </div>
              </div>
            </div>

            {/* GRID VALUES */}
            <div
              className="mt-2"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.5",
                color: "#008080",
                display: "grid",
                rowGap: "3px",
                columnGap: "370px",
                gridTemplateColumns: "190px 3fr",
              }}
            >
              {[
                { label: "Status", value: active.status },
                { label: "Battery Current (A)", value: active.current },
                { label: "Battery Voltage (V)", value: active.voltage },
                { label: "Main Contactor Status", value: active.main },
                { label: "Precharge Contactor Status", value: active.pre },
              ].map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="fw-semibold">{item.label}</div>
                  <div style={{ color: "black" }}>: {item.value}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-5">
          <h5 className="text-center mb-4" style={{ color: "#8B0000", fontWeight: 600 }}>
            Instantaneous Control
          </h5>

          <div className="p-5 mb-3" style={cardStyle}>

            <div style={rowStyle}>
              <div style={labelStyle}>Status</div>
              <select value={mode} onChange={(e) => setMode(e.target.value)} style={selectStyle}>
                <option>CHARGE/DISCHARGE</option>
                <option>CHARGE</option>
                <option>DISCHARGE</option>
              </select>
            </div>

            <div style={rowStyle}>
              <div style={labelStyle}>Function</div>
              <select value={func} onChange={(e) => setFunc(e.target.value)} style={selectStyle}>
                <option>ON/OFF</option>
                <option>ON</option>
                <option>OFF</option>
              </select>
            </div>

            <div style={rowStyle}>
              <div style={labelStyle}>C-Rate</div>
              <select value={cRate} onChange={(e) => setCRate(e.target.value)} style={selectStyle}>
                <option>C-Rate</option>
                <option>C1</option>
                <option>C2</option>
                <option>C3</option>
              </select>
            </div>

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

            <button className="btn btn-secondary w-100" style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.3)" }}>
              Submit
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
