import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Dashboard from "./components/Dashboard";

function App() {
  const [activePage, setActivePage] = useState("dashboard"); // default = dashboard

  return (
    <>
      <Header />

      {/* MAIN CONTENT ROW */}
      <div style={{ display: "flex", marginTop: "0px" }}>
        
        {/* NAVBAR */}
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        {/* PAGE CONTENT */}
        {/* PAGE CONTENT */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "#f5f5f5",   // << light grey
            minHeight: "100vh"            // << makes sure grey covers full page
          }}
        >


          {/* DASHBOARD CONTENT */}
          {activePage === "dashboard" && (
            <>
              <Dashboard />   {/* 👈 Your first component added */}
            </>
          )}

          {activePage === "door" && <h1>Door Content</h1>}
          {activePage === "highway" && <h1>Highway Content</h1>}
          {activePage === "medical" && <h1>Medical Content</h1>}
          {activePage === "snow" && <h1>Snowflake Alert Content</h1>}
          {activePage === "settings" && <h1>Settings Page</h1>}
          {activePage === "messages" && <h1>Messages</h1>}
          {activePage === "alerts" && <h1>Alerts Page</h1>}
        </div>
      </div>
    </>
  );
}

export default App;
