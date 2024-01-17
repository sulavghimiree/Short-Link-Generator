const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./connection");
const userRouter = require("./routes/userRoute");
const urlRouter = require("./routes/urlRoute");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + "/public")));

connectDB(process.env.DATABASE_URL);

app.use("/user", userRouter);
app.use("/url", urlRouter);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
