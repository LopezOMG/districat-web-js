const express = require("express");
const app = express();

const { options } = require("./utils/options.js")
const { addToDB, removeFromDB, getFromDB, modifyToDB } = require("./utils/database-management.js")

app.get("/", (req,res) => {
  res.send("<h1>Hola mundo!</h1>");
});

app.listen(options.PORT, () => console.log(options.getMsg()))