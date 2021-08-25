class Wagon {
constructor(capacity){
        this._capacity = capacity
        this.passengers = []

    }
    //get e setter
    get capacity(){
        return this._capacity;
    }
    set capacity(newCapacity){
        return this._capacity = newCapacity;
    } 
    

    //metodos
    getAvailableSeatCount(){
        return (this.capacity - this.passengers.length)
    }

    join(passageiro){
        if(this.capacity - this.passengers.length > 0){
            this.passengers.push(passageiro)
        }
    }

    shouldQuarantine(){
        const quarantine = this.passengers.filter((value)=>{return value.isHealthy == "false"})
        return (quarantine.length > 0)

    }

    totalFood(){
        const totalF = this.passengers.reduce((acc,  valorAtual) => {return acc + Number(valorAtual.food)},0)
        return totalF
    }
}

module.exports = Wagon;