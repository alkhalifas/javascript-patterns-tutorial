
class Coffee {
    cost() {
        return 5;
    }
}

class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 2;
    }
}

class VanillaDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 3;
    }
}

// Usage
const regularCoffee = new Coffee();
console.log('Cost of Regular Coffee: $' + regularCoffee.cost());

const milkCoffee = new MilkDecorator(regularCoffee);
console.log('Cost of Coffee with Milk: $' + milkCoffee.cost());

const vanillaMilkCoffee = new VanillaDecorator(milkCoffee);
console.log('Cost of Coffee with Milk and Vanilla: $' + vanillaMilkCoffee.cost());
