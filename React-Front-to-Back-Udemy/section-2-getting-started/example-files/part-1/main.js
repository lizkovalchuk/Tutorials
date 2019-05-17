// ARROW FUNCTIONS

/*

function sayHello(){
  console.log("hello");
}
sayHello();

const sayHelloFromES6 = () => {
  console.log("hello from ES6 function")
}
sayHelloFromES6();

const sayHelloFromES6two = () => console.log("hello from ES6-2 function");
sayHelloFromES6two();

const sayHelloFromES6three = name => console.log("hello from " + name);
sayHelloFromES6three('Liz');

const sayHelloFromES6four = name => console.log(`Hello from ${name}`);
sayHelloFromES6four('Liz2');

*/

// FOREACH

const fruits = ['Apples', 'Oranges', 'Grapes'];

fruits.forEach((fruit, index) =>{
  console.log(fruit + " from multi-line function");
})

// and since this is only one line, you can reduce the above to: 

fruits.forEach((fruit, index) => console.log(fruit + " from single line-function"));

// MAP

/*

const singleFruit = fruits.map(fruit => fruit.slice(0,-1));
console.log(singleFruit);

const singleFruit2 = fruits.map(fruit => fruit.slice(0,-1).toUpperCase());
console.log(singleFruit2);

// FILTER

const people = [
  {  id: 1, name: 'Karen' },
  {  id: 2, name: 'Bob' },
  {  id: 3, name: 'Sharon' }
]

// now let's return an new array with Bob removed.

const people2 = people.filter(person => person.id !== 2);
console.log(people2);




// SPREAD

const arr = [1,2,3];
const arr2 = [ ...arr , 4];

console.log(arr2); 

const person = {
  name: 'Brad',
  age: 36
}

const newPerson = {
  ...person,
  email: 'brad@gmail.com'
}

console.log(newPerson);

const arr3 = [...arr.filter(num => num !== 2)];
console.log(arr3);
 
// DESTRUCTURING

const profile = {
  name: 'John Doe',
  address: {
    street: '40 Main street',
    city: 'Boston'
  },
  hobbies: ['movies', 'music' ]
};

const { name, address, hobbies } = profile;
console.log(name, address, hobbies[0]);

// to just get the address, the following syntax is needed becuase it's nested.

const { street } = profile.address;
console.log(street)



// CLASSES

class Person {
  constructor(){
    this.name = 'John'
  }
}

const person1 = new Person();
const person2 = new Person();

console.log(person1.name);



class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person('John', 33);
const person2 = new Person('Sarah', 28);

console.log(person1.name);
console.log(person2.name);

console.log(person1.age);
console.log(person2.age);




class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  greet() {
    return `hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const person1 = new Person('John', 33);
const person2 = new Person('Sarah', 28);




// SUBCLASSES

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greet() {
    return `hello, my name is ${this.name} and I am ${this.age}`;
  }
}

class Customer extends Person {
  constructor(name, age, balance){
    super(name, age);
    this.balance = balance; 
  }

  info(){
    return `${this.name} owes $${this.balance}.00`;
  }
}

const customer1 = new Customer('Kevin', 32, 300);
console.log(customer1.info());




// MODULES

// file1.js

export const name = 'Jeff';
export const nums = [1,2,3];

// file2.js

import { name, nums } from 'file1.js'; 

// file1.js

export default Person ;
// file2.js

import { name, nums } from 'file1'; 
import Person from 'file1'; 

*/
