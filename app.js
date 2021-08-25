
const Traveler  = require("./models/Traveler");
const Wagon     = require("./models/Wagon");
const Hunter = require("./models/Hunter")

let viajante = new Traveler();
let carroca = new Wagon();
let hunter = new Hunter();

// let viajanteSergio = new Traveler();
// let viajanteSimone = new Traveler();
// let viajanteSamuel = new Traveler();
// let viajanteSandra = new Traveler();
// let viajanteJoão   = new Traveler();
// let viajanteDiego  = new Traveler();
// let viajanteDiana  = new Traveler();

module.exports = {
    viajante,
    carroca,
    hunter,
}