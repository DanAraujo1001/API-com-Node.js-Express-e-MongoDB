const express = require("express");
const BookModel = require("../src/model/book.model");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

// Buscar Livros
app.get("/books", async (req, res) => {
  try {
    const book = await BookModel.find({});

    res.status(200).json(book);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Buscar Livros por ID
app.get("/books/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await BookModel.findById(id);

    res.status(200).json(book);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Criar Livro
app.post("/books", async (req, res) => {
  try {
    const book = await BookModel.create(req.body);

    res.status(201).json(book);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Atualizar Livro
app.patch("/books/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await BookModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(book);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Deletar Livro
app.delete("/books/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await BookModel.findByIdAndDelete(id);

    res.status(200).json(book);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => {
  console.log(`Rodando o express na porta: ${port}`);
});
