const Usuario = require("./Usuario");


module.exports = class Reserva {
    constructor(horaDaReserva, usuarioQueReservou = new Usuario){
        this.horaDaReserva = horaDaReserva;
        this.usuarioQueReservou = usuarioQueReservou;
    }
    addReserva(){
        return "add reserva";
    }
    removerReserva(){
        return "remove reserva";
    }
}