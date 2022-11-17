//jshint esversion:6

const express = require("express");

const app = express();

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

app.use(bodyParser.urlencoded({extended:true}))


app.get("/",function(req,res){
    console.log(req.body.email);
    res.render('index');
});

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

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');