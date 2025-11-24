require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// ====================== CORS ======================
app.use(
  cors({
    origin: [
      "https://zerodha-clone-i3qw.vercel.app",
      "https://zerodha-clone-six-amber.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());

// ====================== DEFAULT ROUTE ======================
app.get("/", (req, res) => {
  res.send("Backend is running! 🚀");
});

// ⭐⭐⭐⭐⭐ PASTE SEED ROUTES HERE ⭐⭐⭐⭐⭐

// Seed Holdings
app.get("/seedHoldings", async (req, res) => {
  const tempHoldings = [
    {
      name: "INFY",
      qty: 5,
      avg: 1350.5,
      price: 1555.45,
      net: "+15.18%",
      day: "-1.60%",
      isLoss: true,
    },
    {
      name: "TCS",
      qty: 1,
      avg: 3041.7,
      price: 3194.8,
      net: "+5.03%",
      day: "-0.25%",
      isLoss: true,
    },
    {
      name: "HDFCBANK",
      qty: 2,
      avg: 1383.4,
      price: 1522.35,
      net: "+10.04%",
      day: "+0.11%",
    }
  ];

  await HoldingsModel.insertMany(tempHoldings);
  res.send("✔ Holdings Seeded!");
});

// Seed Positions
app.get("/seedPositions", async (req, res) => {
  const tempPos = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    }
  ];

  await PositionsModel.insertMany(tempPos);
  res.send("✔ Positions Seeded!");
});

// ====================== MAIN ROUTES ======================
app.get("/allHoldings", async (req, res) => {
  res.json(await HoldingsModel.find());
});

app.get("/allPositions", async (req, res) => {
  res.json(await PositionsModel.find());
});

app.post("/newOrder", async (req, res) => {
  await OrdersModel.create({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  res.send("Order saved!");
});

// ====================== DB + SERVER START ======================
mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => console.log("Server running on " + PORT));
  })
  .catch((err) => console.error("DB Error:", err));
