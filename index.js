const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();

const ProdukController = require("./controller/produkController");
const CProduk = new ProdukController();

app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", async (req, res) => {
  CProduk.index(res);
});

app.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  CProduk.delete(res, id);
});

app.listen(8080, () => {
  console.log("aplikasi berjalan http://localhost:8080/");
});
