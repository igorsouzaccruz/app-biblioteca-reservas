//jshint esversion:6

const express = require("express");
const path = require('path');

const app = express();

const bodyParser = require('body-parser');
const Reserva = require("./services/Reserva");
const Usuario = require("./entities/Usuario");
const Mesa = require("./entities/Mesa");

var usuarioTeste;
var reservaTeste;

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

app.use(bodyParser.urlencoded({extended:true}))


app.get("/",function(req,res){
    
    res.render('index');
});

app.post("/", function(req,res){
    console.log(req.body.email);
    usuarioTeste = new Usuario("Igor","2111597","ADS","m",true);
    res.redirect("/reservas")
})

app.get("/reservas", function(req,res){
    // res.sendFile(path.join(__dirname, '/reservas.html'));
    res.render("reservas");
});

app.post("/reservas", function(req,res) {
    console.log("reservando...");
    const hoje = new Date();
    reservaTeste = new Reserva(hoje,usuarioTeste,new Mesa("01",true));
    res.redirect("/confirmacao");
});

app.get("/confirmacao", function(req,res){
    res.render("confirmacao", {
        nome:reservaTeste.usuarioQueReservou.nome,
        curso:reservaTeste.usuarioQueReservou.curso,
        matricula:reservaTeste.usuarioQueReservou.matricula,
        horaDaReserva:reservaTeste.horaDaReserva.getHours()
     })
});

app.get("/sobre", function(req, res){
    res.render("sobre");
});

app.get("/cadastro", function(req, res){
    res.render("cadastro");
});

app.post("/cadastro", function(req,res){
    console.log("cadastrando...");
});

app.get("/FAQ", function(req, res){
    res.render("FAQ");
});

app.get("/fale-conosco", function(req, res){
    res.render("fale-conosco");
});

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');