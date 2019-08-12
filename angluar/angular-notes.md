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
26. [ Passing Data into a Component ](#passing-data-into-a-component)
27. [ Responding to Component Events ](#responding-to-component-events)
28. [ Using Two-Way Data Binding ](#using-two-way-data-binding)
29. [ Accessing Child Components from Template ](#accessing-child-components-from-template)
30. [ Projection ](#projection)
31. [ Grouping Dependencies Into Modules ](#grouping-dependencies-into-modules)
32. [ Directives ](#directives)
33. [ NgStyle Directives ](#ngstyle-directives)
34. [ NgClass Directives ](#ngclass-directives)
35. [ Structural Directives ](#structural-directives)

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

Like function parameters, `class`es sometimes have optional members. The same `?:` syntax can be used on a class definition:

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

Function type annotations can get much more specific than typescripts built-in `Function` type. Function type definitions allow you to attach a function signature to its own type.

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

- _selector_ is the element property that we use to tell Angular to create and insert an instance of this component.
- _template_ is a form of HTML that tells Angular what needs to be to rendered in the DOM.

The Component below will interpolate the value of `name` variable into the template between the double braces `{{name}}`, what get rendered in the view is `<p>Hello, World!</p>`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'rio-hello',
  template: '<p>Hello, {{name}}!</p>',
})
export class HelloComponent {
  name: string;

  constructor() {
    this.name = 'World';
  }
}
```

To use this component we simply add `<rio-hello></rio-hello>` to the HTML file or another template, and Angular will insert an instance of the `HelloComponent` view between those tags.


- _Smart / Container_ components are application-specific, higher-level, container components, with access to the application's domain model.
- _Dumb / Presentational_ components are components responsible for UI rendering and/or behavior of specific entities passed in via components API (i.e component properties and events). Those components are more in-line with the upcoming Web Component standards.


<a data="passing-data-into-a-component"></a>

### __Passing Data into a Component__

There are two ways to pass data into a component: 
1. property binding
2. event binding

In Angular, data and event change detection happens top-down from parent to children. However it is also possible to create events that propogate upwards. 

The `@Input()` decorator defines a set of parameters that can be passed down from the component's parent. 

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rio-hello',
  template: '<p>Hello, {{name}}!</p>',
})
export class HelloComponent {
  @Input() name: string;
}
```

Inputs allow us to configure a particular instance of a component. We can now use our component like so:

```xml
<!-- To bind to a raw string -->
<rio-hello name="World"></rio-hello>
<!-- To bind to a variable in the parent scope -->
<rio-hello [name]="helloName"></rio-hello>
```

<a data="responding-to-component-events"></a>

### __Responding to Component Events__

An event handler is specified inside the template using round brackets to denote event binding. This event handler is then coded in the class to process the event.

```ts
import {Component} from '@angular/core';

@Component({
  selector: 'rio-counter',
  template: `
    <div>
      <p>Count: {{num}}</p>
      <button (click)="increment()">Increment</button>
    </div>
  `
})
export class CounterComponent {
  num = 0;

  increment() {
    this.num++;
  }
}
```

To send data out of components via outputs, start by defining the outputs attribute. It accepts a list of output parameters that a component exposes to its parent.

_app/counter.component.ts_

```ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rio-counter',
  templateUrl: 'app/counter.component.html'
})
export class CounterComponent {
  @Input()  count = 0;
  @Output() result = new EventEmitter<number>();

  increment() {
    this.count++;
    this.result.emit(this.count);
  }
}
```

_app/counter.component.html_

```ts
<div>
  <p>Count: {{ count }}</p>
  <button (click)="increment()">Increment</button>
</div>
```

_app/app.component.ts_

```ts
import { Component, OnChange } from '@angular/core';

@Component({
  selector: 'rio-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnChange {
  num = 0;
  parentCount = 0;

  ngOnChange(val: number) {
    this.parentCount = val;
  }
}
```

_app/app.component.html_

```ts
<div>
  Parent Num: {{ num }}<br>
  Parent Count: {{ parentCount }}
  <rio-counter [count]="num" (result)="ngOnChange($event)">
  </rio-counter>
</div>
```

Together a set of input + output bindings define the public API of your component. In our templates we use the [squareBrackets] to pass inputs and the (parenthesis) to handle outputs.

<a data="using-two-way-data-binding"></a>

### __Using Two-Way Data Binding__

Two-way data binding combines the input and output binding into a single notation using the `ngModel` directive.

```ts
<input [(ngModel)]="name" >
```

What this is doing behind the scenes is equivalent to:

```ts
<input [ngModel]="name" (ngModelChange)="name=$event">
```

To create your own component that supports two-way binding, you must define an `@Output` property to match an `@Input`, but suffix it with the `Change`. The code example below, inside class `CounterComponent` shows how to make property count support two-way binding.

_app/counter.component.ts_

```ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rio-counter',
  templateUrl: 'app/counter.component.html'
})
export class CounterComponent {
  @Input() count = 0;
  @Output() countChange = EventEmitter<number>();

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }
}
```

_app/counter.component.html_

```ts
<div>
  <p>
    <ng-content></ng-content>
    Count: {{ count }} -
    <button (click)="increment()">Increment</button>
  </p>
</div>
```

<a data="accessing-child-components-from-template"></a>

### __Accessing Child Components from Template__

In our templates, we may find ourselves needing to access values provided by the child components which we use to build our own component.

_app/app.component.html_

```ts
<section >
  <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" ngModel>
    <button type="submit">Submit</button>
  </form>
  Form Value: {{formValue}}
</section>
```

_app/app.component.ts_

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'rio-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  formValue = JSON.stringify({});

  onSubmit (form: NgForm) {
    this.formValue = JSON.stringify(form.value);
  }
}
```

The example above shows how to reference the instance of a child component in your template. With that reference, you can then access public properties and methods on that component.

_app/app.component.html_

```ts
<rio-profile #profile></rio-profile>
My name is {{ profile.name }}
```

_app/profile.component.ts_

```ts
@Component({
  selector: 'rio-profile',
  templateUrl: 'app/profile.component.html'
})
export class ProfileComponent {
  name = 'John Doe';
}
```

<a data="projection"></a>

### __Projection__

Projection is a very important concept in Angular. It enables developers to build reusable components and make applications more scalable and flexible. To illustrate that, suppose we have a `ChildComponent` like:

```ts
@Component({
    selector: 'rio-child',
    template: `
      <div>
        <h4>Child Component</h4>
        {{ childContent }}
      </div>
    `
})
export class ChildComponent {
  childContent = "Default content";
}
```

Components by default support projection, and you can use the `ngContent` directive to place the projected content in your template. So, change ChildComponent to use projection:

_app/child/child.component.ts_

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'rio-child',
  template: `
    <div style="border: 1px solid blue; padding: 1rem;">
      <h4>Child Component</h4>
      <ng-content></ng-content>
    </div>
  `
})
export class ChildComponent {
}
```

Then, when we use `ChildComponent` in the template:

_app/app.component.html_

```ts
...
  <rio-child>
    <p>My <i>projected</i> content.</p>
  </rio-child>
...
```

This is telling Angular, that for any markup that appears between the opening and closing tag of `<rio-child>`, to place inside of `<ng-content></ng-content>`.

But what if we have multiple `<ng-content></ng-content>` and want to specify the position of the projected content to certain ng-content? 

_app/child-select.component.html_

```ts
<div style="...">
  <h4>Child Component with Select</h4>
  <div style="...">
    <ng-content select="header"></ng-content>
  </div>
  <div style="...">
    <ng-content select="section"></ng-content>
  </div>
  <div style="...">
    <ng-content select=".class-select"></ng-content>
  </div>
  <div style="...">
    <ng-content select="footer"></ng-content>
  </div>
</div>
```

Then in the template, we can use directives, say, `<header>` to specify the position of projected content to the `ng-content` with `select="header"`:

_app/app.component.html_

```ts
...
<rio-child-select>
  <section>Section Content</section>
  <div class="class-select">
    div with .class-select
  </div>
  <footer>Footer Content</footer>
  <header>Header Content</header>
</rio-child-select>
...
```

Besides using directives, developers can also select a `ng-content` through css class:

```ts
<ng-content select=".class-select"></ng-content>
```

_app/app.component.html_

```ts
<div class="class-select">
  div with .class-select
</div>
```

<a data="grouping-dependencies-into-modules"></a>

### __Grouping Dependencies Into Modules__

Components depend on other components, directives and pipes. For example, `TodoListComponent` relies on `TodoItemComponent`. To let a component know about these dependencies we group them into a module.

```ts
import {NgModule} from '@angular/core';

import {TodoListComponent} from './components/todo-list.component';
import {TodoItemComponent} from './components/todo-item.component';
import {TodoInputComponent} from './components/todo-input.component';

@NgModule({
  imports: [ ... ],
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    TodoInputComponent
  ],
  bootstrap: [ ... ]
})
export class ToDoAppModule {
}
```

The property `declarations` expects an array of components, directives and pipes that are part of the module.

<a data="directives"></a>

### __Directives__

A Directive modifies the DOM to change apperance, behavior or layout of DOM elements. Directives are one of the core building blocks Angular uses to build applications. There are three main types of directives in Angular:

1. _Component_ - directive with a template.
2. _Attribute directives_ - directives that change the behavior of a component or element but don't affect the template
    - Attribute directives are a way of changing the appearance or behavior of a component or a native DOM element. Ideally, a directive should work in a way that is component agnostic and not bound to implementation details. For example, Angular has built-in attribute directives such as `ngClass` and `ngStyle` that work on any component or element.
3. _Structural directives_ - directives that change the behavior of a component or element by affecting how the template is rendered

<a data="ngstyle-directives"></a>

### __NgStyle Directives__

Angular provides a built-in directive, `ngStyle`, to modify a component or element's style. Binding a directive works the exact same way as component attribute bindings. 

```ts
@Component({
  selector: 'app-style-example',
  template: `
    <p style="padding: 1rem"
      [ngStyle]="{
        'color': 'red',
        'font-weight': 'bold',
        'borderBottom': borderStyle
      }">
      <ng-content></ng-content>
    </p>
  `
})
export class StyleExampleComponent {
  borderStyle = '1px solid black';
}
```

In the example above, we're binding an expression, an object literal, to the `ngStyle` directive so the directive name must be enclosed in square brackets. `ngStyle` accepts an object whose properties and values define that element's style.

We can remove the style properties out of the template into the component as a property object, which then gets assigned to `NgStyle` using property binding. This allows dynamic changes to the values as well as provides the flexibility to add and remove style properties.

```ts
@Component({
  selector: 'app-style-example',
  template: `
    <p style="padding: 1rem"
      [ngStyle]="alertStyles">
      <ng-content></ng-content>
    </p>
  `
})
export class StyleExampleComponent {
  borderStyle = '1px solid black';

  alertStyles = {
    'color': 'red',
    'font-weight': 'bold',
    'borderBottom': this.borderStyle
  };
}
```

<a data="ngclass-directives"></a>

### __NgClass Directives__

The `ngClass` directive changes the `class` attribute that is bound to the component or element it's attached to.

#### Binding a string

We can bind a string directly to the attribute. This works just like adding an html `class` attribute.

```ts
@Component({
  selector: 'app-class-as-string',
  template: `
    <p ngClass="centered-text underlined" class="orange">
      <ng-content></ng-content>
    </p>
  `,
  styles: [`
    .centered-text {
      text-align: center;
    }

    .underlined {
      border-bottom: 1px solid #ccc;
    }

    .orange {
      color: orange;
    }
  `]
})
export class ClassAsStringComponent {
}
```

#### Binding an array

```ts
@Component({
  selector: 'app-class-as-array',
  template: `
    <p [ngClass]="['warning', 'big']">
      <ng-content></ng-content>
    </p>
  `,
  styles: [`
    .warning {
      color: red;
      font-weight: bold;
    }

    .big {
      font-size: 1.2rem;
    }
  `]
})
export class ClassAsArrayComponent {
}
```

Passing in an array is useful when you want to have a function put together the list of applicable class names.


#### Binding an object

Angular applies each property name of that object to the component if that property is true.

```ts
@Component({
  selector: 'app-class-as-object',
  template: `
    <p [ngClass]="{ card: true, dark: false, flat: flat }">
      <ng-content></ng-content>
      <br>
      <button type="button" (click)="flat=!flat">Toggle Flat</button>
    </p>
  `,
  styles: [`
    .card {
      border: 1px solid #eee;
      padding: 1rem;
      margin: 0.4rem;
      font-family: sans-serif;
      box-shadow: 2px 2px 2px #888888;
    }

    .dark {
      background-color: #444;
      border-color: #000;
      color: #fff;
    }

    .flat {
      box-shadow: none;
    }
  `]
})
export class ClassAsObjectComponent {
  flat: boolean = true;
}
```

<a data="structural-directives"></a>

### __Structural Directives__

Structural Directives are a way of handling how a component or element renders through the use of the `template` tag. Angular has a few built-in structural directives such as `ngIf`, `ngFor`, and `ngSwitch`.