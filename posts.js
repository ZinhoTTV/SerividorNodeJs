//Importa a Conexão

const db = require("./db");

//estrutura da Tabela

const Post = db.sequelize.define("cadastro",{
    nome: {type: db.Sequelize.STRING},
    email: {type: db.Sequelize.STRING},
    telefone: {type: db.Sequelize.STRING},
    opiniao: {type: db.Sequelize.TEXT},

});



//Exporta o Post
module.exports = Post;      

//cria a tabela ao Executar o Modulo.
// Post.sync ({force:true});