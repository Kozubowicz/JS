let express = require("express");
let path = require("path");

let app = express();
let linksData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Articles",
    url: "/articles",
  },
  {
    name: "Google",
    url: "https://google.com",
  },
];

let viewsPath = path.join(__dirname, "views");
app.set("views", viewsPath);
app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("pages/home", {
    pageHeading: "WWW page",
    pageTitle: "Main page",
    links: linksData,
  });
});

app.listen(8080, () => {
  console.log("server start");
});
