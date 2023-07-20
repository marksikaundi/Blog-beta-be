const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/register", (req, res) => {
  res.json("Test passed, all good");
});
app.listen(4000);
