//Conexão com Banco de Dados
const Sequelize = require ("sequelize");
const sequelize = new Sequelize('crud','root','30351964Asd', {
    host:'localhost',
    dialect:'mysql'
});

//exporta o Sequelize

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}