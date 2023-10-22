
// Mediator that acts as a central communication hub
class Mediator {
    constructor() {
        this.modules = {};
    }

    register(moduleName, module) {
        this.modules[moduleName] = module;
        module.setMediator(this);
    }

    send(message, senderModuleName) {
        for (const moduleName in this.modules) {
            if (moduleName !== senderModuleName) {
                this.modules[moduleName].receive(message, senderModuleName);
            }
        }
    }
}

// Chat Module that communicates through mediator
class ChatModule {
    constructor() {
        this.mediator = null;
    }

    setMediator(mediator) {
        this.mediator = mediator;
    }

    send(message, senderModuleName) {
        console.log(`Chat Module received from ${senderModuleName}: ${message}`);
    }

    receive(message, senderModuleName) {
        console.log(`Sending message from Chat Module to ${senderModuleName}: ${message}`);
        this.mediator.send(message, 'ChatModule');
    }
}

// User Module that communicates through mediator
class UserModule {
    constructor(name) {
        this.name = name;
        this.mediator = null;
    }

    setMediator(mediator) {
        this.mediator = mediator;
    }

    send(message) {
        console.log(`Sending message from User ${this.name}: ${message}`);
        this.mediator.send(message, `UserModule ${this.name}`);
    }

    receive(message, senderModuleName) {
        console.log(`User ${this.name} received from ${senderModuleName}: ${message}`);
    }
}

const mediator = new Mediator();

const chatModule = new ChatModule();
mediator.register('ChatModule', chatModule);

const user1 = new UserModule('Saleh');
mediator.register('Saleh', user1);

const user2 = new UserModule('Connor');
mediator.register('Connor', user2);

chatModule.send('Hello, Users!', 'ChatModule');
user1.send('Hi, Saleh!!', 'Saleh');
user2.send('Hey Connor!', 'Connor');
