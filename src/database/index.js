const Sequelize = require("sequelize");
const dbconfig = require("../config/database");

//imports dos models
const Pedidos = require("../models/Pedidos");

const conexao = new Sequelize(dbconfig);

//inicializa os models
Pedidos.init(conexao);


//inicializa os relacionamentos
Pedidos.associate(conexao.models);