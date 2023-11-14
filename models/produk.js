const mongoose = require("mongoose");

const produkModel = mongoose.model("products", {
  gambar_produk: String,
  nama_produk: String,
  tipe_produk: String,
  harga_produk: String,
  stok: Number,
});

module.exports = produkModel;
