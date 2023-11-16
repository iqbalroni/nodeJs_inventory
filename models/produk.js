const mongoose = require("mongoose");

const produkModel = mongoose.model("products", {
  image: String,
  nama_produk: String,
  harga_produk: Number,
  stok: Number,
  Tersedia: String,
  tipe: String,
});

module.exports = produkModel;
