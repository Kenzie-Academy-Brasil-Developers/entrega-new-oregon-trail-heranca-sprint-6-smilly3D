class Traveler {
    constructor(name,isHealthy = true,food = 1){
        this._name = name
        this.isHealthy = isHealthy
        this.food = food
    }
    //get e set
    get name(){
        return this._name;
    }
    set name(newName){
        return this._name = newName;
    } 

    //metodos.
    hunt(){
        this.food+=2
    }
    eat(){
        this.food--
        if(this.food < 0){
            this.isHealthy = false
            this.food = 0
        }
    }
}

module.exports = Traveler;