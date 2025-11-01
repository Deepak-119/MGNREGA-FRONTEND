function PerformanceCard({ title, value }) {
  // value undefined check
  if (!value) {
    return (
      <div style={{
        width: "160px",
        padding: "10px",
        margin: "8px",
        borderRadius: "8px",
        background: "#eee",
        textAlign: "center",
        fontWeight: "bold",
        boxShadow: "0px 0px 4px rgba(0,0,0,0.1)"
      }}>
        <div>{title}</div>
        <div style={{ fontSize: "18px", color: "gray" }}>N/A</div>
      </div>
    );
  }

  const num = parseFloat(String(value).replace(/[^0-9.]/g, ""));
  let bg = "#fff";

  if (num > 2) bg = "#b2ffb2";         // GOOD
  else if (num > 1.2) bg = "#fff4b2";  // AVERAGE
  else bg = "#ffb2b2";                 // POOR

  return (
    <div style={{
      width: "160px",
      padding: "10px",
      margin: "8px",
      borderRadius: "8px",
      background: bg,
      textAlign: "center",
      fontWeight: "bold",
      boxShadow: "0px 0px 4px rgba(0,0,0,0.1)"
    }}>
      <div>{title}</div>
      <div style={{ fontSize: "18px" }}>{value}</div>
    </div>
  );
}

export default PerformanceCard;
