import React from "react";

const AccountTypes = () => {
  const cards = [
    {
      img: "media/images/acop-individual.svg",
      title: "Individual Account",
      desc: "Invest in equity, mutual funds and derivatives",
    },
    {
      img: "media/images/acop-huf.svg",
      title: "HUF Account",
      desc: "Make tax-efficient investments for your family",
    },
    {
      img: "media/images/acop-nri.svg",
      title: "NRI Account",
      desc: "Invest in equity, mutual funds, debentures, and more",
    },
    {
      img: "media/images/acop-minor.svg",
      title: "Minor Account",
      desc: "Teach your little ones about money & invest for their future",
    },
    {
      img: "media/images/acop-corporate.svg",
      title: "Corporate / LLP / Partnership",
      desc: "Manage your business surplus and investments easily",
    },
  ];

  const renderCard = (c, i) => (
    <div key={i} className="col mb-4">
      <div className="card h-100 p-4 shadow-sm border-0">
        <img src={c.img} alt={c.title} className="mb-3" style={{ width: "50px" }} />
        <h5 className="fw-semibold">{c.title}</h5>
        <p className="text-muted mt-2">{c.desc}</p>
      </div>
    </div>
  );

  return (
    <section className="py-5 bg-white">
      <div className="container">

        {/* Heading */}
        <h2 className="text-center fw-semibold mb-5" style={{ fontSize: "28px" }}>
          Explore different account types
        </h2>

        {/* ROW 1 — 3 Cards */}
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
          {cards.slice(0, 3).map(renderCard)}
        </div>

        {/* ROW 2 — 2 Cards */}
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {cards.slice(3, 5).map(renderCard)}
        </div>

      </div>
    </section>
  );
};

export default AccountTypes;
