const mongosee = require("mongoose");

async function koneksi() {
  try {
    await mongosee.connect("mongodb://127.0.0.1:27017/penjualan");
  } catch (error) {
    console.log(`terjadi error ${error.message}`);
  }
}

koneksi();
