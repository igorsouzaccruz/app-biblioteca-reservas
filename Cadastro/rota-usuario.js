const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require("./Usuario")
const Usuario = mongoose.model("usuarios")

router.get("/registro", function(req, res){
    res.render("cadastro")
})

router.post("/registro", function(req, res){
    var erros = []

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome invalido"})
    }

    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
        erros.push({texto: "Email invalido"})
    }

    if(!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null){
        erros.push({texto: "Senha invalido"})
    }

    if(req.body.senha.length < 4){
        erros.push({texto: "Senha muito curta"})
    }

    if(erros.length > 0){
        res.render("usuarios/registro", {erros: erros})
    }

})

module.exports = router