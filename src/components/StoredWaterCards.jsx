import React from "react";

const StoredWaterCards = () => {
  const cardsData = [
    { id: 1, image: "/images/coldwater.png", temperature: "0° C" },
    { id: 2, image: "/images/hotwater.png", temperature: "0° C" },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        width: "100%",
      }}
    >
      {cardsData.map((card) => (
        <div
          key={card.id}
          style={{
            flex: 1,
            background: "white",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          {/* Top half - Image */}
          <div style={{ flex: 1 }}>
            <img
              src={card.image}
              alt={`Card ${card.id}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Bottom half - Text */}
          <div
            style={{
              padding: "12px",
              backgroundColor: "#f7f7f7",
            }}
          >
            <div style={{ fontSize: "18px", fontWeight: "600", marginBottom: "4px" }}>
              Stored Water Temperature
            </div>
            <div style={{ fontSize: "20px", fontWeight: "700" }}>{card.temperature}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoredWaterCards;
