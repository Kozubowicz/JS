let http = require("http");
let express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.get("/user/:id([0-9]{1,10})", (req, res) => {
  res.status(200).send("User profile, id: " + req.params.id);
});

//localhost:8080/2020/756/hello-world
app.get("/article/:date/:id/:title", (req, res) => {
  const date = req.params.date;
  const id = req.params.id;
  const title = req.params.title;
  res
    .status(200)
    .send(`Hello worlds. Your date is: ${date} id: ${id} title: ${title}`);
});

app.get("/article/:url(*)", (req, res) => {
  const url = req.params.url;
  res.status(200).send(`Hello worlds. URL: ${url}`);
});

app.get("/news/:year([0-9]{4})-:month-:day", (req, res) => {
  const year = req.params.year;
  const month = req.params.month;
  const day = req.params.day;
  res
    .status(200)
    .send(`Hello worlds! Your date Year: ${year} month: ${month} day: ${day}`);
});

app.get("*", (req, res) => {
  res.status(200).send("404 invalid url");
});

app.listen(8080, () => {
  console.log("server start");
});
