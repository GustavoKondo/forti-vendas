//importa o express
const express = require("express");

require("./database");

//importa as rotas
const routes = require("./routes")


//cria a aplicação express
const app = express();

app.use(express.json())

app.use(routes);



//cria a função que vai ser executada pela rota





module.exports = app;