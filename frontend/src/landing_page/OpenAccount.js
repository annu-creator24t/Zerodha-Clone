import React from 'react';

function OpenAccount() {
  return ( 
    <div className="text-center mt-5">
      <h1 className="mb-3">Open Account</h1>
      
      <p className="mb-4 fs-5 text-muted" style={{ maxWidth: "600px", margin: "0 auto" }}>
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
      </p>
      
      <button 
        className="p-2 btn btn-primary fs-5 mb-5" 
        style={{ width: "25%", margin: "0 auto", display: "block" }}
      >
        Sign up Now
      </button>
    </div>
  );
}

export default OpenAccount;
