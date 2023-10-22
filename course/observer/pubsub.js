exports.PubSub = class PubSub {
    constructor() {
        // Storage for topics that can be broadcast
        // or listened to
        this.topics = {};

        // A topic identifier
        this.subUid = -1;
    }

    // Publish a message to a specific topic
    publish(topic, args) {

        // Check if topic exists
        if (!this.topics[topic]) {
            return false;
        }

        // Identify subscribers
        const subscribers = this.topics[topic];
        let len = subscribers ? subscribers.length : 0;

        while (len--) {
            subscribers[len].func(topic, args);
        }

        return this;
    }

    // Subscribe to a given topic
    subscribe(topic, func) {
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }

        const token = (++this.subUid).toString();
        this.topics[topic].push({
            token,
            func,
        });
        return token;
    }

    // 
    unsubscribe(token) {
        for (const m in this.topics) {
            if (this.topics[m]) {
                for (let i = 0, j = this.topics[m].length; i < j; i++) {
                    if (this.topics[m][i].token === token) {
                        this.topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return this;
    }
}
