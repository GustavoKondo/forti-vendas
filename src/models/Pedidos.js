const { Model, DataTypes} = require("sequelize");

class Pedidos extends Model {
    // aqui inicializamos nossos campos da tabela 
    static init(sequelize){
        super.init(
            {
                cliente: DataTypes.STRING,
                produto: DataTypes.STRING,
                quantidade: DataTypes.STRING
                
            },
            {
               sequelize,
            }
        )

    }

    // AQUI CONFIGURAMOS RELACIONAMENTOS//
    static associate(models){

    }
}

module.exports = Pedidos;