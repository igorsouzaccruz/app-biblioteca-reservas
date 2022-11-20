const Mesa = require("../entities/Mesa");
const Usuario = require("../entities/Usuario");


module.exports = class Reserva {
    constructor(horaDaReserva, usuarioQueReservou = new Usuario, mesaReservada = new Mesa){
        this.horaDaReserva = horaDaReserva;
        this.usuarioQueReservou = usuarioQueReservou;
        this.mesa = mesaReservada;
    }
    addReserva(){
        return "add reserva";
    }
    removerReserva(){
        return "remove reserva";
    }

    // horaAgora() {
    //     const hoje = new Date();
    //     return hoje.getUTCHours();
    // }
    
}