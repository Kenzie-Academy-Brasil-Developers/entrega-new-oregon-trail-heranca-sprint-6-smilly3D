const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { viajante } = require("../../app");
const { doctor } = require("../../app");

/**GIVEN */

Given('um Doctor de nome {string}', function (string) {
    doctor.name = string
});

/**WHEN */

When('o Doctor se alimentar {int} vez', function (int) {
    for (let contador=0; contador < int; contador++) {
        doctor.eat();
    }
});

When('o Doctor curar o {string}', function (string) {
    viajante.name = string
    doctor.heal(viajante)
}); 

/**THEN */

Then('a quantia de refeição deve ir para {int}', function (int) {
    assert.strictEqual(doctor.food, int);
});

Then('o Doctor está saudavel', function () {
    assert.strictEqual(doctor.isHealthy, true);
  });

Then('o {string} ficara saudavel', function (string) {
    assert.strictEqual(viajante.isHealthy, true);
});