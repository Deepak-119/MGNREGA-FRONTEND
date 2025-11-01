export default function LoaderSkeleton() {
  return (
    <div style={{
      display: "flex",
      gap: "10px",
      justifyContent: "center",
      marginTop: "20px"
    }}>
      {[1,2,3].map(i => (
        <div key={i} style={{
          background: "#e0e0e0",
          width: "150px",
          height: "80px",
          borderRadius: "8px",
          animation: "pulse 1s infinite",
          opacity: 0.7
        }} />
      ))}

      <style>{`
        @keyframes pulse {
          0% { opacity: .6; }
          50% { opacity: 1; }
          100% { opacity: .6; }
        }
      `}</style>
    </div>
  );
}
