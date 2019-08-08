# Angular Notes | Rangle’s Angular Training Book | Angular Tutorial

## https://angular-2-training-book.rangle.io

1. [ Introduction ](#introduction)
2. [ Classes ](#classes)
3. [ Objects ](#objects)
4. [ This Keyword ](#this-keyword)
5. [ Inheritance ](#inheritance)
6. [ Delegation ](#delegation)
7. [ Spread and Rest ](#spread-and-rest)
8. [ Destructuring ](#destructuring)
9. [ Modules ](#modules)
10. [ TypeScript ](#typescript)
11. [ Compiling TypeScript ](#compiling-typescript)
12. [ TypeScript Features ](#typescript-features)

<a data="introduction"></a>

### __Introduction__

Angular is a FrontEnd framework, uses TypeScript and is developed by Google. Angular 2 has the following new features: 

- Form Builder
- Change Detection
- Templating
- Routing
- Annotations
- Observables
- Shadow DOM

Along with TypeScript, you are able to use all ES6 features such as:

- Classes
- Arrow Functions
- Template Strings
- Inheritance
- Constants and Block Scoped Variables
- Spread and Rest operators
- Destructuring
- Modules

<a data="classes"></a>

### __Classes__

ES6 utilizes classes extensively:

```js
class Hamburger {
  constructor() {
    // This is the constructor.
  }
  listToppings() {
    // This is a method.
  }
}
```

Traditional class-based languages often reserve the word this to reference the current (runtime) instance of the class. In Javascript this refers to the calling context and therefore can change to be something other than the object

<a data="objects"></a>

### __Objects__

An object is an instance of a class which is created using the `new` operator. When using a dot notation to access a method on the object, `this` will refer to the object to the left of the dot.

```js
let burger = new Hamburger();
burger.listToppings();
```

In the snippet above, whenever `this` is used from inside class Hamburger, it will refer to object `burger`.

4. [ This Keyword ](#this-keyword)

<a data="this-keyword"></a>

### __This Keyword__

Inside a JavaScript class we'll be using `this` keyword to refer to the instance of the class.

```js
class Toppings {
  ...

  formatToppings() { /* implementation details */ }

  list() {
    return this.formatToppings(this.toppings);
  }
}
```

Here `this` refers to an instance of the `Toppings` class. As long as the `list` method is called using dot notation, like `myToppings.list()`, then `this.formatToppings(this.toppings)` invokes the `formatToppings()` method defined on the instance of the class. This will also ensure that inside `formatToppings`, `this` refers to the same instance.

<a data="inheritance"></a>

### __Inheritance__

The example code below shows how to derive `Penguin` from `Bird` using the `extends` keyword. Also pay attention to the `super` keyword used in the subclass constructor of `Penguin`, it is used to pass the argument to the base class Bird's constructor.

```js
// Base Class : ES6
class Bird {
  constructor(weight, height) {
    this.weight = weight;
    this.height = height;
  }

  walk() {
    console.log('walk!');
  }
}

// Subclass
class Penguin extends Bird {
  constructor(weight, height) {
    super(weight, height);
  }

  swim() {
    console.log('swim!');
  }
}

// Penguin object
let penguin = new Penguin(...);
penguin.walk(); //walk!
penguin.swim(); //swim!
```

<a data="delegation"></a>

### __Delegation__

Delegation is a second way to extend a class' functionality. The code below shows how to use delegation with the `Bird` class and `Penguin` class. The `Penguin` class has a reference to the `Bird` class and it delegates the call made to it's `walk` method over to Bird's `walk` method.

```js
class Bird {
  constructor(weight, height) {
    this.weight = weight;
    this.height = height;
  }
  walk() {
    console.log('walk!');
  }
}

class Penguin {
  constructor(bird) {
    this.bird = bird;
  }
  walk() {
    this.bird.walk();
  }
  swim() {
    console.log('swim!');
  }
}

const bird = new Bird(...);
const penguin = new Penguin(bird);
penguin.walk(); //walk!
penguin.swim(); //swim!
```


<a data="spread-and-rest"></a>

### __Spread and Rest__

A Spread syntax allows in-place expansion of an expression for the following cases:

- Array
- Function call
- Multiple variable destructuring

```js
let cde = ['c', 'd', 'e'];
let scale = ['a', 'b', ...cde, 'f', 'g'];  // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
```

Similarly, object literals can do the same thing:

```js
let mapABC  = { a: 5, b: 6, c: 3};
let mapABCD = { ...mapABC, d: 7};  // { a: 5, b: 6, c: 3, d: 7 }
```

Rest parameters works in the opposite direction of the spread syntax, it collects an indefinite number of comma separated expressions into an array.

```js
function addSimple(a, b) {
  return a + b;
}

function add(...numbers) {
  return numbers[0] + numbers[1];
}

addSimple(3, 2);  // 5
add(3, 2);        // 5

// or in es6 style:
const addEs6 = (...numbers) => numbers.reduce((p, c) => p + c, 0);

addEs6(1, 2, 3);  // 6
```

Rest parameters are in fact arrays which provides access to methods like `map, filter, reduce` and `more`. The other important difference between JavaScript's `arguments` variable, is that rest parameters only include arguments not specifically named in a function like so:

```js
function print(a, b, c, ...more) {
  console.log(more[0]);
  console.log(arguments[0]);
}

print(1, 2, 3, 4, 5);
// 4
// 1
```

<a data="destructuring"></a>

### __Destructuring__

ES6 supports object destructuring:

```js
let myModule = {
  drawSquare: function drawSquare(length) { /* implementation */ },
  drawCircle: function drawCircle(radius) { /* implementation */ },
  drawText: function drawText(text) { /* implementation */ },
};

let {drawSquare, drawText} = myModule;

drawSquare(5);
drawText('hello');
```

Destructuring can also be used for passing objects into a function, allowing you to pull specific properties out of an object.

```js
let jane = { firstName: 'Jane', lastName: 'Doe'};
let john = { firstName: 'John', lastName: 'Doe', middleName: 'Smith' }
function sayName({firstName, lastName, middleName = 'N/A'}) {
  console.log(`Hello ${firstName} ${middleName} ${lastName}`)  
}

sayName(jane) // -> Hello Jane N/A Doe
sayName(john) // -> Helo John Smith Doe
```

<a data="modules"></a>

### __Modules__


All code and data inside the module has file scope, what this means is they are not accessible from code outside the module. To share code or data outside a module, it needs to be exported using the export keyword.

```js
// File: circle.js

export const pi = 3.141592;

export const circumference = diameter => diameter * pi;
```

Browsers need module loaders like either:
- RequireJS
- SystemJS
- Webpack

<a data="typescript"></a>

### __TypeScript__

TypeScript is a superset of ES6, which means all ES6 features are part of TypeScript, but not all TypeScript features are part of ES6. Types let developers write more explicit "contracts". In other words, things like function signatures are more explicit.

__Without TypeScript__

```js
function add(a, b) {
  return a + b;
}

add(1, 3);   // 4
add(1, '3'); // '13'
```

__With TypeScript__

```js
function add(a: number, b: number) {
  return a + b;
}

add(1, 3);   // 4
// compiler error before JS is even produced
add(1, '3'); // '13'
```

TypeScript is more demanding than ES6 and it expects instance properties to be declared:

```js
class Pizza {
  toppings: string[];
  constructor(toppings: string[]) {
    this.toppings = toppings;
  }
}
```

Note that now that we've declared `toppings` to be an array of strings, TypeScript will enforce this. If we try to assign a number to it, we will get an error at compilation time.

If you want to have a property that can be set to a value of any type, however, you can still do this: just declare its type to be "`any`":

```js
class Pizza {
  toppings: any;
  //...
}
```

<a data="compiling-typescript"></a>

### __Compiling TypeScript__


You need to compile you `.ts` files, and the `tsconfig.json` files let programmers write down all the compiler settings they want. For Angular projects there are a number of specific settings that need to be configured in a project's `tsconfig.json`.

```js
{
 "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "noImplicitAny": false,
    "removeComments": false,
    "sourceMap": true
  },
  "exclude": [
    "node_modules",
    "dist/"
  ]
}
```

##### Target

The compilation target. TypeScript supports targeting different platforms depending on your needs. In our case, we're targeting modern browsers which support ES5.

##### Module

The target module resolution interface. We're integrating TypeScript through webpack which supports different interfaces. We've decided to use node's module resolution interface, `commonjs`.

##### Decorators

Decorator support in TypeScript hasn't been finalized yet but since Angular uses decorators extensively, these need to be set to true. Decorators have not been introduced yet, and will be covered later in this section.

##### TypeScript with Webpack

We won't be running tsc manually, however. Instead, webpack's ts-loader will do the transpilation during the build:

```js
  // webpack.config.js
  //...
  rules: [
    { test: /\.ts$/, loader: 'ts', exclude: /node_modules/ },
    //...
  ]
```


<a data="typescript-features"></a>

### __TypeScript Features__

##### Types

JavaScript's types also exist in TypeScript:
- `boolean` (true/false)
- `number` `integers`, `floats`, `Infinity` and `NaN`
- `string` characters and `strings` of characters
- `[]` Arrays of other types, like `number[]` or `boolean[]`
- `{}` Object literal
- `undefined` not set

TypeScript also adds:
- `enum` enumerations like { Red, Blue, Green }
- `any` use any type
- `void` nothing

```js
let isDone: boolean = false;
let height: number = 6;
let name: string = "bob";
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

function showMessage(data: string): void {
  alert(data);
}
showMessage('hello');
```