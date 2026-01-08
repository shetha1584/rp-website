import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-between px-2"
      style={{
        position: "fixed",     // 👈 THIS LINE
        top: 0,
        left: 0,
        width: "100%",
        height: "95px",        // matches logo height
        paddingTop: 0,
        paddingBottom: 0,
        background: "#fff",    // important so content doesn’t show through
        zIndex: 3000,          // higher than navbar
      }}


    >
      {/* Left Logo */}
      <img
        src="/images/logo-ems.png"
        alt="EMS Logo"
        style={{ height: "91px", objectFit: "contain" }}
      />

      {/* Right Logos (closer + bigger) */}
      <div
        className="d-flex align-items-center"
        style={{
            
            gap: "9px",          // smaller spacing between logos
            marginRight: "70px",  // pulls the whole group left
        }}
        >
        <img
            src="/images/nse.jpg"
            alt="NSE"
            style={{ height: "60px", objectFit: "contain" }}
        />
        <img
            src="/images/iitm.png"
            alt="IITM Research Park"
            style={{ height: "80px", objectFit: "contain" }}
        />
        <img
            src="/images/ceet.png"
            alt="CEET"
            style={{ height: "30px", objectFit: "contain" }}
        />
        </div>

    </div>
  );
}

export default Header;
