import React from "react";

function Footer() {
  return (
    <footer
      className="container border-top mt-5"
      style={{ backgroundColor: "rgb(251, 251, 251)" }}
    >
      <div className="row mt-5">
        {/* Logo & Info */}
        <div className="col-md-3 mb-3">
          <img
            src="media/images/logo.svg"
            alt="Company Logo"
            style={{ width: "50%" }}
          />
          <p className="mt-3 text-muted small">
            © 2010-2024 Zerodha Broking Ltd. All rights reserved.
          </p>
        </div>

        {/* Company */}
        <div className="col-md-3 mb-3">
          <h6 className="fw-bold">Company</h6>
          <ul className="list-unstyled">
            <li><a href="#" style={{ textDecoration: "none" }}>About</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Products</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Pricing</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Referral Programme</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Careers</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Zerodha.tech</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Press & Media</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Zerodha Cares (CSR)</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="col-md-3 mb-3">
          <h6 className="fw-bold">Support</h6>
          <ul className="list-unstyled">
            <li><a href="#" style={{ textDecoration: "none" }}>Contact</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Support Portal</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Z-Connect Blog</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>List of Charges</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Download & Resources</a></li>
          </ul>
        </div>

        {/* Account */}
        <div className="col-md-3 mb-3">
          <h6 className="fw-bold">Account</h6>
          <ul className="list-unstyled">
            <li><a href="#" style={{ textDecoration: "none" }}>Open an Account</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Fund Transfer</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>60 Day Challenge</a></li>
          </ul>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="mt-5 text-muted small">
        <p className="mb-2">
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 
          CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: 
          IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; 
          SEBI Registration no.: INZ000038238. <br />
          Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. 
          Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. 
          For any complaints: <a href="mailto:complaints@zerodha.com" style={{ textDecoration: "none" }}>complaints@zerodha.com</a>, 
          DP: <a href="mailto:dp@zerodha.com" style={{ textDecoration: "none" }}>dp@zerodha.com</a>.
        </p>

        <p className="mb-2">
          Procedure to file a complaint on <a href="#" style={{ textDecoration: "none" }}>SEBI SCORES:</a> Register on SCORES portal. Mandatory 
          details: Name, PAN, Address, Mobile, Email. Benefits: Effective Communication, Speedy 
          redressal.
        </p>

        <p className="mb-2">
          <a href="#" style={{ textDecoration: "none" }}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>
        </p>

        <p className="mb-2">
          Investments in securities market are subject to market risks; please read all related 
          documents carefully before investing.
        </p>

        <p className="mb-2">
          Attention investors: 1) Brokers can accept securities as margins only via pledge in 
          the depository system (w.e.f Sep 01, 2020). 2) Update your email/phone with your broker 
          to receive OTP directly from depository. 3) Check your securities / MF / bonds in the 
          consolidated account statement issued by NSDL/CDSL every month.
        </p>

        <p className="mb-2">
          India's largest broker based on networth as per NSE. <a href="#" style={{ textDecoration: "none" }}>NSE broker factsheet.</a>
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile/email with your 
          broker. Receive transaction details directly from Exchange at end of day. KYC is one 
          time – once done with a SEBI registered intermediary, no need to repeat with others. 
          If subscribing to an IPO, no need to issue cheque – funds remain in your bank account 
          unless allotted. We don’t give stock tips and haven’t authorised anyone to trade on our 
          behalf. If you find such claims, please <a href="#" style={{ textDecoration: "none" }}>create a ticket here</a>."
        </p>
      </div>

      {/* Bottom Links Row */}
      <div className="border-top pt-3 mt-4 mb-4">
        <div className="d-flex flex-wrap justify-content-center gap-3 small text-muted">
          <a href="#" className="text-muted text-decoration-none">NSE</a>
          <a href="#" className="text-muted text-decoration-none">BSE</a>
          <a href="#" className="text-muted text-decoration-none">MCX</a>
          <a href="#" className="text-muted text-decoration-none">Terms & Conditions</a>
          <a href="#" className="text-muted text-decoration-none">Policies & Procedures</a>
          <a href="#" className="text-muted text-decoration-none">Privacy Policy</a>
          <a href="#" className="text-muted text-decoration-none">Disclosure</a>
          <a href="#" className="text-muted text-decoration-none">For Investor's Attention</a>
          <a href="#" className="text-muted text-decoration-none">Investor Charter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
