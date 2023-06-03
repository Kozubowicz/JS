const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 8080;

// Ustawienie silnika szablonów EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Ustawienie katalogu publicznego
app.use(express.static(path.join(__dirname, "public")));

// Endpoint dla strony głównej
app.get("/", (req, res) => {
  // Odczytaj nazwy folderów w katalogu public
  fs.readdir(path.join(__dirname, "public"), (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Wystąpił błąd");
    }

    // Filtruj tylko foldery
    const folders = files.filter((file) =>
      fs.statSync(path.join(__dirname, "public", file)).isDirectory()
    );

    // Renderuj widok EJS z danymi folderów
    res.render("index", { folders });
  });
});

// Start serwera
app.listen(port, () => {
  console.log(`Serwer nasłuchuje na porcie ${port}`);
});
