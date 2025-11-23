import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
      </div>

      <div className="row text-center">
        <div className="col-4 p-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "180px", height: "60px",marginBottom: "10px" }}
          />
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/sensibull-logo.svg"
            style={{ width: "180px", height: "60px",marginBottom: "10px" }}
          />
          <p className="text-small text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/tijori.svg"
            style={{ width: "180px", height: "60px",marginBottom: "10px" }}
          />
          <p className="text-small text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>

      <div className="row text-center mt-4">
        <div className="col-4 p-3">
          <img
            src="media/images/streak-logo.png"
            style={{ width: "180px", height: "60px",marginBottom: "10px" }}
          />
          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/smallcase-logo.png"
            style={{ width: "180px", height: "60px",marginBottom: "10px" }}
          />
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/ditto-logo.png"
            style={{ width: "160px", height: "50px",marginBottom: "10px" }}
          />
          <p className="text-small text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
         <button className='p-2 btn btn-primary fs-5 mb5' style={{ width: "25%", margin: "0 auto", display: "block" }}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
