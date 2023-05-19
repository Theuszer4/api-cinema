const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  return res.status(201).send({ message: "usuario funcionando" });
});

app.post("/adicionar", (req, res) => {
  const nome = {
    nome: req.body,
  };
  if (!nome) {
    return res.status(201).send({ message: "O nome é Obrigatorio" });
  }
  

  res.status(201).send({ message: "nome adicionado", nome:nome });

  // if(!rg) {
  //   return res.status(200).send({ message: "O nome é Obrigatorio" });
  // }
});

module.exports = app;
