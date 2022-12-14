//jshint esversion:6

const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

const app = express();

const bodyParser = require('body-parser');
const Reserva = require("./services/Reserva");
const Usuario = require("./entities/Usuario");
const Mesa = require("./entities/Mesa");
const { builtinModules } = require("module");

var usuarioTeste;
var reservaTeste;

app.set('view engine', 'ejs');

mongoose.set("strictQuery", true);

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

app.use(bodyParser.urlencoded({extended:true}))

// const Person = require('/repositories/UserRepository')

const DB_USER = "admin-igor"
const DB_PASSWORD = encodeURIComponent("HToICQGihIOCekFH")

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.z1pllb0.mongodb.net/bibliotecaDB?retryWrites=true&w=majority`
    )
.then(() => {
    console.log("Connctamos ao MongoDB");
})
.catch((err) => console.log(err));

app.get("/",function(req,res){
    res.render("index");
});

app.post("/", function(req,res){
    if(req.body.acessar==='acessar'){
        console.log(req.body.email);
        if(req.body.email===''){
            res.redirect("/erroLogin")
        }
        usuarioTeste = new Usuario("Igor","2111597","ADS","m",true);
        res.redirect("/reservas")
    }
    if(req.body.cadastrar==='cadastrar'){
        res.redirect("/cadastro")
    }
});

app.get("/erroLogin", function(req,res){
    console.log("ERRO NO LOGIN");
    res.render('paginaErroLogin');
});

app.post("/erroLogin", function(req,res){
    console.log("redirecionando");
    res.redirect("/")
});

app.get("/cadastroSucesso", function(req,res){
    res.render("cadastroSucesso")
})

app.post("/cadastroSucesso", function(req,res){
    res.redirect("/")
})

app.get("/reservas", function(req,res){
    // res.sendFile(path.join(__dirname, '/reservas.html'));
    res.render("reservas");
});

app.post("/reservas", function(req,res) {
    console.log('1');
    if(req.body.reserva==='reserva'){
        console.log("reservando...");
        const hoje = new Date();
        // var mesa = req.body.mesa;
        // var preferencial = req.body.preferencial;
        // console.log(mesa); 
        reservaTeste = new Reserva(hoje,usuarioTeste,new Mesa("01",true));
        res.redirect("/confirmacao");
    } 
    if(req.body.logout==='logout'){
        console.log("logou");
        res.redirect("/")
    }
    
    
});

app.get("/confirmacao", function(req,res){
    res.render("confirmacao", {
        nome:reservaTeste.usuarioQueReservou.nome,
        curso:reservaTeste.usuarioQueReservou.curso,
        matricula:reservaTeste.usuarioQueReservou.matricula,
        horaDaReserva:reservaTeste.horaDaReserva.getHours()
     });
});

app.get("/sobre", function(req, res){
    res.render("sobre");
});

app.get("/cadastro", function(req, res){
    res.render("cadastro");
});

app.post("/cadastro", function(req,res){
    if(req.body.nome !==''){
        res.redirect("/cadastroSucesso")
    } else {
        res.redirect("/erroCadastro")
    }
});

app.delete("/cadastro", function(req,res){
    console.log("deletando cadastro...");
});

app.put("/cadastro", function(req,res){
    console.log("atualizando cadastro...");
});

app.get("/erroCadastro", function(req,res){
    res.render("erroCadastro")
});

app.post("/erroCadastro", function(req,res){
    res.redirect("/cadastro")
})

app.get("/FAQ", function(req, res){
    res.render("FAQ");
});

app.get("/fale-conosco", function(req, res){
    res.render("fale-conosco");
});

app.post("/fale-conosco", function(req, res){
    console.log(req.body.nome);
    console.log(req.body.email);
    console.log(req.body.telefone);
    console.log(req.body.mensagem);
    res.render("fale-conosco")
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function(){
    console.log("Server has started");
});
