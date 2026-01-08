import React, { useState } from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

const RooftopSolar = () => {
  const [date, setDate] = useState("2025-12-18")
  const [expectedView, setExpectedView] = useState("overview")

  const timeCategories = [
    "00:00","01:00","02:00","03:00","04:00","05:00",
    "06:00","07:00","08:00","09:00","10:00","11:00",
    "12:00","13:00","14:00","15:00"
  ]

  /* ---------------- TOP ROOFTOP SOLAR ---------------- */
  const rooftopChartOptions = {
    chart: { type: "area", height: 420 },
    title: { text: null },
    xAxis: {
      categories: timeCategories,
      title: { text: "Time in HOURS", style: { fontWeight: 600 } }
    },
    yAxis: [
      {
        title: { text: "Energy (kWh)", style: { fontWeight: 600 } },
        min: 0,
        max: 600
      },
      {
        title: { text: "Irradiation (kWh/m2)", style: { fontWeight: 600 } },
        min: 0,
        max: 1,
        opposite: true
      }
    ],
    legend: { align: "center", verticalAlign: "top" },
    plotOptions: {
      area: { marker: { enabled: false }, lineWidth: 3 }
    },
    series: [
      {
  name: "energy(kWh)",
  data: [0,0,0,0,0,0,0,30,180,220,260,420,580,560,270,200],
  color: "#0B84FF",
  fillColor: {
    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    stops: [
      [0, "rgba(11, 132, 255, 0.55)"],  // bright top
      [1, "rgba(11, 132, 255, 0.05)"]   // transparent bottom
    ]
  }
}
,
        {
    name: "solar_radiation",
    data: [0,0,0,0,0,0,0,0.1,0.3,0.35,0.4,0.7,0.95,0.75,0.4,0.35],
    yAxis: 1,
    color: "#2ECC71",
    fillColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
        [0, "rgba(46, 204, 113, 0.6)"],   // bright top
        [1, "rgba(46, 204, 113, 0.05)"]   // transparent bottom
        ]
    }
    }

    ],
    credits: { enabled: false }
  }

  /* ---------------- PHASE WISE ---------------- */
  const phaseWiseOptions = {
    chart: { type: "line", height: 360 },
    title: { text: null },
    xAxis: { categories: timeCategories },
    yAxis: { title: { text: "Energy Generation (kWh)" } },
    legend: { align: "center", verticalAlign: "bottom" },
    tooltip: { shared: true },
    series: [
      { name: "Phase1 Energy", data: [0,0,0,0,0,0,0,25.5,135,170,195,340,480,390,190,150], color: "#2DA8FF" },
      { name: "Phase2 Energy", data: [0,0,0,0,0,0,0,10.1,45,55,62,72,100,165,75,50], color: "#4B4ACF" }
    ],
    credits: { enabled: false }
  }

  /* ---------------- EXPECTED VS ACTUAL ---------------- */
  const expectedActualOptions = {
    chart: { type: "column", height: 360 },
    title: { text: null },
    xAxis: { categories: timeCategories },
    yAxis: { title: { text: "Energy Generation (kWh)" } },
    legend: { align: "center", verticalAlign: "bottom" },
    plotOptions: {
      column: { borderRadius: 4, groupPadding: 0.2 }
    },
    series: [
      { name: "Actual Energy (kWh)", data: [0,0,0,0,0,0,0,170,210,245,400,560,550,250,180], color: "#2DA8FF" },
      { name: "Expected Energy (kWh)", data: [0,0,0,0,0,0,0,80,320,350,420,750,1050,720,400], color: "#5B55D6" }
    ],
    credits: { enabled: false }
  }

  return (
    <div style={{ padding: "16px 24px", background: "#fff" }}>
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        <h3 style={{ margin: 0, fontWeight: 500 }}>RoofTop Solar</h3>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          style={{ padding: "6px 10px", borderRadius: 6, border: "1px solid #ccc" }}
        />
      </div>

      {/* TOP GRAPH */}
      <HighchartsReact highcharts={Highcharts} options={rooftopChartOptions} />

      {/* BOTTOM ROW */}
      <div style={{ display: "flex", gap: 24, marginTop: 32 }}>
        
        {/* PHASE WISE */}
        <div style={{ width: "50%" }}>
           <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            style={{
              marginBottom: 12,
              padding: "6px 10px",
              borderRadius: 6,
              border: "1px solid #ccc"
            }}
          />
          <h3 style={{ marginBottom: 6 }}>Phase Wise Generation (kwh)</h3>

          {/* DATE DROPDOWN BELOW HEADING */}
          

          <HighchartsReact highcharts={Highcharts} options={phaseWiseOptions} />
        </div>

        {/* EXPECTED VS ACTUAL */}
        <div style={{ width: "50%" }}>
            <select
            value={expectedView}
            onChange={e => setExpectedView(e.target.value)}
            style={{
              marginBottom: 12,
              padding: "6px 10px",
              borderRadius: 6,
              border: "1px solid #ccc"
            }}
          >
            <option value="overview">Graph Overview</option>
            <option value="phase1">Phase 1</option>
            <option value="phase2">Phase 2</option>
          </select>
          <h3 style={{ marginBottom: 6 }}>Expected VS Actual Generation (kwh)</h3>

          {/* DROPDOWN BELOW HEADING */}
          

          <HighchartsReact highcharts={Highcharts} options={expectedActualOptions} />
        </div>

      </div>
    </div>
  )
}

export default RooftopSolar
