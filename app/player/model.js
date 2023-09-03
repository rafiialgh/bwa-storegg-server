const mongoose = require("mongoose");

let playerSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email harus diisi"],
    },
    name: {
      type: String,
      require: [true, "Nama harus diisi"],
      maxLength: [255, "Panjang nama harus antara 3 - 255 karakter"],
      minLength: [3, "Panjang nama harus antara 3 - 255 karakter"],
    },
    username: {
      type: String,
      require: [true, "Nama harus diisi"],
      maxLength: [255, "Panjang username harus antara 3 - 255 karakter"],
      minLength: [3, "Panjang username harus antara 3 - 255 karakter"],
    },
    password: {
      type: String,
      require: [true, "Password harus diisi"],
      maxLength: [255, "Panjang password harus antara 255 karakter"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    avatar: {
      type: String,
    },
    filename: {
      type: String,
    },
    phoneNumber: {
      type: String,
      require: [true, "Nomor telepon harus diisi"],
      maxLength: [13, "Panjang nomor telepon harus antara 9 - 13 karakter"],
      minLength: [9, "Panjang nomor telepon harus antara 9 - 13 karakter"],
    },
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", playerSchema);
