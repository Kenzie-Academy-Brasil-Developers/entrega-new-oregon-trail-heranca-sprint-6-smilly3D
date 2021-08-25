const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const { Console } = require("console");

const Traveler = require("../../models/Traveler")
const { hunter } = require("../../app");

Given('um Hunter de nome {string}', function (string) {
    hunter.name = string;
});

Given('ela sempre começa a viagem com {int} refeições', function (int) {
   
    hunter.food = int;
});

Given('ela sempre começa a viagem saudável.', function () {
    hunter.isHealthy = true;
});

When('o Hunter vai caçar {int} vezes', function (int) {
    for(let contador = 0; int > contador; contador++ ){
        hunter.hunt();
    }
});


Then('a quantidade de refeições é igual a {int}', function (int) {
    assert.strictEqual(hunter.food, int);
});

When('o Hunter ira comer {int} vezes', function (int) {
    for(let contador = 0; int > contador; contador++ ){
        
        hunter.eat();
        
    }
});

Then('o Hunter não ficará doente', function () {
    assert.strictEqual(hunter.isHealthy, true)
});

Then('o Hunter ficará doente', function () {
    assert.strictEqual(hunter.isHealthy, false)
});

When('o Hunter compartilhar {int} refeição com {string}', function (int, string) {
    let viajante = new Traveler(string)
    hunter.giveFood(viajante, int)
});