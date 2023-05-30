let http = require("http");
let express = require("express");

const app = express();
const testRouter = require("./test_router.js");

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});
app.use("/test", testRouter);
app.listen(8080, () => {
  console.log("server start");
});
