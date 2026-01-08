import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const WindDashboard = () => {
  // Filters
  const [startDate, setStartDate] = useState("2025-12-01");
  const [endDate, setEndDate] = useState("2025-12-31");

  // ---------- SCATTER DUMMY DATA ---------- //
  const scatterData = Array.from({ length: 300 }, () => [
    Number((Math.random() * 6 + 3).toFixed(2)), // wind speed
    Number((Math.random() * 2500 + 500).toFixed(0)), // active power
  ]);

  const scatterOptions = {
    chart: {
      type: "scatter",
      height: 390, // smaller
      width: 700,
      marginLeft:100,
    },
    title: { text: "Turbine Performance", style: { fontSize: "18px", fontWeight: "bold" } },
    xAxis: {
      title: { text: "Wind Speed (m/s)" },
      min: 4,
      max: 13,
      tickInterval: 1,
      gridLineWidth: 0,
      minorGridLineWidth: 0
    },
    yAxis: {
      title: {
        text: "Active Power (kW)",
        rotation: 270,
        align: "middle",
        offset: 0,
        x: -50
      },
      min: 0,
      max: 4000,
      tickInterval: 500,
      gridLineWidth: 1,
      gridLineColor: "#e0e0e0"
    },
    series: [{ name: "Active Power (kW)", data: scatterData, color: "#e06666" }],
    credits: { enabled: false },
  };

  // ---------- BAR CHART DATA ---------- //
  const categories = ["Nov 2025", "Oct 2025", "Sep 2025", "Aug 2025", "Jul 2025", "Jun 2025"];
  const windData = [0, 450000, 900000, 1100000, 800000, 1500000];

  const barOptions = {
    chart: { type: "column", height: 400 }, // bigger
    title: { text: "" },
    xAxis: { categories },
    yAxis: {
      title: { text: "Wind Energy (kWh)" },
      labels: { formatter() { return this.value / 1000 + "k"; } },
      max: 2000000,
    },
    series: [{ name: "Wind Energy (kWh)", data: windData, color: "#c0392b" }],
    legend: { enabled: true },
    credits: { enabled: false },
  };

  return (
    <div style={{  display: "flex" }}>
      <div style={{ width: "8%" }}> {/* overall width */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2.5fr 1fr", // slightly smaller left column
            gap: "15px", // reduce spacing between columns
            alignItems: "start",
          }}
        >
          {/* LEFT — Scatter Chart */}
          <div>
            <HighchartsReact highcharts={Highcharts} options={scatterOptions} />
          </div>

          {/* RIGHT — Filters + Bar Chart */}
          <div style={{ background: "#fff", padding: "15px", borderRadius: "10px" }}>
            {/* Top Title + Dropdown */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
              <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>Energy Generation (kWh)</h3>
              <div
                style={{
                  border: "1px solid #d0d0d0",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "13px",
                  cursor: "pointer",
                  background: "#fff",
                  userSelect: "none",
                }}
              >
                Year/Month ▾
              </div>
            </div>

            {/* Start + End Filters */}
            <div style={{ display: "flex", gap: "40px", marginBottom: "15px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  width: "200px",
                  height: "45px",
                  padding: "6px 10px",
                  border: "1px solid #d0d0d0",
                  borderRadius: "8px",
                  background: "#f5f5f5",
                }}
              >
                <label style={{ fontWeight: "600", color: "#A33A38", fontSize: "13px" }}>Start:</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  style={{
                    border: "1px solid #d9d9d9",
                    width: "140px",
                    borderRadius: "6px",
                    padding: "4px 6px",
                    fontSize: "13px",
                    background: "#fff",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  width: "200px",
                  height: "45px",
                  padding: "6px 10px",
                  border: "1px solid #d0d0d0",
                  borderRadius: "8px",
                  background: "#f5f5f5",
                }}
              >
                <label style={{ fontWeight: "600", color: "#A33A38", fontSize: "13px" }}>End:</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  style={{
                    border: "1px solid #d9d9d9",
                    width: "140px",
                    borderRadius: "6px",
                    padding: "4px 6px",
                    fontSize: "13px",
                    background: "#fff",
                  }}
                />
              </div>
            </div>

            {/* Bar Chart */}
            <HighchartsReact highcharts={Highcharts} options={barOptions} />
          </div>
        </div>

        {/* Image below */}
        <div style={{ marginTop: "20px", width: "100%" }}>
          <img
            src="/images/windinstant.png"
            alt="Next Component"
            style={{
              width: "1200px",
              height: "auto",
              display: "block",
              marginLeft: "auto"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WindDashboard;
