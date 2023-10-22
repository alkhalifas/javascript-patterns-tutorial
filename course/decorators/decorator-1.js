
// Base class
class Vehicle {
    constructor(vehicleType) {
        // some sane defaults
        this.vehicleType = vehicleType || 'car';
        this.model = 'default';
        this.license = '00000-000';
    }
}

// Test instance for a basic vehicle
const testInstance = new Vehicle('car');
console.log(testInstance);

// Outputs:
// vehicle: car, model:default, license: 00000-000

// Lets create a new instance of vehicle, to be decorated
const truck = new Vehicle('truck');

// New functionality we're decorating vehicle with dynamically
truck.setModel = function(modelName) {
    this.model = modelName;
};

truck.setColor = function(color) {
    this.color = color;
};

// Test the value setters and value assignment works correctly
truck.setModel('CAT');
truck.setColor('blue');

console.log(truck);

// Outputs:
// vehicle:truck, model:CAT, color: blue

// Demonstrate "vehicle" is still unaltered
const secondInstance = new Vehicle('car');
console.log(secondInstance);
