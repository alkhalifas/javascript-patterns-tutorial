class VehiclePrototype {
    constructor(model) {
        this.model = model;
    }

    getModel() {
        console.log('The model of this vehicle is..' + this.model);
    }

    Clone() {}
}

class Vehicle extends VehiclePrototype {
//    #year = [1,23,4];
    constructor(model) {
        super(model);
        this.year = [1,2];
    }

//    get year() {
//        return this.year;
//    }

    Clone() {
        let v = new Vehicle(this.model);
//        v.#year = [];
        return v;
    }
}

const car = new Vehicle('Ford Escort');
const car2 = car.Clone();
car2.getModel();

car2.year[0] = 101;
console.log('Car2 Year = ' + car2.year);
console.log('Car Year = ' + car.year);
