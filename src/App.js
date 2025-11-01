import { useState } from "react";
import DistrictSelector from "./components/DistrictSelector";
import PerformanceCard from "./components/PerformanceCard";
import Charts from "./components/Charts";
import HelpModal from "./components/HelpModal";
import Compare from "./components/Compare";
import LoaderSkeleton from "./components/LoaderSkeleton";
import OfflineBadge from "./components/OfflineBadge";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const [compareData, setCompareData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [offline, setOffline] = useState(false);

  const fetchData = async (district) => {
    if (!district) return;
    setLoading(true);

    try {
      const res = await axios.get(
        `https://mgnrega-backend-42rt.onrender.com/api/data/${district}`
      );

      setData(res.data);
      localStorage.setItem(district, JSON.stringify(res.data));
      setOffline(false);

    } catch (err) {
      const cached = localStorage.getItem(district);

      if (cached) {
        setData(JSON.parse(cached));
        setOffline(true);
      } else {
        alert("नेटवर्क समस्या! कृपया बाद में प्रयास करें");
      }
    }

    setLoading(false);
  };

  // ✅ Rough Auto detect
  const detectLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        // rough logic
        if (latitude > 26 && longitude > 80) fetchData("Lucknow");
        else fetchData("Kanpur Nagar");
      },
      () => {
        alert("Location अनुमति दें!");
      }
    );
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>MGNREGA प्रदर्शन</h2>

      {/* Help + Detect */}
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <button
          onClick={() => setShowHelp(true)}
          style={{
            background: "#1976d2",
            color: "white",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            marginRight: "10px"
          }}
        >
          सहायता (Help)
        </button>

        <button
          onClick={detectLocation}
          style={{
            background: "#4caf50",
            color: "white",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer"
          }}
        >
          मेरा जिला पहचानें
        </button>
      </div>

      {/* Offline Indicator */}
      {offline && <OfflineBadge />}

      <DistrictSelector onSelectDistrict={fetchData} />

      {/* Loading Skeleton */}
      {loading && <LoaderSkeleton />}

      {/* Core Data UI */}
      {!loading && data && (
        <>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <PerformanceCard title="काम किए गए" value={data.work} />
            <PerformanceCard title="कुल धनराशि" value={data.funds} />
            <PerformanceCard title="लाभार्थी" value={data.people} />
          </div>

          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <button
              onClick={() => setCompareData(data)}
              style={{
                background: "#ff9800",
                color: "white",
                padding: "8px 12px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer"
              }}
            >
              इस जिले से तुलना करें
            </button>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Charts months={data.months} values={data.values} />
          </div>
        </>
      )}

      {/* Comparison Render */}
      {compareData && data && compareData.district !== data.district && (
        <Compare data1={compareData} data2={data} />
      )}

      {/* Help Modal */}
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </>
  );
}

export default App;
