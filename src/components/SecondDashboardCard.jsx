import React, { useState } from "react";

const lightenColor = (hex, amount = 0.25) => {
  let col = hex.replace("#", "");
  let num = parseInt(col, 16);

  let r = Math.min(255, Math.floor((num >> 16) + 255 * amount));
  let g = Math.min(255, Math.floor(((num >> 8) & 0x00ff) + 255 * amount));
  let b = Math.min(255, Math.floor((num & 0x0000ff) + 255 * amount));

  return `rgb(${r}, ${g}, ${b})`;
};


const SecondDashboardCard = () => {
  const [monthDate, setMonthDate] = useState("2025-01-01");
  const [dailyDate, setDailyDate] = useState("2025-11-30");

  // Tooltip States
  const [hoveredSlice, setHoveredSlice] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Values kept / adjusted from your example; percentages computed from these values (rounded to 1 decimal)
  const energyData = [
    { name: "Grid", value: 18403, color: "#6b5b5a", percentage: 69.4 },
    { name: "Rooftop Solar", value: 794, color: "#9c8b8a", percentage: 3.0 },
    { name: "Solar Without Trackers", value: 2130, color: "#e88c5d", percentage: 8.0 },
    { name: "Diesel", value: 0, color: "#2a2a2a", percentage: 0.0 },
    { name: "Solar With Trackers", value: 3332, color: "#ea6a3a", percentage: 12.6 },
    { name: "Wind", value: 1875, color: "#4a5d7c", percentage: 7.1 },
  ];

  return (
    <div
      style={{
        background: "white",
        borderRadius: "14px",
        padding: "22px 35px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        marginTop: "3px",
        width: "100%",
      }}
    >
      {hoveredSlice && (
      <div
        style={{
          position: "fixed",
          top: mousePos.y + 10,
          left: mousePos.x + 10,
          background: hoveredSlice.color, // dynamic color from slice
          color: "white",
          padding: "5px 8px",
          borderRadius: "4px",
          fontSize: "11px",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      >
        {hoveredSlice.name}: {hoveredSlice.value}
      </div>
    )}


      {/* LEFT SECTION */}
      <div style={{ flex: 1.8 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <div style={{ fontSize: "16px", fontWeight: "600", color: "#111" }}>
            Monthly Energy Profile ⓘ
          </div>

          <input
            type="month"
            value={monthDate.slice(0, 7)}
            onChange={(e) => setMonthDate(e.target.value + "-01")}
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              fontSize: "13px",
            }}
          />
        </div>

        <div style={{ fontSize: "34px", fontWeight: "700", color: "#111", marginBottom: "8px" }}>
          87.47%
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            marginBottom: "4px",
          }}
        >
          <span style={{ color: "#27c845", fontWeight: "600" }}>Renewable Energy</span>
          <span style={{ color: "#999" }}>Fossil Fuel</span>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "13px",
            background: "#eaeaea",
            borderRadius: "6px",
            marginBottom: "6px",
          }}
        >
          <div
            style={{
              width: "87%",
              height: "100%",
              background: "#27c845",
              borderRadius: "6px",
            }}
          />

          <div
            style={{
              position: "absolute",
              right: "10px",
              top: "-18px",
              fontSize: "12px",
              fontWeight: "600",
              color: "#444",
              marginTop: "16px",
            }}
          >
            87%
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "13px",
            color: "#666",
            marginBottom: "25px",
          }}
        >
          <span>1528660 kWh</span>
          <span>218899 kWh</span>
        </div>

        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            border: "1px solid #f0f0f0",
            borderRadius: "10px",
          }}
        >
          <div style={{ fontSize: "14px", fontWeight: "600", marginBottom: "15px", color: "#333" }}>
            Sources of Renewables
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "11px",
              marginBottom: "0px",
              padding: "0 5px",
            }}
          >
            <div style={{ width: "10%", textAlign: "left" }}>
              Solar
              <br />
              Without
              <br />
              Trackers
            </div>
            <div style={{ width: "12%", textAlign: "left" }}>
              Solar
              <br />
              With
              <br />
              Trackers
            </div>
            <div style={{ width: "73%", textAlign: "center" }}>Wind</div>
            <div style={{ width: "5%", textAlign: "right" }}>Rooftop</div>
          </div>

          <div style={{ width: "100%", height: "24px", display: "flex", borderRadius: "6px", overflow: "hidden" }}>
            <div style={{ width: "10%", background: "#e88c5d" }} />
            <div style={{ width: "12%", background: "#ea6a3a" }} />
            <div style={{ width: "73%", background: "#4a5d7c" }} />
            <div style={{ width: "5%", background: "#9c8b8a" }} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "12px",
              marginTop: "6px",
              padding: "0 5px",
            }}
          >
            <div style={{ width: "10%", textAlign: "left" }}>10%</div>
            <div style={{ width: "12%", textAlign: "left" }}>12%</div>
            <div style={{ width: "73%", textAlign: "center" }}>73%</div>
            <div style={{ width: "5%", textAlign: "right" }}>5%</div>
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <div
  style={{
    borderLeft: "1px solid #dcdcdc",
    marginLeft: "30px",
    marginRight: "30px",
    paddingLeft: "30px",
    flex: 1.2,
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px",
      width: "100%",
    }}
  >
    <div style={{ fontSize: "16px", fontWeight: "600", color: "#111" }}>
      Daily Consumption
    </div>
  </div>

  <div
    style={{
      position: "relative",
      width: "180px",
      height: "180px",
      margin: "0 auto 20px",
    }}
  >
    <svg width="180" height="180" viewBox="0 0 180 180">
      <circle cx="90" cy="90" r="80" fill="white" />

      {energyData.map((item, index) => {
        const prev = energyData
          .slice(0, index)
          .reduce((sum, d) => sum + d.percentage, 0);

        const startAngle = (prev / 100) * 360 - 90;
        const endAngle = ((prev + item.percentage) / 100) * 360 - 90;

        if (item.percentage === 0) return null;

        const startRad = (startAngle * Math.PI) / 180;
        const endRad = (endAngle * Math.PI) / 180;

        const x1 = 90 + 80 * Math.cos(startRad);
        const y1 = 90 + 80 * Math.sin(startRad);
        const x2 = 90 + 80 * Math.cos(endRad);
        const y2 = 90 + 80 * Math.sin(endRad);

        const largeArc = item.percentage > 50 ? 1 : 0;

        const midAngle =
          ((startAngle + endAngle) / 2) * (Math.PI / 180);
        const labelX = 90 + 50 * Math.cos(midAngle);
        const labelY = 90 + 50 * Math.sin(midAngle);

        const showLabel = item.percentage >= 4;

        return (
          <g key={item.name}>
            <path
              d={`M 90 90 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`}
              fill={
                hoveredSlice?.name === item.name
                  ? lightenColor(item.color)
                  : item.color
              }
              style={{ transition: "fill 0.2s ease" }}
              onMouseEnter={() => setHoveredSlice(item)}
              onMouseLeave={() => setHoveredSlice(null)}
              onMouseMove={(e) =>
                setMousePos({ x: e.clientX, y: e.clientY })
              }
            />

            {showLabel && (
              <text
                x={labelX}
                y={labelY}
                fill="white"
                fontSize="10"
                fontWeight="600"
                textAnchor="middle"
                dominantBaseline="middle"
                pointerEvents="none"
              >
                {item.percentage}%
              </text>
            )}
          </g>
        );
      })}

      <circle cx="90" cy="90" r="40" fill="white" />
    </svg>
  </div>

  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
    {energyData.map((item) => (
      <div
        key={item.name}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "13px",
        }}
      >
        <div
          style={{
            width: "12px",
            height: "12px",
            backgroundColor: item.color,
            borderRadius: "2px",
          }}
        />
        <span style={{ color: "#666" }}>{item.name}</span>
      </div>
    ))}
  </div>
