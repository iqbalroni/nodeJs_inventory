const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const bodyParser = require("body-parser");

const ProdukController = require("./controller/produkController");
const CProduk = new ProdukController();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/product/add", (req, res) => {
  CProduk.add(res);
});

app.post("/product/save", (req, res) => {
  const data = req.body;
  CProduk.save(res, data);
});

app.get("/", async (req, res) => {
  CProduk.index(res);
});

app.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  CProduk.delete(res, id);
});

app.get("/detail/:id", (req, res) => {
  const id = req.params.id;
  CProduk.detail(res, id);
});

app.listen(8080, () => {
  console.log("aplikasi berjalan http://localhost:8080/");
});
