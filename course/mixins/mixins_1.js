// Define a simple Car constructor
class Car {
    constructor({ model, color }) {
        this.model = model || 'no model provided';
        this.color = color || 'no colour provided';
    }
}

// Mixin
const Mixin = superclass =>
    class extends superclass {
        driveForward() {
            console.log(`${this.model} drive forward`);
        }
        driveBackward() {
            console.log(`${this.model} drive backward`);
        }
        driveSideways() {
            console.log(`${this.model} drive sideways`);
        }
    };

class MyCar extends Mixin(Car) {}

// Create a new Car
const myCar = new MyCar({
    model: 'Ford Escort',
    color: 'blue',
});

// Test to make sure we now have access to the methods
myCar.driveForward();
myCar.driveBackward();

// Outputs:
// drive forward Ford Escort
// drive backward Ford Escort