</div>


      {/* RIGHT SECTION */}
      <div style={{ flex: 0.9 }}>
        <input
          type="date"
          value={dailyDate}
          onChange={(e) => setDailyDate(e.target.value)}
          style={{
            padding: "4px 8px",
            borderRadius: "4px",
            border: "1px solid #ddd",
            fontSize: "13px",
            marginLeft: "120px",
          }}
        />

        <div style={{ height: "36px" }} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px 40px",
            marginTop: "10px",
          }}
        >
          {energyData.map((item) => (
            <div key={item.name} style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  color: item.value === 0 ? "#bbb" : "#666",
                  fontSize: "13px",
                }}
              >
                {item.name}
              </span>
              <span
                style={{
                  fontWeight: "600",
                  color: "#111",
                  marginTop: "2px",
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "25px" }}>
          <div style={{ fontSize: "13px", color: "#666" }}>Today's Renewable Share</div>
          <div
            style={{ fontSize: "24px", fontWeight: "700", color: "#27c845", marginTop: "4px" }}
          >
            25 %
          </div>
        </div>

        <div style={{ marginTop: "25px", fontSize: "13px", display: "flex", gap: "30px" }}>
          <div>
            <div style={{ color: "#666" }}>Power Factor</div>
            <div style={{ color: "#666" }}>(Min)</div>
            <div
              style={{
                fontWeight: "700",
                fontSize: "15px",
                marginTop: "4px",
                color: "#111",
              }}
            >
              0.99
            </div>
          </div>

          <div>
            <div style={{ color: "#666" }}>Power Factor</div>
            <div style={{ color: "#666" }}>(Avg)</div>
            <div
              style={{
                fontWeight: "700",
                fontSize: "15px",
                marginTop: "4px",
                color: "#111",
              }}
            >
              1.00
            </div>
          </div>
        </div>

        <div style={{ fontSize: "11px", color: "#ccc", marginTop: "15px" }}>
          Day Cumulative Energy in kWh
        </div>
      </div>
    </div>
  );
};

export default SecondDashboardCard;
