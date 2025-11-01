import React from "react";

function Compare({ data1, data2 }) {
  return (
    <div style={{
      marginTop: "20px",
      padding: "10px",
      background: "#f6f6f6",
      borderRadius: "6px"
    }}>
      <h3>जिला तुलना</h3>
      <p><b>{data1.district}</b> vs <b>{data2.district}</b></p>

      <p>काम: {data1.work} | {data2.work}</p>
      <p>धनराशि: {data1.funds} | {data2.funds}</p>
      <p>लाभार्थी: {data1.people} | {data2.people}</p>
    </div>
  );
}

export default Compare;
