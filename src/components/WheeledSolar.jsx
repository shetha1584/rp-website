import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const WheeledSolar = () => {
  const [phase, setPhase] = useState("SOLAR PHASE I");
  const [date, setDate] = useState("2025-12-18");

  const timeCategories = [
    "00:00","01:00","02:00","03:00","04:00","05:00",
    "06:00","07:00","08:00","09:00","10:00","11:00"
  ];

  // Dummy data
  const dailyEnergy = [0,0,0,0,0,0,300,700,1000,1300,300,0];
  const dailyIrradiation = [0,0,0,0,0,0,0.2,0.5,0.8,1.3,0.7,0];

  const inverter1 = [0,0,0,0,0,100,2500,5200,7500,9800,200,0];
  const inverter2 = [0,0,0,0,0,120,2700,5600,8200,10500,250,0];
  const inverter3 = [0,0,0,0,0,90,2300,5000,7800,11000,300,0];
  const inverter4 = [0,0,0,0,0,110,2600,5400,8100,10300,220,0];
  const inverter5 = [0,0,0,0,0,95,2400,5100,7700,9900,210,0];
  const inverter6 = [0,0,0,0,0,105,2550,5300,7900,10100,230,0];
  const inverter7 = [0,0,0,0,0,100,2500,5200,7800,10000,225,0];
  const inverter8 = [0,0,0,0,0,115,2700,5500,8200,10500,240,0];

  // Example Expected vs Actual data
  const actualEnergy = [0,0,0,0,0,0,300,720,1000,1300,1500,600];
  const expectedEnergy = [0,0,0,0,0,0,250,700,1100,1200,1400,650];

  // Common legend configuration
  const legendConfig = {
    align: "center",
    verticalAlign: "bottom",
    layout: "horizontal",
    itemStyle: { fontSize: "12px" },
    itemMarginTop: 2,
    itemMarginBottom: 2,
  };

  // ---- Daily Solar Chart ----
  const dailyOptions = {
    chart: {
      type: 'area', // filled area
      height: 450,
      backgroundColor: "#fff",
      spacingBottom: 60
    },
    title: {
      text: "Daily Solar Data",
      align: "left",
      style: { fontSize: "16px", fontWeight: "600" }
    },
    xAxis: {
      categories: timeCategories,
      tickInterval: 1
    },
    yAxis: [
      {
        min: 0,
        max: 1600,
        tickInterval: 400,
        title: { text: "Energy (kWh)" },
        labels: { style: { color: "#000000ff" } },
      },
      {
        title: { text: "Irradiation (kWh/m²)" },
        opposite: true,
        labels: { style: { color: "#000000ff" } },
      },
    ],
    legend: {
      ...legendConfig,
      symbolHeight: 9,
      symbolWidth: 40,
      symbolRadius: 0,
      squareSymbol: false,
    },
    series: [
      { name: "Energy", type: 'area', data: dailyEnergy, color: "#2F9BFF", marker: { enabled: false } },
      { name: "Irradiation", type: 'area', data: dailyIrradiation, color: "#6C63FF", marker: { enabled: false } },
    ],
    credits: { enabled: false },
    exporting: { enabled: false },
  };

  // ---- Inverter Active Power Chart ----
  const inverterOptions = {
    chart: {
      type: 'line',
      height: 413,
      spacing: [10, 10, 10, 10],
      backgroundColor: "#fff"
    },
    title: {
      text: "Inverter Active Power",
      align: "left",
      style: { fontSize: "16px", fontWeight: "600" }
    },
    xAxis: {
      categories: timeCategories,
      tickInterval: 1
    },
    yAxis: {
      min: 0,
      max: 12500,
      tickInterval: 2500,
      title: { text: "Energy (kWh)" },
      labels: {
        formatter() {
          return this.value >= 1000 ? `${this.value / 1000}k` : this.value;
        }
      }
    },
    legend: {
      ...legendConfig,
      symbolHeight: 12,
      symbolWidth: 40,
      symbolRadius: 0,
      squareSymbol: false,
    },
    series: [
      { name: "Inverter 1", type: 'line', data: inverter1, color: "#2F9BFF", lineWidth: 2, marker: { enabled: false } },
      { name: "Inverter 2", type: 'line', data: inverter2, color: "#FF6B6B", lineWidth: 2, marker: { enabled: false } },
      { name: "Inverter 3", type: 'line', data: inverter3, color: "#6C63FF", lineWidth: 2, marker: { enabled: false } },
      { name: "Inverter 4", type: 'line', data: inverter4, color: "#FFB74D", lineWidth: 2, marker: { enabled: false } },
      { name: "Inverter 5", type: 'line', data: inverter5, color: "#4CAF50", lineWidth: 2, marker: { enabled: false } },
      { name: "Inverter 6", type: 'line', data: inverter6, color: "#FF4081", lineWidth: 2, marker: { enabled: false } },
      { name: "Inverter 7", type: 'line', data: inverter7, color: "#00BCD4", lineWidth: 2, marker: { enabled: false } },
      { name: "Inverter 8", type: 'line', data: inverter8, color: "#795548", lineWidth: 2, marker: { enabled: false } },
    ],
    credits: { enabled: false },
    exporting: { enabled: false },
  };

  // ---- Expected vs Actual Generation Chart ----
  const expectedActualOptions = {
    chart: {
      type: 'column',
      height: 450,
      backgroundColor: "#fff"
    },
    title: {
      text: "Expected VS Actual Generation (kWh)",
      align: "left",
      style: { fontSize: "16px", fontWeight: "600" }
    },
    xAxis: {
      categories: timeCategories,
      title: { text: "Time" },
    },
    yAxis: {
      min: 0,
      title: { text: "Energy Generation (kWh)" }
    },
    legend: {
      ...legendConfig
    },
    plotOptions: {
      column: {
        grouping: true,
        shadow: false,
        borderWidth: 0
      }
    },
    series: [
      { name: "Actual Energy (kWh)", data: actualEnergy, color: "#8BC34A" },
      { name: "Expected Energy (kWh)", data: expectedEnergy, color: "#03A9F4" }
    ],
    credits: { enabled: false },
    exporting: { enabled: false },
  };

  return (
    <div style={{ padding: "10px 20px" }}>
      {/* Top Controls */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
        <select
          value={phase}
          onChange={(e) => setPhase(e.target.value)}
          style={{ padding: "6px 10px", borderRadius: "6px", border: "1px solid #ccc" }}
        >
          <option>SOLAR PHASE I</option>
          <option>SOLAR PHASE II</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ padding: "6px 10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
      </div>

      {/* Title */}
      <h2 style={{ marginBottom: "15px" }}>Wheeled In Solar PHASE I</h2>

      {/* Charts */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div style={{ background: "#fff", padding: "15px", borderRadius: "10px" }}>
          <HighchartsReact highcharts={Highcharts} options={dailyOptions} />
        </div>

        <div style={{ background: "#fff", padding: "15px", borderRadius: "10px" }}>
          <HighchartsReact highcharts={Highcharts} options={inverterOptions} />
        </div>
      </div>

      {/* Expected vs Actual chart full width */}
      <div style={{ background: "#fff", padding: "15px", borderRadius: "10px", marginTop: "20px" }}>
        <HighchartsReact highcharts={Highcharts} options={expectedActualOptions} />
      </div>
    </div>
  );
};

export default WheeledSolar;
