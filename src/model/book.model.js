const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  yearPublished: {
    type: Number,
    required: false,
  },
  pages: {
    type: Number,
    required: true,
    min: [1, "O número de páginas deve ser maior que 0!"],
  },
});

const BookModel = mongoose.model("Book", bookSchema);

module.exports = BookModel;
