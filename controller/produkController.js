require("../config/connect");
const produk = require("../models/produk");

class ProdukController {
  async index(res) {
    await produk.find().then((response) => {
      res.render("product/index", {
        layout: "layout/master",
        cardTitle: "Data Produk",
        data: response,
      });
    });
  }

  add(res) {
    res.render("product/add", {
      layout: "layout/master",
      cardTitle: "tambah data",
    });
  }

  async saveData(res, data) {
    const newData = new produk(data);
    await newData.save().then((response) => {
      res.redirect("/");
    });
  }

  async delete(res, id) {
    await produk.deleteOne({ _id: id }).then((response) => {
      res.redirect("/");
    });
  }

  detail(res, id) {
    produk.findOne({ _id: id }).then((response) => {
      // res.json(response);
      res.render("product/detail", {
        layout: "layout/master",
        cardTitle: "Data Produk",
        response,
      });
    });
  }
}

module.exports = ProdukController;
