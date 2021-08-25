const Traveler = require("./Traveler");


class Doctor extends Traveler{
    constructor(name,isHealthy = true,food = 1){
        super(name, isHealthy, food)
        this.name = name
        this.isHealthy = isHealthy
        this.food = food
    }

    

    heal(traveler){
        if(traveler.isHealthy === false){
            return traveler.isHealthy = true
        }
    }
}

module.exports = Doctor;