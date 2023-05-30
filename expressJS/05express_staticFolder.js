let http = require("http");
let express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello world it's main page");
});

app.use("/testFolder", express.static("testFolder"));

app.get("*", (req, res) => {
  res.status(200).send("404 invalid url");
});

app.listen(8080, () => {
  console.log("server start");
});
