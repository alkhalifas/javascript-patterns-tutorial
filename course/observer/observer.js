class ObserverList {
    constructor() {
        this.observerList = [];
    }

    // Adds an observer object to the list
    add(obj) {
        return this.observerList.unshift(obj);
    }

    // Counts the number of observers in the list
    count() {
        return this.observerList.length;
    }

    // Returns the observer in the specified index
    get(index) {
        if (index > -1 && index < this.observerList.length) {
            return this.observerList[index];
        }
    }

    // Returns index of the specified observer
    indexOf(obj, startIndex) {
        let i = startIndex;

        while (i < this.observerList.length) {
            if (this.observerList[i] === obj) {
                return i;
            }
            i++;
        }

        return -1;
    }

    // Removes observer at specified index
    removeAt(index) {
        this.observerList.splice(index, 1);
    }
}

class Subject {

    // Initializes the subject with an element
  constructor(element) {
    this.observers = new ObserverList();
    this.element = element;

      // Clicking the checkbox will trigger notifications to its observers
      this.element.onclick = () => {
        this.notify(this.element.checked);
      };
  }

  // Adds an observer to the observer list
  addObserver(observer) {
    this.observers.add(observer);
  }

  // Removes an observer
  removeObserver(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
  }

  // Notifies observers about a change (passing a context state)
  notify(context) {
    const observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i++) {
      this.observers.get(i).update(context);
    }
  }
}

class Observer {
  constructor() {}
  update() {
      // ...
  }
}

// Initializes a concrete observer, inheriting/extending from observer
class ConcreteObserver extends Observer {
  constructor(element) {
    super();
    this.element = element;
  }

  // Override with custom update behaviour
  update(value) {
    this.element.checked = value;
  }
}



const addBtn = document.getElementById('addNewObserver');
const container = document.getElementById('observersContainer');
const controlCheckbox = new Subject(
document.getElementById('mainCheckbox')
);

const addNewObserver = () => {
  // Create a new checkbox to be added
  const check = document.createElement('input');
  check.type = 'checkbox';
  const checkObserver = new ConcreteObserver(check);

  // Add the new observer to our list of observers
  // for our main subject
  controlCheckbox.addObserver(checkObserver);

  // Append the item to the container
  container.appendChild(check);
};

addBtn.onclick = addNewObserver;
