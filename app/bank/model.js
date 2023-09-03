const mongoose = require("mongoose");

let bankSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nama pemilik bank harus diisi"],
  },
  bankName: {
    type: String,
    required: [true, "Nama bank harus diisi"],
  },
  noRekening: {
    type: Number,
    required: [true, "Nomor rekening harus diisi"],
  },
}, { timestamps: true });

module.exports = mongoose.model("Bank", bankSchema);
