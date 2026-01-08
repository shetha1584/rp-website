import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import WindDashboard from "./WindEnergy";
const Wind = () => {
  const [selectedDate, setSelectedDate] = useState("2025-12-09");

  // Dummy time-series data
  const categories = Array.from({ length: 200 }, (_, i) => {
    const hours = Math.floor(i / 12)
      .toString()
      .padStart(2, "0");
    const minutes = ((i % 12) * 5).toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  });

  const activePower = categories.map(() => 80000 + Math.random() * 80000);
  const windSpeed = categories.map(() => 4 + Math.random() * 6);

  const options = {
    chart: {
      zoomType: "x",
      height: 420,
    },
    title: {
      text: "Active Power (kW) and Wind Speed (m/s)",
      align: "left",
      style: { fontSize: "18px", fontWeight: "bold" },
    },
    xAxis: {
      categories,
      tickInterval: 20,
    },
    yAxis: [
      {
        title: { text: "Active Power (kW)" },
        min: 0,
        max: 200000,
      },
      {
        title: { text: "Wind Speed (m/s)" },
        opposite: true,
        min: 2,
        max: 12,
      },
    ],
    tooltip: {
      shared: true,
      formatter: function () {
        const time = this.x;
        let s = `<b>${time}</b><br/>`;
        this.points.forEach((point) => {
          s += `${point.series.name}: <b>${point.y.toFixed(1)}</b><br/>`;
        });
        return s;
      },
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
    },
    series: [
      {
        name: "Active Power (kW)",
        data: activePower,
        color: "#33A6FF",
        lineWidth: 2,
      },
      {
        name: "Wind Speed (m/s)",
        data: windSpeed,
        color: "#3B3BFF",
        yAxis: 1,
        lineWidth: 2,
      },
    ],
    credits: {
      enabled: true,
    },
  };

  return (
    <div style={{ background: "#fff", padding: "20px", borderRadius: "10px" }}>
      {/* Top bar with date picker */}
      <div
        style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "-15px",   // moved higher
            marginTop: "-20px",      // moved higher
            zIndex: 50,
            position: "relative",
        }}
        >
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{
            padding: "8px 10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Chart */}
      <HighchartsReact highcharts={Highcharts} options={options} />
      <WindDashboard/>
    </div>
  );
};

export default Wind;
