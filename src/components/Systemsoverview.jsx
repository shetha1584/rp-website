import React, { useState } from "react";

const SystemOverview = () => {
  const [date, setDate] = useState("2025-12-09");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  // Dummy data (numbers only like screenshot)
  const data = {
    gridEnergy: 0,
    rooftopEnergy: 1729,
    solarWithoutTrackers: 3470,
    solarWithTrackers: 4399,
    peakDemand: 3844,
    diesel: 0,
    wind: 12965,
  };

  return (
    <div className=" pt-1">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h3 className="fw-bold m-0">System Overview</h3>

        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          className="form-control form-control-sm"
          style={{ width: "160px"  }}
        />
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table mb-0 text-center">
          <thead>
            <tr>
              <th className="fw-bold medium">Grid Energy</th>
              <th className="fw-bold medium">Rooftop Energy</th>
              <th className="fw-bold medium">Solar Without Trackers</th>
              <th className="fw-bold medium">Solar With Trackers</th>
              <th className="fw-bold medium">PeakDemand</th>
              <th className="fw-bold medium">Diesel</th>
              <th className="fw-bold medium">Wind</th>
            </tr>
          </thead>

          <tbody>
            <tr className="fw-bold">
              <td>{data.gridEnergy}</td>
              <td>{data.rooftopEnergy}</td>
              <td>{data.solarWithoutTrackers}</td>
              <td>{data.solarWithTrackers}</td>
              <td>{data.peakDemand}</td>
              <td>{data.diesel}</td>
              <td>{data.wind}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SystemOverview;
