'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("pedidos", {
      id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
 
      cliente: {
        type:Sequelize.STRING,
        allowNull: false
      },
      produto: {
        type:Sequelize.STRING,
        allowNull: false
      },
      quantidade: {
        type:Sequelize.STRING,
        allowNull: false
      },
      created_at: {
       type:Sequelize.DATE,
       allowNull: false
      },
      updated_at :{
       type:Sequelize.DATE,
       allowNull: false
      },
     
    })
  },

  down: async (queryInterface, Sequelize) => {
      //ISSO É PARA DESFAZER O QUE FOI FEITO
      queryInterface.dropTable("pedidos");
  }
};
