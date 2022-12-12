module.exports = class Usuario {

    constructor(id, nome,matricula,curso,genero){
        this.id = id;
        this.nome = nome;
        this.matricula = matricula;
        this.curso = curso;
    }
    
    toString(){
        return this.nome + " " + this.matricula + "\n" +
        this.curso;
    }
}