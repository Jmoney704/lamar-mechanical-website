import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <div className="wrap">
      <section className="hero">
        <h1>Lamar Mechanical Services LLC</h1>
        <p>Professional Electrical, HVAC & Generator Services</p>
        <a href="tel:6014984871">Call 601-498-4871</a>
      </section>

      <section className="content">
        <h2>Serving Laurel & Hattiesburg, Mississippi</h2>
        <p>
          Residential and commercial electrical, HVAC, troubleshooting,
          lighting, service upgrades, generators, and more.
        </p>

        <div className="cards">
          <div className="card">Electrical</div>
          <div className="card">HVAC</div>
          <div className="card">Generators</div>
        </div>
      </section>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
