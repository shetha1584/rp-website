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
  mdiChevronDown,
  mdiHome,
  mdiCalendar,
  mdiFire,
} from "@mdi/js";

const Navbar = ({ activePage, setActivePage, activeSub, setActiveSub }) => {
  const [expanded, setExpanded] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const items = [
    { id: "dashboard", label: "Dashboard", type: "bootstrap", icon: "bi bi-grid-fill" },
    {
      id: "building",
      label: "Building Consumption",
      icon: mdiDoor,
      submenu: [
        { label: "Building Highlights", icon: mdiHome },
        { label: "Slot Wise", icon: mdiCalendar },
        { label: "Diesel Analysis", icon: mdiFire },
        { label: "Peak Analysis", icon: mdiFire },
        { label: "kVA vs kW", icon: mdiFire },
        { label: "Top Ten Clients", icon: mdiFire },
      ],
    },
    {
      id: "renewable",
      label: "Renewable’s",
      icon: mdiHighway,
      submenu: [
        { label: "Wheeled In Solar", icon: mdiHome },
        { label: "RoofTop Solar", icon: mdiCalendar },
        { label: "Wind", icon: mdiFire },
      ],
    },
    {
      id: "batteries",
      label: "Batteries",
      icon: mdiMedicalBag,
      submenu: [
        { label: "UPS", icon: mdiHome },
        { label: "LTO", icon: mdiCalendar },
        { label: "IOE", icon: mdiFire },
      ],
    },
    {
      id: "chillers",
      label: "Chillers",
      icon: mdiSnowflakeAlert,
      submenu: [{ label: "Chillers Dashboard", icon: mdiHome }],
    },
    {
      id: "Controls",
      label: "Controls",
      icon: mdiTune,
      submenu: [
        { label: "Controls", icon: mdiHome},
        { label: "UPS Battery Control", icon: mdiHome },
        { label: "Thermal Control", icon: mdiCalendar },
        { label: "LTO Battery Control", icon: mdiFire },
        { label: "Hot Water Control", icon: mdiFire },
        { label: "IOE Battery Control", icon: mdiFire },
      ],
    },
    { id: "documentation", label: "Documentation", icon: mdiEmailOutline },
    { id: "alerts", label: "Alerts", icon: mdiAlert },
  ];

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 90,
          width: expanded ? "250px" : "80px",
          backgroundColor: "#fff",
          height: "100vh",
          borderRight: "1px solid #eee",
          display: "flex",
          flexDirection: "column",
          alignItems: expanded ? "flex-start" : "center",
          padding: "20px 10px",
          gap: "10px",
          transition: "width 0.3s",
          overflowY: "auto",
        }}
      >
        {items.map((item) => {
          const isActive = activePage === item.id;
          const hasSubmenu = item.submenu?.length > 0;
          const isOpen = openMenu === item.id;
          const isControls = item.id === "controls";

          return (
            <div
              key={item.id}
              style={{ width: "100%", position: "relative" }}
              onMouseEnter={() => !expanded && hasSubmenu && setOpenMenu(item.id)}
              onMouseLeave={() => !expanded && setOpenMenu(null)}
            >
              {/* MAIN BUTTON */}
              <div
                onClick={() => {
                  if (!hasSubmenu || isControls) {
                   
                    setActivePage(item.id);
                    setActiveSub(null);
                  } else {
                  
                    setOpenMenu(isOpen ? null : item.id);
                  }
                }}
                style={{
                  width: "100%",
                  backgroundColor: isActive ? "#39b37d" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  gap: expanded ? "10px" : "0",
                  padding: "10px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                {item.type === "bootstrap" ? (
                  <i
                    className={item.icon}
                    style={{
                      fontSize: "22px",
                      color: isActive ? "white" : "#9d9d9d",
                    }}
                  />
                ) : (
                  <Icon path={item.icon} size={0.9} color={isActive ? "white" : "#9d9d9d"} />
                )}

                {expanded && (
                  <span style={{ color: isActive ? "white" : "#333", flex: 1 }}>
                    {item.label}
                  </span>
                )}

                {expanded && hasSubmenu && (
                  <Icon
                    path={mdiChevronDown}
                    size={0.7}
                    color={isActive ? "white" : "#777"}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenu(isOpen ? null : item.id);
                    }}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "0.2s",
                      cursor: "pointer",
                    }}
                  />
                )}
              </div>

              {/* SUBMENU */}
              {hasSubmenu && (
                <div
                  style={{
                    position: expanded ? "static" : "absolute",
                    left: expanded ? 0 : "70px",
                    background: expanded ? "transparent" : "#f5f5f5",
                    border: expanded ? "none" : "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "6px",
                    width: expanded ? "100%" : "220px",
                    display: isOpen ? "block" : "none",
                    boxShadow: expanded ? "none" : "0 2px 12px rgba(0,0,0,0.15)",
                    zIndex: 1000,
                  }}
                >
                  {item.submenu.map((sub) => (
                    <div
                      key={sub.label}
                      onClick={() => {
                        setActivePage(item.id);
                        setActiveSub(sub.label);
                      }}
                      style={{
                        padding: "8px 14px",
                        cursor: "pointer",
                        background: activeSub === sub.label ? "#39b37d20" : "transparent",
                        color: activeSub === sub.label ? "#39b37d" : "#333",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        margin: "2px 4px",
                        borderRadius: "4px",
                      }}
                    >
                      <Icon path={sub.icon} size={0.6} />
                      {sub.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* TOGGLE BUTTON */}
      <div
        onClick={() => {
          setExpanded(!expanded);
          setOpenMenu(null);
        }}
        style={{
          position: "fixed",
          top: "120px",
          left: expanded ? "250px" : "80px",
          width: "24px",
          height: "48px",
          backgroundColor: "rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          borderRadius: "0 4px 4px 0",
          transition: "left 0.3s",
          fontWeight: "bold",
          zIndex: 2000,
        }}
      >
        {expanded ? "<" : ">"}
      </div>
    </div>
  );
};

export default Navbar;
