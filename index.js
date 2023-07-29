const express = require("express");
const cors = require("cors");
const { mongo } = require("mongoose");
const app = express();
const User = require("./models/User");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://blog:FOl5TbYqumQOEyyU@cluster0.gmbhnpb.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password,
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e)
  }
});
app.listen(4000);
