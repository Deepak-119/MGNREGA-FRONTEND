import React, { useState, useEffect } from "react";
import axios from "axios";

const DistrictSelector = ({ onSelectDistrict }) => {
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    const fetchDistricts = async () => {
      const res = await axios.get("https://mgnrega-backend-42rt.onrender.com/api/districts");
      setDistricts(res.data);
    };
    fetchDistricts();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>📍 अपना जिला चुनें</h3>
      <select
        style={{
          padding: "10px",
          fontSize: "18px",
          borderRadius: "8px",
          width: "250px",
        }}
        onChange={(e) => onSelectDistrict(e.target.value)}
      >
        <option value="">Select District</option>
        {districts.map((d, i) => (
          <option key={i} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DistrictSelector;
