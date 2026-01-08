import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { time: "00:00", excess: 500, consumption: 1500, battery: 200, deficit: 800, demand: 1800 },
  { time: "01:00", excess: 600, consumption: 1400, battery: 250, deficit: 850, demand: 1800 },
  { time: "02:00", excess: 550, consumption: 1450, battery: 220, deficit: 830, demand: 1820 },
  { time: "03:00", excess: 580, consumption: 1420, battery: 210, deficit: 840, demand: 1750 },
  { time: "04:00", excess: 620, consumption: 1480, battery: 230, deficit: 860, demand: 1900 },
  { time: "05:00", excess: 630, consumption: 1500, battery: 240, deficit: 870, demand: 1950 },
  { time: "06:00", excess: 610, consumption: 1470, battery: 220, deficit: 850, demand: 1800 },
  { time: "07:00", excess: 650, consumption: 1520, battery: 250, deficit: 880, demand: 2000 },
  { time: "08:00", excess: 700, consumption: 1550, battery: 260, deficit: 900, demand: 2750 },
  { time: "09:00", excess: 750, consumption: 1700, battery: 280, deficit: 950, demand: 3200 },
];

export default function EnergyDemandChart() {
  return (
    <div style={{ width: "100%", height: 500 }}> {/* bigger height */}
      <ResponsiveContainer>
        <ComposedChart data={data} margin={{ top: 20, right: 50, left: 20, bottom: 20 }}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="time" />
          <YAxis yAxisId="left" label={{ value: "Energy in kWh", angle: -90, position: "insideLeft" }} />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{ value: "Power in kVA", angle: 90, position: "insideRight" }}
          />
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
          
          {/* Stacked bars */}
          <Bar yAxisId="left" dataKey="excess" stackId="a" fill="#A3D39C" />
          <Bar yAxisId="left" dataKey="consumption" stackId="a" fill="#E5E5E5" />
          <Bar yAxisId="left" dataKey="battery" stackId="a" fill="#4C83FF" />
          <Bar yAxisId="left" dataKey="deficit" stackId="a" fill="#6E6E60" />

          {/* Red line */}
          <Line yAxisId="right" type="monotone" dataKey="demand" stroke="#FF0000" strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
