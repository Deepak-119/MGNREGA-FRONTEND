function PerformanceCard({ title, value }) {
  let bg = "#fff";

  // crude logic: if value contains crore, compare numeric part
  const num = parseFloat(value.replace(/[^0-9.]/g, ""));

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
