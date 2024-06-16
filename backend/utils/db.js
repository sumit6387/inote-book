const mongoose = require("mongoose");
const mongodbURI =
  "mongodb://127.0.0.1:27017/INotebook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.9";

const connectToMongo = async () => {
  await mongoose.connect(mongodbURI);
  console.log("DB Connected successfully");
};

module.exports = connectToMongo;
