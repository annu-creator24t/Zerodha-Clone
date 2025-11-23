import React from "react";

const HeroSection = () => {
  return (
    <section className="py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-semibold" style={{ fontSize: "32px" }}>
          Open a free demat and trading account online
        </h2>
        <p className="text-muted mt-3" style={{ fontSize: "18px" }}>
          Start investing brokerage free and join a community of 1.6+ crore investors and traders
        </p>
      </div>

      {/* Main Section (Image + Signup Box) */}
      <div className="container mt-4">
        <div className="row align-items-center justify-content-between">

          {/* LEFT — IMAGE */}
          <div className="col-12 col-md-6 text-center text-md-start mb-5 mb-md-0">
            <img
              src="media/images/account_open.svg"
              alt="dashboard"
              className="img-fluid"
              style={{ maxWidth: "600px" }}
            />
          </div>

          {/* RIGHT — SIGNUP BOX */}
          <div className="col-12 col-md-5 d-flex justify-content-md-end justify-content-center">
            <div style={{ maxWidth: "380px", width: "100%" }}>

              <h3 className="fw-semibold" style={{ fontSize: "22px" }}>
                Signup now
              </h3>
              <p className="text-muted small">Or track your existing application</p>

              {/* Phone Input Box */}
              <div className="d-flex align-items-center border rounded px-3 py-2 mt-3">
                <img src="media/images/india-flag.svg" className="me-2" style={{ width: "24px" }} />
                <span className="fw-medium me-2">+91</span>
                <input
                  type="text"
                  className="form-control border-0 shadow-none"
                  placeholder="Enter your mobile number"
                />
              </div>

              {/* OTP Button */}
              <button className="btn btn-primary w-100 mt-3 py-2" style={{ fontSize: "16px" }}>
                Get OTP
              </button>

              {/* Terms */}
              <p className="small text-muted mt-3">
                By proceeding, you agree to the Zerodha{" "}
                <a className="text-primary" href="#">terms & privacy policy</a>.
              </p>

              {/* NRI link */}
              <p className="mt-2">
                <a href="#" className="text-primary" style={{ fontSize: "14px" }}>
                  Looking to open NRI account? Click here
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
