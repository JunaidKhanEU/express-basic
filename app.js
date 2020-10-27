const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Express Server @@");
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
