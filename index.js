const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./posts");

//bodyparser

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use("/css", express.static("views/css"));
app.use("/img", express.static("views/img"));

//template

app.engine("handlebars", engine({defaultLayout: "main"}));
app.set('view engine', 'handlebars')
app.set('views', './views')

//rotas
app.get("/main",function(req,res){
    res.render("main")
})

app.get("/cad",function(req,res){
    res.render("formPessoal");
});

app.get("/", function(req,res){
    res.sendFile(__dirname + '/views/sobre.html')
});

app.post("/add", function(req,res){
    Post.create({
        nome:req.body.nome,
        email:req.body.email,
        telefone:req.body.telefone,
        comentario:req.body.comentario
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Falha ao Cadastrar o post " + erro)
    })
});



//servidor

app.listen(8081, function(){
    console.log("TA RODANDO CORNO");

})