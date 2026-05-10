import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#050505 0%,#0d1320 45%,#1b2433 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          padding: "60px 40px",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        <img
          src="/logo.png.png"
          alt="Lamar Mechanical"
          style={{
            width: 320,
            marginBottom: 50,
          }}
        />

        <p
          style={{
            color: "#d6a640",
            fontWeight: "bold",
            letterSpacing: 3,
            marginBottom: 20,
            fontSize: 22,
          }}
        >
          PRECISION. INTEGRITY. POWER.
        </p>

        <h1
          style={{
            fontSize: "92px",
            lineHeight: 0.95,
            margin: 0,
            fontWeight: 800,
          }}
        >
          <span style={{ color: "#d6a640" }}>Systems That</span>
          <br />
          <span style={{ color: "white" }}>Perform.</span>
        </h1>

        <p
          style={{
            marginTop: 35,
            maxWidth: 900,
            fontSize: 28,
            lineHeight: 1.5,
            color: "#d5d9df",
          }}
        >
          Commercial, churches, and high-end residential electrical,
          HVAC, and generator solutions engineered for reliability.
        </p>

        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: 45,
          }}
        >
          <button
            style={{
              background: "#d6a640",
              color: "black",
              border: "none",
              padding: "18px 38px",
              fontWeight: "bold",
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            Request Service
          </button>

          <button
            style={{
              background: "transparent",
              color: "#d6a640",
              border: "2px solid #d6a640",
              padding: "18px 38px",
              fontWeight: "bold",
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            601-498-4871
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 20,
            marginTop: 100,
          }}
        >
          {[
            "Licensed & Insured",
            "Emergency Response Available",
            "Commercial Capable",
            "Clear Communication",
            "Built On Integrity",
            "Serving Laurel, Hattiesburg & The Pine Belt",
          ].map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                padding: 30,
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <h3
                style={{
                  color: "#d6a640",
                  margin: 0,
                  fontSize: 24,
                }}
              >
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
