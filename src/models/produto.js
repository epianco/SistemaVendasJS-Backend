const Sequelize = require('sequelize');


const sequelize = require('../database/database.js');
const Usuario = require('../models/usuario');
const Order = require('../models/order');

const Produto = sequelize.define("produto", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },

    nome:{
        allowNull: false,
        type: Sequelize.STRING(130),
        validate: {
            len: [3, 100]
        }
    },

    precoCusto: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len:[1, 99999]
        }
    },

    precoVenda: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len:[1, 99999]
        }
    },

    qtdEstoque: {
        allowNull: false,
        type: Sequelize.INTEGER
    }

});



module.exports = Produto;