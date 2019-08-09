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
13. [ TypeScript Classes ](#typescript-classes)
14. [ Interfaces ](#interfaces)
15. [ Shapes ](#shapes)
16. [ Union Types ](#union-types)
17. [ Intersection Types ](#intersections-types)
18. [ Function Type Definitions ](#function-type-definitions)
19. [ Decorators ](#decorators)
20. [ Property Decorators ](#property-decorators)
21. [ Class Decorators ](#class-decorators)
22. [ Parameter Decorators ](#parameter-decorators)
23. [ Understanding the File Structure ](#understanding-the-file-structure)
24. [ Bootstrapping Providers ](#bootstrapping-providers)
25. [ Creating a Component ](#creating-a-component)

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

Traditional class-based languages often reserve the word `this` to reference the current (runtime) instance of the class. In Javascript `this` refers to the calling context and therefore can change to be something other than the object.

<a data="objects"></a>

### __Objects__

An object is an instance of a class which is created using the `new` operator. When using dot notation to access a method on the object, `this` will refer to the object to the left of the dot.

```js
let burger = new Hamburger();
burger.listToppings();
```

In the snippet above, whenever `this` is used from inside class Hamburger, it will refer to object `burger`.

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


All code and data inside the module has file scope, what this means is they are not accessible from code outside the module. To share code or data outside a module, it needs to be exported using the `export` keyword.

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


You need to compile you `.ts` files, and the `tsconfig.json` file lets programmers write down all the compiler settings they want. For Angular projects there are a number of specific settings that need to be configured in a project's `tsconfig.json`.

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

##### _Target_

The compilation target. TypeScript supports targeting different platforms depending on your needs. In our case, we're targeting modern browsers which support ES5.

##### _Module_

The target module resolution interface. We're integrating TypeScript through webpack which supports different interfaces. We've decided to use node's module resolution interface, `commonjs`.

##### _Decorators_

Decorator support in TypeScript hasn't been finalized yet but since Angular uses decorators extensively, these need to be set to true. Decorators have not been introduced yet, and will be covered later in this section.

##### _TypeScript with Webpack_

We won't be running `tsc` manually, however. Instead, webpack's ts-loader will do the transpilation during the build:

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

##### _Types_

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

TypeScript provides support for functions that take optional parameters like so:

```ts
function logMessage(message: string, isDebug?: boolean) {
  if (isDebug) {
    console.log('Debug: ' + message);
  } else {
    console.log(message);
  }
}
logMessage('hi');         // 'hi'
logMessage('test', true); // 'Debug: test'
```

Using a `?` lets tsc know that isDebug is an optional parameter. `tsc` will not complain if `isDebug` is omitted.


<a data="typescript-classes"></a>

### __TypeScript Classes__

TypeScript also treats `class`es as their own type:

```ts
class Foo { foo: number; }
class Bar { bar: string; }

class Baz { 
  constructor(foo: Foo, bar: Bar) { }
}

let baz = new Baz(new Foo(), new Bar()); // valid
baz = new Baz(new Bar(), new Foo());     // tsc errors
```

Like function parameters, `class`es sometimes have optional members. The same ?: syntax can be used on a class definition:

```ts
class Person {
  name: string;
  nickName?: string;
}
```

In the above example, an instance of `Person` is guaranteed to have a `name`, and might optionally have a `nickName`.


<a data="interfaces"></a>

### __Interfaces__

An _interface_ is a TypeScript artifact, it is not part of ECMAScript. An interface is a way to define a contract on a function with respect to the arguments and their type. Along with functions, an interface can also be used with a Class as well to define custom types.

An interface is an abstract type, it does not contain any code as a class does. It only defines the 'signature' or shape of an API. During transpilation, an interface will not generate any code, it is only used by Typescript for type checking during development.

Here is an example of an interface describing a function API:

```ts
interface Callback {
  (error: Error, data: any): void;
}

function callServer(callback: Callback) {
  callback(null, 'hi');
}

callServer((error, data) => console.log(data));  // 'hi'
callServer('hi');     
```

Sometimes JavaScript functions can accept multiple types as well as varying arguments, that is, they can have different call signatures. Interfaces can be used to specify this.

```ts
interface PrintOutput {
  (message: string): void;    // common case
  (message: string[]): void;  // less common case
}

let printOut: PrintOutput = (message) => {
  if (Array.isArray(message)) {
    console.log(message.join(', '));
  } else {
    console.log(message);
  }
}

printOut('hello');       // 'hello'
printOut(['hi', 'bye']); // 'hi, bye'
```

<a data="shapes"></a>

### __Shapes__

Shapes work like TypeScript's `interfaces`, and are in fact how TypeScript compares custom types like `classes` and `interfaces`.

```ts
interface Action {
  type: string;
}

let a: Action = {
    type: 'literal' 
}

class NotAnAction {
  type: string;
  constructor() {
    this.type = 'Constructor function (class)';
  }
}

a = new NotAnAction(); // valid TypeScript!
```

Despite the fact that `Action` and `NotAnAction` have different identifiers, `tsc` lets us assign an instance of `NotAnAction` to `a` which has a type of `Action`. This is because TypeScript only really cares that objects have the same shape. In other words if two objects have the same attributes, with the same typings, those two objects are considered to be of the same type.

<a data="union-types"></a>

### __Union Types__

Union types allow type annotations to specify that a property should be one of a set of types (either/or).

```ts
function admitAge (age: number|string): string {
  return `I am ${age}, alright?!`;
}

admitAge(30); // 'I am 30, alright?!'
admitAge('Forty'); // 'I am Forty, alright?!'
```

The `type` keyword simplifies annotating and reusing union types.

```ts
type Age = number | string;

function admitAge (age: Age): string {
  return `I am ${age}, alright?!`;
}

let myAge: Age = 50;
let yourAge: Age = 'One Hundred';
admitAge(yourAge); // 'I am One Hundred, alright?!'
```

A union type of string literal types is a very useful pattern, creating what is basically an enum with string values.

```ts
type PartyZone = "pizza hut" | "waterpark" | "bowling alley" | "abandoned warehouse";

function goToParty (place: PartyZone): string {
  return `lets go to the ${place}`;
}

goToParty("pizza hut");
goToParty("chuck e. cheese"); // Argument of type `"chuck e. cheese"' is not assignable to parameter of type 'PartyZone'
```

<a data="intersections-types"></a>

### __Intersection Types__

Intersection types are the combination of two or more types. Useful for objects and params that need to implement more than one interface.

```ts
interface Kicker {
  kick(speed: number): number;
}

interface Puncher {
  punch(power: number): number;
}
// assign intersection type definition to alias KickPuncher
type KickPuncher = Kicker & Puncher;

function attack (warrior: KickPuncher) {
  warrior.kick(102);
  warrior.punch(412);
  warrior.judoChop(); // Property 'judoChop' does not exist on type 'KickPuncher'
}
```

<a data="function-type-definitions"></a>

### __Function Type Definitions__

Function type annotations can get much more specific than typescripts built-in `Function` type. Function type definitions allow you to attach a function signature to it's own type.

```ts
type MaybeError = Error | null;
type Callback = (err: MaybeError, response: Object) => void;

function sendRequest (cb: Callback): void {
  if (cb) {
    cb(null, {});
  }
}
```

Here is the function type defined inline:

```ts
function sendRequest (cb: (err: Error|null, response: Object) => void): void {
  if (cb) {
    cb(null, {});
  }
}
```

<a data="decorators"></a>

### __Decorators__

Decorators are functions that are invoked with a prefixed `@` symbol, and immediately followed by a `class`, parameter, method or property. The decorator function is supplied information about the class, parameter or method, and the decorator function returns something in its place, or manipulates its target in some way. Typically the "something" a decorator returns is the same thing that was passed in, but it has been augmented in some way.

Decorators are functions, and there are four things (class, parameter, method and property) that can be decorated; consequently there are four different function signatures for decorators:

- class

```ts
declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
```

- property

```ts
declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
```

- method

```ts
declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
```

- parameter

```ts
declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
```

<a data="property-decorators"></a>

### __Property Decorators__

```ts
function Override(label: string) {
  return function (target: any, key: string) {
    Object.defineProperty(target, key, { 
      configurable: false,
      get: () => label
    });
  }
}

class Test {
  @Override('test')      // invokes Override, which returns the decorator
  name: string = 'pat';
}

let t = new Test();
console.log(t.name);  // 'test'
```

In this case the decorated property is replaced by the `label` passed to the decorator. It's important to note that property values cannot be directly manipulated by the decorator; instead an accessor is used.

Here's a classic property example that uses a _plain decorator_:

```ts
function ReadOnly(target: any, key: string) {
  Object.defineProperty(target, key, { writable: false });
}

class Test {
  @ReadOnly             // notice there are no `()`
  name: string;
}

const t = new Test();
t.name = 'jan';         
console.log(t.name); // 'undefined'
```

In this case the name property is not `writable`, and remains undefined.

<a data="class-decorators"></a>

### __Class Decorators__

```ts
function log(prefix?: string) {
  return (target) => {
    // save a reference to the original constructor
    var original = target;

    // a utility function to generate instances of a class
    function construct(constructor, args) {
      var c: any = function () {
        return constructor.apply(this, args);
      }
      c.prototype = constructor.prototype;
      return new c();
    }

    // the new constructor behavior
    var f: any = function (...args) {
      console.log(prefix + original.name);
      return construct(original, args);
    }

    // copy prototype so instanceof operator still works
    f.prototype = original.prototype;

    // return new constructor (will override original)
    return f;
  };
}

@log('hello')
class World {
}

const w = new World(); // outputs "helloWorld"
```

- In the example `log` is invoked using `@`, and passed a string as a parameter, `@log()` returns an anonymous function that is the actual decorator.
- The decorator function takes a class, or constructor function (ES5) as an argument. The decorator function then returns a new class construction function that is used whenever `World` is instantiated.
- This decorator does nothing other than log out its given parameter, and its `target`'s class name to the console.


<a data="parameter-decorators"></a>

### __Parameter Decorators__

```ts
function logPosition(target: any, propertyKey: string, parameterIndex: number) {
  console.log(parameterIndex);
}

class Cow {
  say(b: string, @logPosition c: boolean) {
    console.log(b);
  }
}

new Cow().say('hello', false); // outputs 1 (newline) hello
```

The above demonstrates decorating method parameters.

<a data="understanding-the-file-structure"></a>

### __Understanding the File Structure__

- `app/app.component.ts` - this is where we define our root component 
- `app/app.module.ts` - the entry Angular Module to be bootstrapped
- `index.html` - this is the page the component will be rendered in
- `app/main.ts` - is the glue that combines the component and page together

_app/app.component.ts_

```ts
import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    template: '<b>Bootstrapping an Angular Application</b>'
})
export class AppComponent { }
```

_index.html_

```xml
<body>
    <app-root>Loading...</app-root>
</body>
```

_app/app.module.ts_

```ts
import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } '@angular/core';
import { AppComponent } from './app.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

_app/main.ts_

```ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```

If you're making use of Ahead-of-Time (AoT) compilation, you would code `main.ts` as follows:

```ts
import { platformBrowser} from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
```

The bootstrap process loads `main.ts` which is the main entry point of the application. The `AppModule` operates as the root module of our application. The module is configured to use `AppComponent` as the component to bootstrap, and will be rendered on any `app-root` HTML element encountered.

There is an `app` HTML element in the `index.html` file, and we use `app/main.ts` to import the `AppModule` component and the `platformBrowserDynamic().bootstrapModule` function and kickstart the process. As shown above, you may optionally use `AoT` in which case you will be working with Factories, in the example, `AppModuleNgFactory` and `bootstrapModuleFactory`.


<a data="bootstrapping-providers"></a>

### __Bootstrapping Providers__

Here's an example of how to bootstrap your application with application-wide providers.

For this, we will register a service called `GreeterService` with the `providers` property of the module we are using to bootstrap the application.

_app/app.module.ts_

```ts
import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } '@angular/core';
import { AppComponent } from './app.component'
import { GreeterService } from './greeter.service';

@NgModule({
  imports: [BrowserModule],
  providers: [GreeterService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

<a data="creating-a-component"></a>

### __Creating a Component__

We define a component's application logic inside a `class`. To this we attach `@Component`, a TypeScript `decorator`, which allows you to modify a class or function definition and adds metadata to properties and function arguments.