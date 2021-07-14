const express = require("express");
const path = require("path");
const app = express();

require("dotenv").config();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT, () => console.log(`React app running on port ${process.env.PORT}`));
