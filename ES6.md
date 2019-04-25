# ES6
## Free Code Camp ES6 Tutorial Notes

1. [ Intro ](#intro)
2. [ Var versus Let ](#var-let)
3. [ Const Variable ](#const)
4. [ Object.freeze ](#object-freeze)
5. [ Arrow Functions ](#arrow-functions)
6. [ Higher Order Functions ](#higher-order-functions)
7. [ Default Parameters ](#default-parameters)
8. [ Rest Operator ](#rest-operator)
9. [ Spread Operator ](#spread-operator)
10. [ Destructuring Assignment ](#destructuring-assignment)
11. [ Destructing Assignment From Nested Objects ](#destructuring-from-nested-objects)
12. [ Destructing Assignment From Arrays ](#destructuring-from-arrays)


<a data="intro"></a>
### ___Intro___

ECMAScript 5 (ES5) specification of the language, finalized in 2009. The most recent standardized version is called ECMAScript 6 (ES6), released in 2015. Not all browsers support ES6 features. If you use ES6 in your own projects, you may need to use a program (transpiler) to convert your ES6 code into ES5 until browsers support ES6.

<a data="var-let"></a>
### ___Var Versus Let___

One of the biggest problems with declaring variables with the ```var``` keyword is that you can overwrite variable declarations without an error.  ```let``` was introduced in ES6 to solve this potential issue with the var keyword. Therefore when using ```let```, a variable with the same name can only be declared once.

When you declare a variable with the ```let``` keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

<a data="const"></a>
### ___Const___

```Const``` has all the awesome features that ```let``` has, with the added bonus that variables declared using ```const``` are read-only. They are a constant value, which means that once a variable is assigned with ```const```, it cannot be reassigned. A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

Objects (including arrays and functions) assigned to a variable using const are still mutable. Using the ```const``` declaration only prevents reassignment of the variable identifier.

```javascript
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
```

Exercise: An array is declared as ```const s = [5, 7, 2]```. Change the array to ```[2, 5, 7]``` using various element assignment.

Before:
```javascript
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();
```

After:
```javascript
const s = [5, 7, 2];
function editInPlace() {
    "use strict";
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
```

<a data="object-freeze"></a>
### ___Object.freeze___ 

JavaScript provides a function ```Object.freeze``` to prevent data mutation. Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.

```javascript
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; //will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}
```
<a data="arrow-functions"></a>
### ___Arrow Functions___

Arrow functions are a consise way to write annonymous functions (functions that don't need to be reused). Here is an example of an annonymous function prior to "fat-arrow":

```javascript
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```
Here is the same code using arrow function syntax:
```javascript
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```
When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword ```return``` as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:
```javascript
const myFunc = () => "value"
```

Just like a normal function, you can pass arguments into arrow functions.

```javascript
// doubles input value and returns it
const doubler = (item) => item * 2;
```
You can pass more than one argument into arrow functions as well.

<a data="higher-order-functions"></a>
### ___Higher Order Functions___

Arrow functions work really well with higher order functions, such as ```map()```, ```filter()```, and ```reduce()```, that take other functions as arguments for processing collections of data.


#### ```.Map()```

The ```map()``` method creates a new array with the results of calling a provided function on every element in the calling array.

Example:
```javascript
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

#### ```.Filter()```

The ```filter()``` method creates an array filled with all array elements that pass a test (provided as a function).

This example shows using the filter method without arrow function syntax:
```Javascript
FBPosts.filter(function(post) {
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
})
```

This example shows the code from the previous example expressed using arrow function syntax:
```Javascript
FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)
```

#### ```.Filter()```

The ```reduce()``` method executes a ```reducer``` function (that you provide) on each member of the array resulting in a single output value.


Example:
```Javascript
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```


__Exercise:__


Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers) in the array ```realNumberArray``` and store the new array in the variable ```squaredIntegers```.

Before:
```javascript
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr;
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
```

After:
```javascript
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter( (x) => x > 0 && x % parseInt(x) == 0  ).map( (x) => Math.pow(x,2) )  ;

  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
```
Note that in this example, one must cast x with ```parseInt``` to return an interger.

<a data="default-parameters"></a>
### ___Default Parameters___

The default parameter are used when a passed argument is undefined. 
```javascript
function greeting(name = "Anonymous") {
  return "Hello " + name;
}
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
```
You can add default values for as many parameters as you want.


__Exercise:__


Modify the function ```increment``` by adding default parameters so that it will add 1 to ```number``` if ```value``` is not specified.

Before:
```javascript
const increment = (function() {
  "use strict";
  return function increment(number, value) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
```

After:
```javascript
const increment = (function() {
  "use strict";
  return function increment(number, value  = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
```

<a data="rest-operator"></a>
### ___Rest Operator___

With the rest operator, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

```javascript
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
```

The rest operator eliminates the need to check the args array and allows us to apply ```map()```, ```filter()``` and ```reduce()``` on the parameters array.

__Exercise:__

Modify the function sum so that it uses the rest operator and it works in the same way with any number of parameters.

Before:
```javascript
const sum = (function() {
  "use strict";
  return function sum(x, y, z) {
    const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
```

After:
```javascript
const sum = (function() {
  "use strict";
  return function sum(...args) {
    // const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
```

<a data="spread-operator"></a>
### ___Spread Operator___

ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected. The value of the spread operator is clear when comparing ES5 and ES6 syntax.

ES5 Syntax:
```javascript
// ES5 needs the apply() method to compute the maximum value in an array:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
```

In ES5, you need to use ```Math.max.apply(null, arr)``` because ```Math.max(arr)``` returns ```NaN``` and ```Math.max()``` expects comma-separated arguments, but not an array.

ES6 Syntax:

```javascript
//The spread operator makes this syntax much better to read and maintain

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
```

```...arr``` returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

```javascript
const spreaded = ...arr; // will throw a syntax error
```

__Exercise:__

Copy all contents of ```arr1``` into another array ```arr2``` using the spread operator.

Before:
```javascript
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = []; // change this line
})();
console.log(arr2);
```

After:
```javascript
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
```

<a data="destructuring-assignment"></a>
### ___Destructuring Assignment___

 Destructuring assignment is special syntax for neatly assigning values taken directly from an object to variables. Let's compare ES5 and ES6 again.

 ```javascript
//In ES5, this is how to assign object properties to variables

var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
 ```

```javascript
//Here's the same assignment statement with ES6 destructuring syntax:
const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
```

Furthermore, if instead you want to store the values of ```voxel.x``` into ```a```, ```voxel.y``` into ```b```, and ```voxel.z``` into ```c```, you have that freedom as well.

```javascript
const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54
```
You may read it as "get the field ```x``` and copy the value into ```a```," and so on.


__Exercise__:

Use destructuring to obtain the average temperature for tomorrow from the input object ```AVG_TEMPERATURES```, and assign value with key ```tomorrow``` to ```tempOfTomorrow``` in line.

Before:

```javascript
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const tempOfTomorrow = undefined; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
```

After:

```javascript
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const {tomorrow : tempOfTomorrow } = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
```
<a data="destructuring-from-nested-objects"></a>
### ___Destructing Assignment From Nested Objects___

__Example__

```javascript
const a = {
  start: { x: 5, y: 6},
  end: { x: 6, y: -9 }
};
const { start : { x: startX, y: startY }} = a;
console.log(startX, startY); // 5, 6
```

__Exercise:__

Use destructuring assignment to obtain ```max``` of ```forecast.tomorrow``` and assign it to ```maxOfTomorrow```.

Before:

```javascript
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const maxOfTomorrow = undefined; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
```

After:

```javascript
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const { tomorrow : { max : maxOfTomorrow }} = forecast; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
```

<a data="destructuring-from-arrays"></a>
### ___Destructing Assignment From Arrays___

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables. Destructuring an array lets us do exactly that:

```javascript
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
```

The variable ```a``` is assigned the first value of the array, and ```b``` is assigned the second value of the array.

We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

```javascript
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```

__Exercise:__

Use destructuring assignment to swap the values of ```a``` and ```b``` so that ```a``` receives the value stored in ```b```, and ```b``` receives the value stored in ```a```.

Before:

```javascript
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
```

After:

```javascript
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a, b] = [6, 8];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

// Note: In my first attempt I used keyword const
// However that will keep the effect of assignment local.
```

