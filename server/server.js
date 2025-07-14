const express = require("express");
const app = express();
const connection = require(`./config/connection`);
const cors = require(`cors`);
const corsOptions = require(`./config/corsOptions`);
const userRoute = require(`./routes/userRoutes`);
const productRoute = require(`./routes/productRoutes`);
const multerConfig = require(`./utils/multerConfig`);
const bodyParser = require("body-parser");
require("dotenv").config();
connection();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("server is running");
});
app.use("/api", userRoute);
app.use("/uploads", express.static("uploads"));
app.use("/api", productRoute);

app.listen(process.env.PORT, () => {
  console.log("server is running at port 5000");
});
