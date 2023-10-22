const Participant = require('./participant.js').Participant;
const Chatroom = require('./chatroom.js').Chatroom;

let kat = new Participant().getConcreteParticipant('Kat');
let jat = new Participant().getConcreteParticipant('Jat');
let sat = new Participant().getConcreteParticipant('Sat');
let lat = new Participant().getConcreteParticipant('Lat');

let chatroom = new Chatroom();
chatroom.register(kat);
chatroom.register(jat);
chatroom.register(sat);
chatroom.register(lat);

kat.send('Learning design patterns', lat);
sat.send('Lets go!', lat);
jat.send('What do you think?', kat);
kat.send('What do you think?\'', jat);
