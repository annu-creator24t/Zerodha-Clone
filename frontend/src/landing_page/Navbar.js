import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm bg-white">
      <div className="container-fluid px-5 py-2">

        {/* Left Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/media/images/logo.svg"
            alt="Zerodha Logo"
            style={{ height: "22px", width: "auto" }}
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
