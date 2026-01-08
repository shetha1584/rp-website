import React, { useState } from "react";

export default function BatteriesPage({ setActivePage }) {
  const [selected, setSelected] = useState("LTO");

  // Helper to navigate and push history
  const goToPage = (page) => {
    setActivePage(page);
    window.history.pushState({ page }, "", `#${page}`);
  };

  return (
    <div className="container-fluid px-0 py-3">
      <div
        style={{
          background: "white",
          borderRadius: "14px",
          padding: "22px 35px",
          width: "100%",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        }}
      >
        {/* Header + Dropdown */}
        <div className="mb-3">
          <h5 className="m-0 mb-2">Batteries</h5>
          <div className="position-relative" style={{ width: "90px" }}>
            <select
              className="form-select form-select-sm"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              style={{ paddingRight: "28px", fontSize: "12px" }}
            >
              <option value="LTO">LTO</option>
              <option value="IOE">IOE</option>
              <option value="UPS">UPS</option>
            </select>
          </div>
        </div>

        {/* Row 1: LTO + IOE */}
        <div className="row g-4">
          {/* LTO */}
          <div className="col-md-6 d-flex gap-3">
            <div
              className="rounded"
              style={{
                width: "250px",
                height: "220px",
                backgroundImage: "url('/images/LTO.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="d-flex flex-column justify-content-between flex-grow-1">
              <div className="d-flex gap-3" style={{ marginTop: "50px" }}>
                <div>
                  <div className="fw-bold medium">Total Charge</div>
                  <div className="text-success medium">0.92 kWh</div>
                </div>
                <div>
                  <div className="fw-bold medium">Total Discharge</div>
                  <div className="text-success medium">17.47 kWh</div>
                </div>
              </div>

              <button
                className="btn btn-outline-primary btn-sm"
                style={{ height: "30px", width: "70px", marginLeft: "130px" }}
                onClick={() => goToPage("ltocontrols")}
              >
                Controls
              </button>
            </div>
          </div>

          {/* IOE */}
          <div className="col-md-6 d-flex gap-3">
            <div
              className="rounded"
              style={{
                width: "250px",
                height: "220px",
                backgroundImage: "url('/images/IOE.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="d-flex flex-column justify-content-between flex-grow-1">
              <div className="d-flex gap-3" style={{ marginTop: "50px" }}>
                <div>
                  <div className="fw-bold medium">Total Charge</div>
                  <div className="text-success medium">0.92 kWh</div>
                </div>
                <div>
                  <div className="fw-bold medium">Total Discharge</div>
                  <div className="text-success medium">17.47 kWh</div>
                </div>
              </div>
              <div className="d-flex gap-1 align-items-center" style={{ marginTop: "50px" }}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <div
                    key={n}
                    className="border rounded px-3 py-2 small"
                    style={{ cursor: "pointer" }}
                  >
                    {n}
                  </div>
                ))}

                <button
                  className="btn btn-outline-primary btn-sm"
                  style={{ height: "30px" }}
                  onClick={() => goToPage("controls")}
                >
                  Control
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Previous Cycle + UPS */}
        <div className="row g-4 mt-3">
          <div className="col-md-6" style={{ minHeight: "150px" }}>
            <div className="rounded p-3 h-110 d-flex justify-content-center align-items-center">
              <img
                src="/images/previouscycle.png"
                alt="Previous Cycle"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>

          <div className="col-md-6 d-flex gap-3">
            <div
              className="rounded"
              style={{
                width: "250px",
                height: "220px",
                backgroundImage: "url('/images/UPS.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="d-flex flex-column justify-content-between flex-grow-1">
              <div className="d-flex gap-3" style={{ marginTop: "50px" }}>
                <div>
                  <div className="fw-bold medium">Total Charge</div>
                  <div className="text-success medium">0.92 kWh</div>
                </div>
                <div>
                  <div className="fw-bold medium">Total Discharge</div>
                  <div className="text-success medium">17.47 kWh</div>
                </div>
              </div>

              <button
                className="btn btn-outline-primary btn-sm"
                style={{ height: "30px", width: "70px", marginBottom: "90px", marginLeft: "130px" }}
                onClick={() => goToPage("upscontrols")}
              >
                Control
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
