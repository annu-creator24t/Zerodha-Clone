import React from "react";

const InvestmentOptions = () => {
  const items = [
    {
      img: "media/images/stocks-acop.svg",
      title: "Stocks",
      desc: "Invest in all exchange-listed securities",
    },
    {
      img: "media/images/mf-acop.svg",
      title: "Mutual funds",
      desc: "Invest in commission-free direct mutual funds",
    },
    {
      img: "media/images/ipo-acop.svg",
      title: "IPO",
      desc: "Apply to the latest IPOs instantly via UPI",
    },
    {
      img: "media/images/fo-acop.svg",
      title: "Futures & options",
      desc: "Hedge and mitigate market risk through simplified F&O trading",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">

        {/* Heading */}
        <h2 className="text-center fw-semibold mb-5" style={{ fontSize: "32px" }}>
          Investment options with Zerodha demat account
        </h2>

        {/* Two rows — two items per row */}
        <div className="row gy-5">

          {items.map((item, index) => (
            <div className="col-12 col-md-6 d-flex" key={index}>
              
              {/* Icon */}
              <img
                src={item.img}
                alt={item.title}
                style={{ width: "60px", height: "60px" }}
                className="me-3"
              />

              {/* Content */}
              <div>
                <h4 className="fw-semibold mb-1" style={{ fontSize: "22px" }}>
                  {item.title}
                </h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* Button */}
        <div className="text-center mt-5">
          <button className="btn btn-primary px-4 py-2" style={{ fontSize: "18px" }}>
            Explore Investments
          </button>
        </div>

      </div>
    </section>
  );
};

export default InvestmentOptions;
