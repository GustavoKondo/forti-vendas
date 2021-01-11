const express = require("express");

const alunoController = require("./controllers/sell-parts");


const routes = express.Router();

//configuração da rota
routes.get("/sell-parts", alunoController.listarPedido)

routes.get("/sell-parts/:id", alunoController.buscarPedido)

routes.post("/sell-parts", alunoController.adicionarPedido)

routes.delete("/sell-parts/:id", alunoController.deletarPedido)

routes.put("/sell-parts/:id", alunoController.atualizarPedido)

module.exports = routes;