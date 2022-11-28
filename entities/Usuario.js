module.exports = class Usuario {

    constructor(nome,matricula,curso,genero,isAdmin){
        this.nome = nome;
        this.matricula = matricula;
        this.curso = curso;
        this.genero = genero;
        this.isAdmin = isAdmin;
    }
    
    toString(){
        return this.nome + " " + this.matricula + "\n" +
        this.curso + " " + " " + this.genero + " " + this.isAdmin;
    }
}