const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const db = mongoose.connect(
  "mongodb+srv://ryanrice:320587rRd%40@cluster0.o8eyc.mongodb.net/userAPI?retryWrites=true&w=majority"
);
const port = process.env.PORT || 8081;
const User = require("./models/userModel");
const userRouter = require("./routes/userRouter.js")(User);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

app.listen(port, () => {
  console.log("API running on port " + port);
});
