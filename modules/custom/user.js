// const user = {
//   name: 'Ann',
//   age: 23,
//   sayHi() {
//     console.log(`Hi! My name is ${this.name}`);
//   }
// }

// exports.user = user;
// const { user } = require('./user.js')
// user.sayHi();

// module.exports = user;
// const  user  = require('./user.js')
// user.sayHi();


// exported value to a variable if it is not used elsewhere:
module.exports = {
  name: 'Ann',
  age: 23,
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}
// const  user  = require('./user.js')
// user.sayHi();