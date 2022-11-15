//jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const usuarios = require("./Cadastro/rota-usuario")

//Configurando o Body Parser
    app.use(bodyParser.urlencoded({extend: true}))
    app.use(bodyParser.json())

//Configurando o Mongoose
    mongoose.Promise = global.Promise
    mongoose.connect("mongodb://localhost/app").then(() => {
        console.log("Conectado ao mongo")
    }).catch((err) => {
        console.log("Erro ao se conectar: " + err)
    })

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));


app.get("/",function(req,res){
    res.render('index');
});

app.get("/sobre", function(req, res){
    res.render("sobre");
});

app.get("/cadastro", function(req, res){
    res.render("cadastro");
});

app.get("/FAQ", function(req, res){
    res.render("FAQ");
});

app.get("/fale-conosco", function(req, res){
    res.render("fale-conosco");
});

app.use("/usuario", usuarios)

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');