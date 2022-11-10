//jshint esversion:6

const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.send("olá");
});

app.listen(3000, function(){
    console.log("Serve iniciado na porta 3000");
});