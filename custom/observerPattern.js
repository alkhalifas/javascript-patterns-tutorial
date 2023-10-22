// Abstract observer class
class Observer {
    update(data, obsId) {

    }
}

// Concrete observer: LogObserver
class LogObserver extends Observer {
    constructor(obsId) {
        super();
        this.obsId = obsId;
    }

    update(data, obsId) {
        console.log(`Data Updated in ${this.obsId}: ${data}`)
    }
}

// Subject: Datastore
class DataStore {
    constructor() {
        this.data = null;
        this.observers = [];
    }

    setData(data) {
        this.data = data;
        this.notifyObservers();
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    // Remove Observer
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers() {
        for (const observer of this.observers) {
            observer.update(this.data);
        }
    }

}

const ds = new DataStore();
const logObserver1 = new LogObserver(1);
const logObserver2 = new LogObserver(2);
const logObserver3 = new LogObserver(3);

ds.addObserver(logObserver1)
ds.addObserver(logObserver2)
ds.addObserver(logObserver3)

ds.setData(false);
