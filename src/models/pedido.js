const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

const Pedido = sequelize.define("pedido", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },

    cliente:{
        allowNull: false,
        type: Sequelize.STRING(130),
        validate: {
            len: [3, 100]
        }
    },

    produto: {
        allowNull: false,
        type: Sequelize.STRING(200),
        validate: {
            len:[1, 199]
        }
    },

    preco: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len:[1, 99999]
        }
    },

    qtd: {
        allowNull: false,
        type: Sequelize.INTEGER
    }

});



module.exports = Pedido;