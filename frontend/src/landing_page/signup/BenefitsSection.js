import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Unbeatable pricing",
      desc: "Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.",
    },
    {
      title: "Best investing experience",
      desc: "Simple and intuitive trading platform with an easy-to-understand user interface.",
    },
    {
      title: "No spam or gimmicks",
      desc: "Committed to transparency — no gimmicks, spam, “gamification”, or intrusive push notifications.",
    },
    {
      title: "The Zerodha universe",
      desc: "More than just an app — gain free access to the entire ecosystem of our partner products.",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT: IMAGE + TEXT */}
          <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">

            {/* FIXED SIZE IMAGE */}
            <img
              src="media/images/acop-benefits.svg"
              alt="Benefits Diagram"
              style={{
                width: "372px",
                height: "256px",
                objectFit: "contain",
              }}
            />

            {/* TEXT BELOW IMAGE */}
            <h4
              className="fw-semibold mt-4"
              style={{
                fontSize: "24px",
                color: "#333",
              }}
            >
              Benefits of opening a Zerodha demat account
            </h4>
          </div>

          {/* RIGHT SIDE BENEFITS */}
          <div className="col-12 col-lg-6">
            {benefits.map((item, index) => (
              <div key={index} className="mb-4">
                <h4 className="fw-semibold" style={{ fontSize: "22px" }}>
                  {item.title}
                </h4>
                <p
                  className="text-muted"
                  style={{ fontSize: "15px", lineHeight: "1.7" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
