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

  async delete(res, id) {
    await produk.deleteOne({ _id: id }).then((response)=>{
      res.redirect('/');
    });
  }
}

module.exports = ProdukController;
