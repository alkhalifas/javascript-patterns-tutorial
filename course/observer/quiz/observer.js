class ObserverList {
    constructor() {
        this.observerList = [];
    }

    add(obj) {
        return this.observerList.unshift(obj);
    }

    count() {
        return this.observerList.length;
    }

    get(index) {
        if (index > -1 && index < this.observerList.length) {
            return this.observerList[index];
        }
    }

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

    removeAt(index) {
        this.observerList.splice(index, 1);
    }
}

class Subject {
  constructor(element) {
    this.observers = new ObserverList();
    this.element = element;

      // Clicking the checkbox will trigger notifications to its observers
      this.element.onclick = () => {
        this.notify(this.element.checked);
      };
  }

  addObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
  }

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
  check.id = 'observer ' + id;
  const checkObserver = new ConcreteObserver(check);

  // Add the new observer to our list of observers
  // for our main subject
  controlCheckbox.addObserver(checkObserver);

  // Append the item to the container
  container.appendChild(check);
  id++;
};

let id = 0;
addBtn.onclick = addNewObserver;

const removeBtn = document.getElementById('removeObserver');
removeBtn.onclick = () => {
    const obs = document.getElementById('observer ' + 0);
    controlCheckbox.removeObserver(obs);
}
