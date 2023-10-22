class Participant {
    constructor(){
        this.chatroom = 'NA';
    }

    send(message, to) {}

    receive(message, from) {}

    getConcreteParticipant(name) {
        return new ParticipantConcrete(name)
    }
}

class ParticipantConcrete extends Participant {
  constructor(name) {
    super();
    this.name = name;
  }

  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  receive(message, from) {
    console.log(from.name + ' to ' + this.name + ' : ' + message);
  }
}

exports.Participant = Participant;
