import React, { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faq = [
    {
      q: "What is a Zerodha account?",
      a: "A Zerodha account allows you to invest in equities, mutual funds, F&O and more.",
    },
    {
      q: "What documents are required to open a demat account?",
      a: "Typically PAN, Aadhaar, bank proof and a cancelled cheque.",
    },
    {
      q: "Is Zerodha account opening free?",
      a: "Yes — opening a Zerodha account is completely free.",
    },
    {
      q: "Are there any maintenance charges for a demat account?",
      a: "No maintenance charges for the demat account.",
    },
    {
      q: "Can I open a demat account without a bank account?",
      a: "No — a bank account is required for linking and UPI verification.",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container" style={{ maxWidth: "900px" }}>

        {/* Heading */}
        <h2 className="fw-bold mb-4" style={{ fontSize: "32px" }}>
          FAQs
        </h2>

        <div>
          {faq.map((item, index) => (
            <div
              key={index}
              className="border-bottom pb-3 pt-3"
              style={{ cursor: "pointer" }}
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              {/* Blue line */}
              <div
                style={{
                  height: "3px",
                  width: "120px",
                  backgroundColor: "#1c7df2",
                  marginBottom: openFAQ === index ? "12px" : "0px",
                  opacity: openFAQ === index ? 1 : 0,
                  transition: "0.25s",
                }}
              ></div>

              {/* QUESTION ROW */}
              <div className="d-flex justify-content-between align-items-center">
                <div
                  style={{
                    fontSize: "20px",
                    color: "#1c1c1c",
                    marginTop: openFAQ === index ? "0px" : "6px",
                  }}
                >
                  {item.q}
                </div>

                {/* Arrow */}
                <div
                  style={{
                    fontSize: "18px",
                    transform: openFAQ === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.3s",
                    color: "#444",
                    marginRight: "4px",
                  }}
                >
                  ▼
                </div>
              </div>

              {/* ANSWER */}
              {openFAQ === index && (
                <div
                  style={{
                    paddingTop: "10px",
                    paddingLeft: "5px",
                    color: "#555",
                    fontSize: "16px",
                    lineHeight: "26px",
                  }}
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
