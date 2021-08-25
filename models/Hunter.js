const Traveler = require("./Traveler");

class Hunter extends Traveler{
        constructor(name,isHealthy = true,food = 2){
        super(name, isHealthy, food)
        this.name = name
        this.isHealthy = isHealthy
        this.food = food
    }
    hunt(){
        this.food += 5
    }
    eat(){
        this.food -= 2
        if(this.food < 0){
            this.isHealthy = false
            this.food = 0
        }
    }
    giveFood(traveler, numOfFoodUnits){
        if (this.food >= numOfFoodUnits){
        this.food--
        traveler.food+= numOfFoodUnits
    }
    }
}

module.exports = Hunter;