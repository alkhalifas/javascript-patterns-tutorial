
// Abstract command class
class Command {
    execute() {

    }
}

// Concrete command to turn on
class TurnOnCommand extends Command {
    constructor(device) {
        super();
        this.device = device;
    }

    execute() {
        this.device.turnOn();
    }
}

// Concrete command to turn off
class TurnOffCommand extends Command {
    constructor(device) {
        super();
        this.device = device;
    }

    execute() {
        this.device.turnOff();
    }
}

// Receiver class of Light
class Light {
    turnOn() {
        console.log('Light is ON')
    }

    turnOff() {
        console.log('Light is OFF')
    }
}

// Receiver class of Fan
class Fan {
    turnOn() {
        console.log('Fan is ON')
    }

    turnOff() {
        console.log('Fan is OFF')
    }
}

// Invoker:
class RemoteControl {
    constructor() {
        this.command = null;
    }

    setCommand(command) {
        this.command = command;
    }

    pressButton() {
        this.command.execute();
    }
}


const light = new Light();
const fan = new Fan();

const turnOnLightCommand = new TurnOnCommand(light)
const turnOffLightCommand = new TurnOffCommand(light)

const turnOnFanCommand = new TurnOnCommand(fan)
const turnOffFanCommand = new TurnOffCommand(fan)

const remote = new RemoteControl();
remote.setCommand(turnOnLightCommand);
remote.pressButton()

remote.setCommand(turnOffLightCommand);
remote.pressButton()

remote.setCommand(turnOnFanCommand);
remote.pressButton()

remote.setCommand(turnOffFanCommand);
remote.pressButton()
