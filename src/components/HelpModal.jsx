import React from "react";

function HelpModal({ onClose }) {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100%", height: "100%",
      background: "rgba(0,0,0,0.4)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "350px"
      }}>
        <h3>सहायता जानकारी</h3>
        <p><b>काम किए गए:</b> मजदूरों द्वारा किए गए श्रम-दिवस</p>
        <p><b>कुल धनराशि:</b> सरकार द्वारा दिए गए फंड</p>
        <p><b>लाभार्थी:</b> जिन मजदूरों को काम मिला</p>

        <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            background: "red",
            color: "white",
            padding: "6px 10px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          बंद करें
        </button>
      </div>
    </div>
  );
}

export default HelpModal;
