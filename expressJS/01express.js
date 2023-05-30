let http = require("http");
let express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.listen(8080, () => {
  console.log("server start");
});
