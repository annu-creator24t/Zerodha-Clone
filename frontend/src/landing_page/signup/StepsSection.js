import React from "react";

const StepsSection = () => {
  const steps = [
    "Enter the requested details",
    "Complete e-sign & verification",
    "Start investing!",
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">

        {/* Heading */}
        <h2 className="text-center fw-semibold mb-5" style={{ fontSize: "30px" }}>
          Steps to open a demat account with Zerodha
        </h2>

        {/* Main Row */}
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
            <img
              src="media/images/steps-acop.svg"
              alt="steps"
              className="img-fluid"
              style={{ maxWidth: "420px" }}
            />
          </div>

          {/* RIGHT STEPS */}
          <div className="col-12 col-lg-6">

            {steps.map((label, i) => (
              <div
                className="d-flex align-items-center mb-4 pb-2"
                key={i}
                style={{ borderBottom: i < steps.length - 1 ? "1px solid #e5e5e5" : "none" }}
              >
                {/* Circular Number */}
                <div
                  className="d-flex align-items-center justify-content-center me-4"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    border: "2px solid #1c78f1",
                    color: "#1c78f1",
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                  0{i + 1}
                </div>

                {/* Text */}
                <div style={{ fontSize: "20px", fontWeight: "500" }}>
                  {label}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
