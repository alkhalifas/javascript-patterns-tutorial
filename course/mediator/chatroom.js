exports.Chatroom = class Chatroom {
  constructor() {
    this.participants = {};
  }

  register(participant) {
    this.participants[participant.name] = participant;
    participant.chatroom = this;
  }

  // akin to mediate
  send(message, from, to) {
    if(message.match(/\'/)) {
        console.log('Found char \\\'. Message dropped')
        return;
    }
    to.receive(message, from);
  }
}
