const Usuario = require("./reservas/Usuario.js");
const usuario1 = new Usuario("Igor","211597","ADS", "M", "SIM");
console.log(usuario1);
const Reserva = require("./reservas/Reserva.js");
const reserva1 = new Reserva("02/10/20", usuario1.nome);
console.log(reserva1);

console.log(reserva1.addReserva());