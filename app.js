//jshint esversion:6

const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.sendFile('index.html', {root:__dirname});
});

app.get("/sobre", function(req, res){
    res.sendFile('sobre.html', {root:__dirname});
});

app.get("/FAQ", function(req, res){
    res.sendFile('FAQ.html', {root:__dirname});
});

app.get("/fale-conosco", function(req, res){
    res.sendFile('fale-conosco.html', {root:__dirname});
});

app.listen(3000, function(){
    console.log("Serve iniciado na porta 3000");
});