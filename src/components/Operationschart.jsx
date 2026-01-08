import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

/* ---------- Badge helper ---------- */
const badge = (bg) => ({
  background: bg,
  color: "#fff",
  padding: "6px 14px",
  borderRadius: 6,
  fontWeight: 600,
  display: "inline-block",
  minWidth: 90,
  textAlign: "center",
});

/* ---------- Main Component ---------- */
const OperationsDashboard = () => {
  const [date, setDate] = useState("2026-01-06");

  const chartOptions = {
    chart: { height: 450 },
    xAxis: {
      categories: ["00","01","02","03","04","05","06","07","08","09","10"],
    },
    yAxis: [
      { title: { text: "Energy in kWh" } },
      { title: { text: "Power in kVA" }, opposite: true },
    ],
    legend: { align: "center", verticalAlign: "bottom" },
    plotOptions: {
      column: { stacking: "normal", borderWidth: 0 },
    },
    series: [
      {
        name: "Excess RE (kWh)",
        type: "column",
        data: [300,280,320,350,330,310,290,270,260,250,280],
        color: "#7cb342",
      },
      {
        name: "Consumption (kWh)",
        type: "column",
        data: [-800,-780,-820,-850,-840,-810,-790,-760,-740,-730,-760],
        color: "#e0e0e0",
      },
      {
        name: "Battery Storage (kWh)",
        type: "column",
        data: [400,420,410,430,440,450,460,480,490,500,470],
        color: "#3f51b5",
      },
      {
        name: "Deficit RE (kWh)",
        type: "column",
        data: [-500,-520,-510,-530,-540,-550,-560,-580,-590,-600,-570],
        color: "#616161",
      },
      {
        name: "Demand (kVA)",
        type: "line",
        yAxis: 1,
        data: [2100,2050,1900,1850,1860,2000,2300,2700,3200,3545,3300],
        color: "red",
      },
    ],
  };

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <h2>Operations</h2>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* CHART */}
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />

      {/* ================= SUMMARY SECTION (IDENTICAL TO IMAGE) ================= */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          borderTop: "2px solid #999",
          borderBottom: "2px solid #999",
          marginTop: 20,
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ padding: 20, borderRight: "2px solid #ddd" }}>
          <h4>Excess Renewable Generated</h4>
          <strong>0 kWh</strong>

          <h4 style={{ marginTop: 20 }}>Duration</h4>
          <strong>0 min</strong>

          <h4 style={{ marginTop: 20 }}>Stored In</h4>
          <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
            <div>
              <div>IOE</div>
              <div style={badge("#8bc34a")}>0 kWh</div>
            </div>
            <div>
              <div>Cold Water Storage</div>
              <div style={badge("#8bc34a")}>0 kWh</div>
            </div>
            <div>
              <div>LTO</div>
              <div style={badge("#8bc34a")}>0 kWh</div>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div style={{ padding: 20, borderRight: "2px solid #ddd" }}>
          <h4>Peak Demand Reached</h4>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <strong>3545 kVA</strong>
            <span
              style={{
                background: "#b71c1c",
                color: "#fff",
                padding: "4px 10px",
                borderRadius: 6,
                fontWeight: 600,
              }}
            >
              11:37:05
            </span>
          </div>

          <h4 style={{ marginTop: 20 }}>Average Discharged Power</h4>
          <strong>0 kVA</strong>

          <h4 style={{ marginTop: 20 }}>Systems Run</h4>
          <p style={{ fontSize: 13, color: "#666" }}>
            Average Power Discharged Per Minute and Run time
          </p>

          <div style={{ display: "flex", gap: 20 }}>
            <div>
              <div>LTO</div>
              <div style={badge("#b71c1c")}>0 kWh</div>
              <div style={badge("#8e0000")}>0</div>
            </div>
            <div>
              <div>IOE</div>
              <div style={badge("#b71c1c")}>0 kWh</div>
              <div style={badge("#8e0000")}>0</div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ padding: 20 }}>
          <h4>Peak Tariff Hours</h4>
          <strong>6 am – 10 am</strong><br />
          <strong>6 pm – 10 pm</strong>

          <h4 style={{ marginTop: 20 }}>Energy Discharged</h4>
          <strong>0 kWh</strong>

          <h4 style={{ marginTop: 20 }}>Systems Run</h4>
          <div style={{ display: "flex", gap: 20 }}>
            <div>
              <div>IOE</div>
              <div style={badge("#ff9800")}>0 kWh</div>
            </div>
            <div>
              <div>Cold Water Storage</div>
              <div style={badge("#ff9800")}>0 kWh</div>
            </div>
            <div>
              <div>LTO</div>
              <div style={badge("#ff9800")}>0 kWh</div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <h2 style={{ marginTop: 30 }}>Controls</h2>
      <img
        src="images/controls.png"
        alt="Controls"
        style={{ width: "100%", display: "block" }}
      />
    </div>

    
  );
};

export default OperationsDashboard;
