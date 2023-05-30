let http = require("http");
let express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

//localhost:8080/2020/756/hello-world
app.get("/article/:date/:id/:title", (req, res) => {
  const date = req.params.date;
  const id = req.params.id;
  const title = req.params.title;
  res
    .status(200)
    .send(`Hello world. Your date is: ${date} id: ${id} title: ${title}`);
});

app.listen(8080, () => {
  console.log("server start");
});
