// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');

// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');


//cria tabela no BD e seus campos
const Usuario = sequelize.define("usuario", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },

    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },

    endereco: {
        allowNull: false,
        type: Sequelize.STRING(250),
        validate: {
            len: [1, 250]
        }
    },

    email: {
        allowNull: true,
        type: Sequelize.STRING(100),
        validate: {
            len: [1, 100]
        }
    },

    telefone: {
        allowNull: false,
        type: Sequelize.STRING(15),
        validate: {
            len: [1,15]
        }
    }
});


module.exports = Usuario;