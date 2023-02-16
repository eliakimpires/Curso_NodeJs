const sequelize = require('sequelize');
const connection = require('./database');

//criando tabela no banco com sequelize
const pergunta = connection.define('perguntas',{
    titulo:{
        type: sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: sequelize.TEXT,
        allowNull: false
    }
});

//passando o model para o banco 
pergunta.sync({force:false}).then(() => {
    console.log('Tabela criada!')
})