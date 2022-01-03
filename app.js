const express = require('express');
const app = express();
const PORT = 4000;
const hbs = require('hbs')

// const pokemons = require("./data/script");

hbs.registerPartials(__dirname + '/views/partials');

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.render("home", {
    css: ['styles.css']
    })
});

app.get("/about", (req, res) => {
  res.render("about", {
    css: ['styles.css']
    })
});

app.get("/works", (req, res) => {
  res.render("works", {
    css: ['styles.css']
    })
});

app.get("/gallery", (req, res) => {
  res.render("gallery", {
    css: ['styles.css']
    })
});

app.get("/pokemons", (req, res) => {
  res.render("pokemons", {
    css: ['styles.css']
    })
});
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));