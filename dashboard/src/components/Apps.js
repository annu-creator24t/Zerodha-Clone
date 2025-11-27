import React from "react";
import "./Apps.css";

const appsList = [
  {
    name: "Kite",
    desc: "Ultra-fast trading platform with charts, market data, and order execution.",
  },
  {
    name: "Console",
    desc: "Central dashboard for reports, P&L, portfolio insights, and statements.",
  },
  {
    name: "Coin",
    desc: "Invest in direct mutual funds online without commission charges.",
  },
  {
    name: "Varsity",
    desc: "Free stock market education with detailed modules and examples.",
  },
  {
    name: "Kite Connect API",
    desc: "Powerful trading APIs for developers to build custom trading apps.",
  },
  {
    name: "Sentinel",
    desc: "Create real-time price alerts for stocks and indices.",
  },
];

const Apps = () => {
  return (
    <div className="apps-container">
      <h2 className="apps-title">Zerodha Products</h2>

      <div className="apps-grid">
        {appsList.map((app, index) => (
          <div className="app-card" key={index}>
            <h3 className="app-name">{app.name}</h3>
            <p className="app-desc">{app.desc}</p>

            <button className="app-btn">Explore →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
