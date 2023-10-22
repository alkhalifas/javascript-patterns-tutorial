// A constructor for defining new cars
class Car {
    constructor({
        doors,
        state,
        color
    }) {
        // some defaults
        this.doors = doors || 4;
        this.state = state || 'brand new';
        this.color = color || 'silver';
    }
}
// A constructor for defining new trucks
class Truck {
    constructor({
        state,
        wheelSize,
        color
    }) {
        this.state = state || 'used';
        this.wheelSize = wheelSize || 'large';
        this.color = color || 'blue';
    }
}

class VehicleFactory {
    createVehicle(options) {}

    operation(options) {
        return new VehicleFactoryImpl().createVehicle(options)
    }
}

class VehicleFactoryImpl extends VehicleFactory {
    // Define the prototypes and utilities for this factory

    // Our default vehicleClass is Truck
    constructor() {
        super();
        this.vehicleClass = Truck;
    }
    // Our Factory method for creating new Vehicle instances
    createVehicle(options) {
        switch (options.vehicleType) {
            case 'car':
                this.vehicleClass = Car;
                break;
            case 'truck':
                this.vehicleClass = Truck;
                break;
                //defaults to VehicleFactory.prototype.vehicleClass (Car)
        }
        return new this.vehicleClass(options);
    }
}

// Create an instance of our factory
const vehicleFactory = new VehicleFactory();
const car = vehicleFactory.operation({
    vehicleType: 'car',
    color: 'yellow',
    doors: 6,
});

// Test to confirm our car was created using the vehicleClass/prototype Car

// Outputs: true
console.log(`instance of Car? ${car instanceof Car}`);
console.log(`instance of Truck? ${car instanceof Truck }`);

// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log(car);
