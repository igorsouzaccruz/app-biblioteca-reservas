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
    if(req.body.acessar==='acessar'){
        console.log(req.body.email);
        if(req.body.email===''){
            res.redirect("/erroLogin")
        }
        if(req.body.senha===''){
            res.redirect("/erroLogin")
        }
        //usuarioTeste = new Usuario("Igor","2111597","ADS","m",true);
        //res.redirect("/reservas")

        if(req.body.email==='igor@unifor.com' ||  req.body.senha==='2111597'){
            res.redirect("/reservas")
        }
        if(req.body.email==='lucas@unifor.com' ||  req.body.senha==='2215161'){
            res.redirect("/reservas")
        }
        if(req.body.email==='emanuel@unifor.com' ||  req.body.senha==='1911035'){
            res.redirect("/reservas")
        }
        if(req.body.email==='moacir@unifor.com' ||  req.body.senha==='2216387'){
            res.redirect("/reservas")
        }

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

app.get("/reservas", function(req,res){
    // res.sendFile(path.join(__dirname, '/reservas.html'));
    res.render("reservas");
});

app.post("/reservas", function(req,res) {
    console.log("reservando...");
    const hoje = new Date();
    // var mesa = req.body.mesa;
    // var preferencial = req.body.preferencial;
    // console.log(mesa); 
    reservaTeste = new Reserva(hoje,usuarioTeste,new Mesa("01",true));
    res.redirect("/confirmacao");
    
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
    console.log("cadastrando...");
});

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

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');