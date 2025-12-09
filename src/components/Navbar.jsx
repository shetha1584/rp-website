import React, { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiDoor,
  mdiHighway,
  mdiMedicalBag,
  mdiSnowflakeAlert,
  mdiTune,
  mdiEmailOutline,
  mdiAlert,
} from "@mdi/js";

const Navbar = ({ activePage, setActivePage }) => {
  const [expanded, setExpanded] = useState(false);

  const items = [
    { id: "dashboard", label: "Dashboard", type: "bootstrap", icon: "bi bi-grid-fill" },
    { id: "building", label: "Building Consumption", icon: mdiDoor },
    { id: "renewable", label: "Renewable`s", icon: mdiHighway },
    { id: "batteries", label: "Batteries", icon: mdiMedicalBag },
    { id: "chillers", label: "Chillers", icon: mdiSnowflakeAlert },
    { id: "controls", label: "Controls", icon: mdiTune },
    { id: "documentation", label: "Documentation", icon: mdiEmailOutline },
    { id: "alerts", label: "Alerts", icon: mdiAlert },
  ];

  return (
    <div style={{ position: "relative" }}>
      {/* Navbar */}
      <div
        style={{
          width: expanded ? "220px" : "70px",
          backgroundColor: "#ffffff",
          height: "100vh",
          borderRight: "1px solid #eee",
          display: "flex",
          flexDirection: "column",
          alignItems: expanded ? "flex-start" : "center",
          padding: "20px 10px",
          gap: "10px",
          transition: "width 0.3s",
          overflow: "hidden",
        }}
      >
        {items.map((item) => {
          const isActive = activePage === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setActivePage(item.id)}
              style={{
                width: "100%",
                backgroundColor: isActive ? "#39b37d" : "transparent",
                display: "flex",
                alignItems: "center",
                gap: expanded ? "10px" : "0",
                padding: "10px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {item.type === "bootstrap" ? (
                <i
                  className={item.icon}
                  style={{
                    fontSize: "22px",
                    color: isActive ? "white" : "#9d9d9d",
                    minWidth: "22px",
                  }}
                ></i>
              ) : (
                <Icon
                  path={item.icon}
                  size={0.9}
                  color={isActive ? "white" : "#9d9d9d"}
                />
              )}
              {expanded && (
                <span style={{ color: isActive ? "white" : "#333", fontWeight: 500 }}>
                  {item.label}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Toggle button outside navbar */}
      <div
        onClick={() => setExpanded(!expanded)}
        style={{
          position: "absolute",
          top: "20px",
          left: expanded ? "220px" : "70px",
          width: "24px",
          height: "48px",
          backgroundColor: "rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          borderRadius: "0 4px 4px 0",
          transition: "left 0.3s, background-color 0.2s",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#333",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.2)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.1)")
        }
      >
        {/* Arrow */}
        {expanded ? "<" : ">"}
      </div>
    </div>
  );
};

export default Navbar;
