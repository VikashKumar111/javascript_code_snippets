// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = 'Lydia';
//   let age = 21;
// }

// sayHi();



// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }


// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());





// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);





// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);



// let greeting;
// greetign = {}; 
// console.log(greetign);





// function bark() {
//   console.log('Woof!');
// }

// bark.animal = 'dog';




// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);



// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log('You are an adult!');
//   } else if (data == { age: 18 }) {
//     console.log('You are still an adult.');
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }

// checkAge({ age: 18 });




function getAge(...args) {
  console.log(typeof args);
}

getAge(21);





