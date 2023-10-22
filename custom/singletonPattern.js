
// Singleton Class:
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance
        } else {
            this.counter = 0;
            Singleton.instance = this;
            return this;
        }
    }

    incrementCounter() {
        this.counter++;
    }

    getCounter() {
        return this.counter;
    }
}

const s1 = new Singleton();
s1.incrementCounter()
s1.incrementCounter()
console.log("s1: ", s1.getCounter()) // 2


const s2 = new Singleton();
s2.incrementCounter()
console.log("s2: ", s2.getCounter()) // 3
