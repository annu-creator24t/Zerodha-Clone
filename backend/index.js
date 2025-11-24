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

// ====================== FIXED CORS ======================
app.use(
  cors({
    origin: [
      "https://zerodha-clone-i3qw.vercel.app",      // frontend
      "https://zerodha-clone-six-amber.vercel.app"  // dashboard
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

// ====================== ROUTES ======================
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();
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
