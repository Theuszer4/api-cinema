const express = require('express');
const app = express();

app.get("/", (req, res,) =>{
  return res.status(200).send({
    message: "Bem vindo do Projeto SAEP"
  });
})

// const sessaoRoutes = require("./src/routes/sessao");
const usuarioRoutes = require("./src/routes/usuario");

// app.use("/sessao", sessaoRoutes);
app.use("/usuario", usuarioRoutes);

module.exports = app;