import React from "react";

const ChillersCard = () => {
  const phase1Chillers = [5, 6, 7, 8];
  const phase2Chillers = [1, 2, 3, 4];

  // Dummy loading percentage


  // Render Block as image
  const renderBlockImage = (title, imageSrc) => (
    <div style={{ textAlign: "left" }}>
      <div style={{ fontSize: "13px", fontWeight: "600", marginBottom: "8px" }}>
        {title}
      </div>

      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "100%", 
          margin: "0 auto",
          background: "#f3f3f3",
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );

  return (
    <div
      style={{
        background: "white",
        borderRadius: "14px",
        padding: "20px 25px 20px 40px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        gap: "20px",
        width: "100%",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "16px", fontWeight: "600", color: "#111" }}>
          Chillers
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          {/* Total Electrical Energy */}
          <div
            style={{
              height: "50px",
              width: "200px",
              borderRadius: "6px",
              backgroundImage: "url('/images/kWh.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "white",
              fontSize: "12px",
              fontWeight: "600",
              padding: "5px",
            }}
          >
            <div>Total Electrical Energy of the day</div>
            <div>
              <span style={{ marginRight: "40px", fontWeight: "700" }}>0</span>
              <span>kWh</span>
            </div>
          </div>

          {/* Total Cooling Energy */}
          <div
            style={{
              height: "50px",
              width: "200px",
              backgroundImage: "url('/images/TRh.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "6px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "white",
              fontSize: "12px",
              fontWeight: "600",
              padding: "5px",
            }}
          >
            <div>Total Cooling Energy</div>
            <div>
              <span style={{ marginRight: "40px", fontWeight: "700" }}>0</span>
              <span>kWh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Two Columns */}
      <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
        {/* LEFT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", flex: 1 }}>
          {/* Phase 1 */}
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              display: "inline-block",
              width: "max-content",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "5px" }}>
              Phase 1 Chillers
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              {phase1Chillers.map((num) => (
                <button
                  key={num}
                  style={{
                    padding: "5px 10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    background: "white",
                    cursor: "pointer",
                  }}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* E Block Image */}
          {renderBlockImage("E Block", "/images/Dblock.png")}
        </div>

        {/* Vertical Divider */}
        <div
          style={{
            width: "2px",
            backgroundColor: "#ccc",
            alignSelf: "stretch",
          }}
        ></div>

        {/* RIGHT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", flex: 1 }}>
          {/* Phase 2 */}
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              display: "inline-block",
              width: "max-content",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "5px" }}>
              Phase 2 Chillers
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              {phase2Chillers.map((num) => (
                <button
                  key={num}
                  style={{
                    padding: "5px 10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    background: "white",
                    cursor: "pointer",
                  }}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* D Block Image */}
          {renderBlockImage("D Block", "/images/Eblock.png")}
        </div>
      </div>

      {/* Loading Bar below columns */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {/* Small orange rectangle */}
      <div
        style={{
          width: "20px",
          height: "10px",
          backgroundColor: "orange",
          borderRadius: "2px",
          marginLeft:"500px",
        }}
      ></div>
      {/* Label */}
      <div style={{ fontSize: "12px", color: "#333" }}>Loading Percentage</div>
    </div>

    </div>
  );
};

export default ChillersCard;
