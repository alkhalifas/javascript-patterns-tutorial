
class iPhoneButton {
    constructor() {
        this.type = 'iPhone';
        this.label = 'iPhone Button';
    }

    render() {
        console.log(`Rendering ${this.type} button: ${this.label}`)
    }
}

class AndroidButton {
    constructor() {
        this.type = 'Android';
        this.label = 'Android Button';
    }

    render() {
        console.log(`Rendering ${this.type} button: ${this.label}`)
    }
}

class ButtonFactory {
    createButton(platform) {
        switch (platform) {
            case 'iPhone':
                return new iPhoneButton();
            case 'Android':
                return new AndroidButton();
            default:
                throw new Error('Invalid plaforn')
        }
    }
}

// main:
const buttonFactory = new ButtonFactory();

const iPhoneButtonInstance = buttonFactory.createButton('iPhone')
const AndroidButtonInstance = buttonFactory.createButton('Android')

iPhoneButtonInstance.render()
AndroidButtonInstance.render()
