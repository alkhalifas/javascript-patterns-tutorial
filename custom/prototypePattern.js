
// Widget Prototype
class GUIWidget {
    constructor(type) {
        this.type = type;
    }

    render() {
        console.log(`Rendering a ${this.type} widget`)
    }

}

// Button Widget
class Button extends GUIWidget {
    //Construct and overwrite type in prototype
    constructor() {
        super('Button');
    }

    onClick() {
        console.log('Button Clicked')
    }
}

// Checkbox Widget
class Checkbox extends GUIWidget {
    //Construct and overwrite type in prototype
    constructor() {
        super('Checkbox');
    }

    onToggle() {
        console.log('Checkbox Toggled')
    }
}

// main
const buttonPrototype = new Button();
const checkboxPrototype = new Checkbox();

const button1 = Object.create(buttonPrototype);
button1.render();
button1.onClick();

const checkbox1 = Object.create(checkboxPrototype);
checkbox1.render();
checkbox1.onToggle();
