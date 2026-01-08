import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";

const GridVsWheeledEnergy = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      Highcharts.chart(chartRef.current, {
        chart: {
          zoomType: "x",
          height: 420,
          spacingTop: 20,
        },

        title: {
          text: "Grid Consumption(kWh) VS Wheeled In Energy(kWh)",
          align: "left",
          x: 0,
          style: { fontSize: "18px", fontWeight: "bold" },
        },
        xAxis: {
          categories: [
            "00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30",
            "04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30",
            "08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00"
          ],
        },

        yAxis: [
          {
            title: { text: "WheeledIn Energy (kWh)" },
            opposite: false,
          },
          {
            title: { text: "Grid Energy (kWh)" },
            opposite: true,
          },
        ],

        legend: {
          layout: "horizontal",
          align: "center",
          verticalAlign: "bottom",
          symbolWidth: 40,          
          symbolHeight: 6,
          symbolRadius: 0, 
        },

        plotOptions: {
          series: {
            marker: { enabled: false },
            lineWidth: 2,
          },
        },

        series: [
          {
            name: "Solar Without Trackers (kWh)",
            data: [0, 0, 0, 5, 15, 30, 50, 60, 75, 90, 110, 105, 95], // dummy
            yAxis: 0,
            color: "#c0392b",
          },
          {
            name: "Solar With Trackers (kWh)",
            data: [0, 0, 0, 10, 25, 40, 65, 70, 95, 120, 110, 98, 80], // dummy
            yAxis: 0,
            color: "#e67e22",
          },
          {
            name: "Grid(kWh)",
            data: [150, 140, 160, 130, 180, 155, 170, 165, 150, 140, 160, 170, 155], // dummy
            yAxis: 1,
            color: "#34495e",
          },
          {
            name: "Wind(kWh)",
            data: [0, 20, 40, 10, 30, 45, 20, 60, 80, 90, 40, 70, 50], // dummy
            yAxis: 0,
            color: "#2c3e50",
          },
        ],

        credits: { enabled: false },
      });
    }
  }, []);

  return (
    <div
      ref={chartRef}
      style={{
        width: "100%",  
        height: "450px",
      }}
    ></div>
  );
};

export default GridVsWheeledEnergy;
