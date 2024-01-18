// const EventEmitter = require("events");
// const emitter = new EventEmitter();
// emit(<event>) - generates the event, causing the event handlers
// for this event to be triggered for subscribers

//  on(<event>, <handler>) - subscribes to events (executes the handler
// function when the event occurs)
// event - the name of the event
// handler - the event handler (the function that will run when the event occurs)

// emitter.on('start', () => console.log('start!!!'));
// emitter.emit('start');




// We can pass some additional value (payload).
// This value will be passed as an argument to the handler function

// emitter.on('start', (message) => console.log(message));
// emitter.emit('start', 'Start message');




// We can pass multiple values as well
// emitter.on('start', (first, second) =>
// console.log(`${first} & ${second}`)
// );
// emitter.emit('start', 1,5);


// Multiple handlers (by default, no more than 10,
//   but this is not a strict limit) can be
//   assigned to the same event
// const handler1 = () => console.log(1);
// const handler2 = () => console.log(2);

// emitter.on('start', handler1);
// emitter.on('start', handler2);

// emitter.emit('start');





// To place a handler assigned later at the beginning of the queue,
// the prependListener method is used:
// const handler1 = () => console.log(1);
// const handler2 = () => console.log(2);
// const handler3 = () => console.log(3);
// const handler4 = () => console.log(4);

// emitter.on('start', handler1);
// emitter.on('start', handler2);
// emitter.on('start', handler3);
// emitter.prependListener('start', handler4);

// emitter.emit('start');




// The handler is triggered for each event generation:
// emitter.on('start', (message) => console.log(message));

// emitter.emit('start', 'Omg');
// emitter.emit('start', 'WoW');
// emitter.emit('start', 'Pip');
// emitter.emit('start', 'loop');




// handler to be triggered only once, use the once()
// emitter.once('start', (message) => console.log(message));

// emitter.emit('start', 'Wow'); //works only this call
// emitter.emit('start', 'Omg');




// Remove a specific event handler function from the queue, the off() method
// const handler = (message) => console.log(message);

// emitter.on('start',  handler);
// emitter.emit('start', 'Hello');

// emitter.off('start', handler)  // further events will not be handled





const EventEmitter = require("events");

class User extends EventEmitter {
  constructor(name, password) {
    super();
    this.name = name;
    this.password = password;
  }

  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const user = new User('Bob', 'qwerty12345');

user.on('greetings', user.sayHi);
user.on('showpass', () => console.log(user.password))
user.emit('greetings');
user.emit('showpass');

