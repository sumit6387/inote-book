const express = require("express");
const port = 5000;
const connectMongoDB = require("./utils/db");

connectMongoDB();
const app = express();
app.use(express.json());

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
