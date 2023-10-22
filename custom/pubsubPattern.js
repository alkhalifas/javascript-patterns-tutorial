
class PubSub {
    constructor() {
        this.subscribers = []
    }

    subscribe(subscriber) {
        this.subscribers = [...this.subscribers, subscriber]

    }

    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber)
    }

    publish(payload) {
        this.subscribers.forEach(subscriber => subscriber(payload))
    }


}

function showMessage(message) {
    console.log(`Received message: ${message}`);
}

const ps = new PubSub();
ps.subscribe(payload => {
    showMessage(payload.message)
})
ps.publish({"message": "hello"})
ps.publish({"message": "hola"})
ps.publish({"message": "hallo"})
