const express = require("express");
const path = require('path');
const app = express();
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/about.html"));
})

app.get("/prize", (req, res) => {
  res.sendFile(path.join(__dirname + "/prize.html"));
})

app.get("/page4", (req, res) => {
  res.sendFile(path.join(__dirname + "/page4.html"));
})

app.get("/winner", (req, res) => {
  res.sendFile(path.join(__dirname + "/winner.html"));
})

app.listen(3000);
console.log("Running at port 3000");
