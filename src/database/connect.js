const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@aulaonodejs.xbn0ypx.mongodb.net/?retryWrites=true&w=majority&appName=AulaoNodeJs`
    );

    console.log("Coneção ao banco de dados feita com sucesso!");
  } catch (error) {
    console.log("Erro ao se conectar ao banco de dados: ", error);
  }
};

module.exports = connectToDatabase;
