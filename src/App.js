import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import BuildingHighlights from "./components/BuildingHighlights";
import Wind from "./components/Wind";
import BatteriesPage from "./components/BatteryCard";
import UPSControlPage from "./components/upscontrolpage";
import LTOControlPage from "./components/ltocontrolpage";
import WheeledSolar from "./components/WheeledSolar";
import RooftopSolar from "./components/RooftopSolar";
import OperationsChart from "./components/Operationschart";
function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [activeSub, setActiveSub] = useState(null);

  // 👇 LIFTED STATE (KEY FIX)
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  // ---------- Subpage mappings ----------
  const buildingPages = {
    "Building Highlights": <BuildingHighlights />,
    "Slot Wise": <div>Slot Wise Content</div>,
    "Diesel Analysis": <div>Diesel Analysis Content</div>,
    "Peak Analysis": <div>Peak Analysis Content</div>,
    "kVA vs kW": <div>kVA vs kW Content</div>,
    "Top Ten Clients": <div>Top Ten Clients Content</div>,
  };

  const renewablePages = {
    "Wheeled In Solar": <WheeledSolar />,
    "RoofTop Solar": <RooftopSolar />,
    Wind: <Wind />,
  };

  // ---------- Handle browser back ----------
  useEffect(() => {
    const handlePopState = () => {
      if (
        activePage === "controls" ||
        activePage === "upscontrols" ||
        activePage === "ltocontrols"
      ) {
        setActivePage("batteries");
      } else {
        setActivePage("dashboard");
        setActiveSub(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [activePage]);

  return (
    <>
      {/* FIXED HEADER */}
      <Header />

      {/* MAIN LAYOUT */}
      <div style={{ display: "flex" }}>
        {/* FIXED NAVBAR */}
        <Navbar
          activePage={activePage}
          setActivePage={setActivePage}
          activeSub={activeSub}
          setActiveSub={setActiveSub}
          expanded={navbarExpanded}          // 👈 PASS STATE
          setExpanded={setNavbarExpanded}    // 👈 PASS SETTER
        />

        {/* PAGE CONTENT */}
        <div
          style={{
            marginTop: "85px", // header height
            marginLeft: navbarExpanded ? "250px" : "0px", // 👈 DYNAMIC OFFSET
            flex: 1,
            padding: "20px",
            backgroundColor:
              activePage === "dashboard" ? "#f5f5f5" : "#ffffff",
            minHeight: "calc(100vh - 95px)",
            transition: "margin-left 0.3s",
          }}
        >
          {activePage === "dashboard" && (
            <Dashboard setActivePage={setActivePage} />
          )}

          {activePage === "building" &&
            activeSub &&
            buildingPages[activeSub]}

          {activePage === "renewable" &&
            activeSub &&
            renewablePages[activeSub]}

          {activePage === "batteries" && (
            <BatteriesPage setActivePage={setActivePage} />
          )}

          {activePage === "chillers" && <div>Chillers Content</div>}
          {activePage === "controls" && <BuildingHighlights />}
          {activePage === "upscontrols" && <UPSControlPage />}
          {activePage === "ltocontrols" && <LTOControlPage />}
          {activePage === "documentation" && <div>Documentation Content</div>}
          {activePage === "alerts" && <div>Alerts Content</div>}
          {activePage === "Controls" && <OperationsChart />}
          
        </div>
      </div>
    </>
  );
}

export default App;
