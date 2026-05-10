import React from "react";
import ReactDOM from "react-dom/client";
export default function LamarMechanicalHomepage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      fontFamily: "Arial, sans-serif"
    }}>
      <section style={{
        padding: "80px 40px",
        background: "linear-gradient(90deg,#000 0%,#111 60%,#222 100%)"
      }}>
        <img
          src="/logo-lamar-mechanical.png"
          alt="Lamar Mechanical"
          style={{ height: 80, marginBottom: 30 }}
        />

        <p style={{
          color: "#d8a640",
          fontWeight: "bold",
          letterSpacing: 2,
          textTransform: "uppercase"
        }}>
          Precision. Integrity. Power.
        </p>

        <h1 style={{
          fontSize: "72px",
          lineHeight: 1,
          margin: "20px 0"
        }}>
          <span style={{ color: "#d8a640" }}>Systems That</span><br />
          Perform.
        </h1>

        <p style={{
          maxWidth: 700,
          fontSize: 20,
          lineHeight: 1.6,
          color: "#ddd"
        }}>
          Commercial, churches, and high-end residential electrical,
          HVAC, and generator solutions engineered for reliability.
        </p>

        <div style={{ marginTop: 40 }}>
          <button style={{
            background: "#d8a640",
            color: "#000",
            border: "none",
            padding: "16px 28px",
            fontWeight: "bold",
            marginRight: 16
          }}>
            Request Service
          </button>

          <button style={{
            background: "transparent",
            color: "#d8a640",
            border: "1px solid #d8a640",
            padding: "16px 28px",
            fontWeight: "bold"
          }}>
            601-498-4871
          </button>
        </div>
      </section>

      <section style={{
        padding: "60px 40px",
        background: "#111"
      }}>
        <h2 style={{
          color: "#d8a640",
          textTransform: "uppercase",
          letterSpacing: 2
        }}>
          Why Clients Choose Us
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 24,
          marginTop: 30
        }}>
          {[
            "Licensed & Insured",
            "Emergency Response Available",
            "Commercial Capable",
            "Clear Communication",
            "Built on Integrity",
            "Serving Laurel, Hattiesburg & the Pine Belt"
          ].map((item) => (
            <div key={item} style={{
              border: "1px solid rgba(255,255,255,.1)",
              padding: 24,
              background: "#181818"
            }}>
              <h3 style={{
                color: "#d8a640",
                marginBottom: 12
              }}>
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LamarMechanicalHomepage />
  </React.StrictMode>
);
