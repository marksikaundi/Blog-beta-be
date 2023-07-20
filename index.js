const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/register", (req, res) => {
  res.json("Testing my backend 2000");
});
app.listen(4000);
