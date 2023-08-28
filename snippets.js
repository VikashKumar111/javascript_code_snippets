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


const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());





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




// function getAge(...args) {
//   console.log(typeof args);
// }

// getAge(21);





// function getAge() {
//   'use strict';
//   age = 21;
//   console.log(age);
// }

// getAge();





// const sum = eval('10*10+5');
// console.log(sum);



// var num = 8;
// var num = 10;

// console.log(num);





// const obj = { 1: 'a', 2: 'b', 3: 'c' };
// const set = new Set([1, 2, 3, 4, 5]);

// console.log(obj.hasOwnProperty('1'));
// console.log(obj.hasOwnProperty(1));
// console.log(set.has('1'));
// console.log(set.has(1));




// const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);




// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }



// String.prototype.giveLydiaPizza = () => {
//   return 'Just give Lydia pizza already!';
// };

// const name = 'Lydias';

// console.log(name.giveLydiaPizza())




// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);



// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('Second'));
// const baz = () => console.log('Third');

// bar();
// foo();
// baz();



// const person = { name: 'Lydia' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));





// function sayHi() {
//   return (() => 0)();
// }

// console.log(typeof sayHi());




// console.log(typeof typeof 1);


// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);



// (() => {
//   let x, y;
//   try {
//     throw new Error();
//   } catch (x) {
//     (x = 1), (y = 2);
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();


// setInterval(() => console.log('Hi'), 1000);





// const person = { name: 'Lydia' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));






// function sayHi() {
//   return (() => 0)();
// }

// console.log(typeof sayHi());



// console.log(typeof typeof 1);



// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);



// (() => {
//   let x, y;
//   try {
//     throw new Error();
//   } catch (x) {
//     (x = 1), (y = 2);
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();




// [[0, 1], [2, 3]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2],
// );



























