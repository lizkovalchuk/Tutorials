# JavaScript Review
## Free Code Camp Intro to JavaScript Tutorial Notes

1. [ Variables and Data Types ](#variables-and-data-types)
2. [ Escape Characters ](#esc-chars)
3. [ Length ](#length) 
4. [ Bracket Notation ](#bracket-notation) 
5. [ Arrays ](#arrays) 
6. [ Manipulating Arrays ](#manipulating-arrays) 
7. [ Global Scope and Functions ](#scope-functions) 
8. [ Switch Statement ](#switch-statement) 
9. [ Returning Boolean Values from Functions ](#returning-boolean-values-from-functions)
10. [ Objects ](#objects) 
11. [ Using Objects for Lookups ](#using-objects-for-lookups) 
12. [ Testing Objects for Properties ](#testing-objects-for-properties) 
13. [ Manipulating Complex Objects ](#manipulating-complex-objects)
14. [ Accessing Nested Objects ](#accessing-nested-objects) 
15. [ Accessing Nested Arrays ](#accessing-nested-arrays) 
16. [ Loops ](#loops) 
17. [ Do While Loops ](#do-while-loops) 
18. [ Math Function ](#math-function) 
19. [ ParseInt ](#parseInt) 
20. [ Conditional Ternary Operator ](#conditional-ternary-operator)



<a name="variables-and-data-types"></a>
### ___Variables and Data Types___ 
JavaScript provides seven different data types which are undefined, null, boolean, string, symbol, number, and object. Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.

Decimal numbers are sometimes referred to as floating point numbers or floats.

The remainder operator is sometimes incorrectly referred to as the "modulus" operator. It is very similar to modulus, but does not work properly with negative numbers.

FizzBuzz is a great way to utilize the remainder operator.
```javascript
for(i=0; i < 16; i++){
    if(i % 3 == 0 ){
        console.log("fizz")
    } if(i % 5 == 0){
        console.log("buzz")
    } if (i % 3 !== 0 && i % 5 !== 0){
        console.log(i)
    }
}
```

<a name="esc-chars"></a>
### ___Escape Characters___
The following is a list of required escaping:

| Code | Output |
| ------------- | ------------- |
| \\'           | single quote  |
| \\"           | double quote  |
| \\\           | backslash  |
| \\n           | newline  |
| \\r           | carriage return  |
| \\t           | tab  |
| \\b           | backspace  |
| \\f           | form feed  |

<a name="length"></a>
### ___Find the Length___

You can find the length of a String value by writing ```.length``` after the string variable or string literal.

<a name="bracket-notation"></a>	
### ___Bracket Notation___

Bracket notation is a way to get a character at a specific index within a string. For example, the character at index 0 in the word "Charles" is "C". So if ```var firstName = "Charles"```, you can get the value of the first letter of the string by using ```firstName[0]```.

In order to get the last letter of a string, you can subtract one from the string's length.

For example, if ```var firstName = "Charles"```, you can get the value of the last letter of the string by using ```firstName[firstName.length - 1]```.
	
You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character. For example, you can get the value of the third-to-last letter of the ```var firstName = "Charles"``` string by using ```firstName[firstName.length - 3]```.

<a name="arrays"></a>	
### ___Arrays___

You can nest arrays within other arrays, like this: ```[["Bulls", 23], ["White Sox", 45]]```. This is also called a Multi-dimensional Array (array of arrays).

Unlike strings, the entries of arrays are mutable and can be changed freely.

```javascript
var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]
```
Accessing multi-dimensional arrays:
```javascript
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
```

<a name="manipulating-arrays"></a>	
### ___Manipulating Arrays___

```.push()``` takes one or more parameters and "pushes" them onto the end of the array.

```.pop()``` is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element. Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.

```javascript
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
```

```.shift()``` function removes the first item from an Array. We can also store the "shifted" variable, just like with pop().

```.unshift()``` works exactly like ```.push()```, but instead of adding the element at the end of the array, ```unshift()``` adds the element at the beginning of the array.

<a name="scope-functions"></a>
### ___Global Scope and Functions___

#### Scope

Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var.

Variables which are declared within a function, as well as the function parameters have local scope. It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

#### Undefined Value returned from a Function

A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

```javascript
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
var returnedValue = addSum(3); // sum will be modified but returned value is undefined
```

When storing values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable. Assume we have pre-defined a function sum which adds two numbers together, then:
```
ourSum = sum(5, 12);
```
will call ```sum``` function, which returns a value of 17 and assigns it to ```ourSum``` variable.

#### Stand in Line Excersise

In Computer Science a queue is an abstract Data Structure where items are kept in order.

Exercise:
Write a function nextInLine which takes an array (arr) and a number (item) as arguments.


```javascript
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  return arr.shift();  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
```

#### Type conversion

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

```
3 == '3' // returns true because JavaScript performs type conversion from string to number
3 === '3' // returns false because the types are different and type conversion is not performed
```
In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:
```
typeof 3 // returns 'number'
typeof '3' // returns 'string'
```

<a data="switch-statement"></a>
### ___Switch Statement___

In a ```switch``` statement you may not be able to specify all possible values as ```case``` statements. Instead, you can add the ```default``` statement which will be executed if no matching ```case``` statements are found. 

If you have multiple inputs with the same output, you can represent them in a switch statement like this:
```javascript
switch(val) {
case 1:
case 2:
case 3:
  result = "1, 2, or 3";
  break;
case 4:
  result = "4 alone";
}
```

<a data="returning-boolean-values-from-functions"></a>
### ___Returning Boolean Values from Functions___

Sometimes people use an if/else statement to do a comparison, like this:
```javascript
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```
But there's a better way to do this. Since ```===``` returns true or false, we can return the result of the comparison:
```javascript
function isEqual(a,b) {
  return a === b;
}
```
Another example. Before:
```javascript
function isLess(a, b) {
  // Fix this code

  if (a < b) {
    return true;
  } else {
    return false;
  }
}

// Change these values to test
isLess(10, 15);
```
After:
```javascript
function isLess(a, b) {
  // Fix this code
  return a <= b;
}

// Change these values to test
isLess(10, 15);
```
#### Counting Cards Excersise

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

| Count Change | Cards |
| -------------|------------- |
| +1           | 2,3,4,5,6  |
| 0            | 7,8,9 |
| -1           | 10, 'J', 'Q', 'K', 'A' |


Write a card counting function. It will receive a ```card``` parameter, which can be a number or a string, and increment or decrement the global ```count``` variable according to the card's value (see table). The function will then return a string with the current count and the string ```Bet``` if the count is positive, or ```Hold``` if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Output:
```
-3 Hold
5 Bet
```
Before:
```javascript
var count = 0;

function cc(card) {
  // Only change code below this line
  
  
  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
```
After:
```javascript
var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--
      break;
  }
  if(count > 0){
    return count + " Bet";
  } 
  return count + " Hold";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
```
<a data="objects"></a>
### ___Objects___

Objects are similar to ```arrays```, except that instead of using indexes to access and modify their data, you access the data in objects through what are called ```properties```. Properties don't always need to be strings, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:
```javascript
var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```
However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

There are two ways to access the properties of an object: dot notation (```.```) and bracket notation (```[]```), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time. Here is a sample of using dot notation (.) to read an object's property:
```javascript
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2
```
If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
```javascript
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"]; // USS Enterprise
```
Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table. Here is an example of using a variable to access a property:
```javascript
var dogs = {
  Fido: "Mutt", Hunter: "Doberman", Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
```
Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:
```javascript
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
```
Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.

Exercise:
Use the ```playerNumber``` variable to look up player ```16``` in ```testObj``` using bracket notation. Then assign that name to the ```player``` variable.

Before:
```JavaScript
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber;       // Change this Line
var player = testObj;   // Change this Line
```

After:
```JavaScript
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line
```

You can use either dot or bracket notation to update an object's properties at any time just like you would update any other variable.

For example, let's look at ```ourDog```:
```javascript
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```
Let's change his name to "Happy Camper".
```javascript
ourDog.name = "Happy Camper";
```
or
```javascript
ourDog["name"] = "Happy Camper";
```
Now when we evaluate ```ourDog.name```, instead of getting "Camper", we'll get his new name, "Happy Camper".

You can add new properties to existing JavaScript objects the same way you would modify them. Here's how we would add a ```"bark"``` property to ```ourDog```:
```javascript
ourDog.bark = "bow-wow";
```
or
```
ourDog["bark"] = "bow-wow";
```
Now when we evaluate ```ourDog.bark```, we'll get his bark, "bow-wow".

We can also delete properties from objects like this:
```javascript
delete ourDog.bark;
```

<a data="using-objects-for-lookups"></a>
###  ___Using Objects for Lookups___

Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a ```switch``` statement or an ```if/else``` chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:
```javascript
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"
```

Exercise: Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

Before:
```javascript
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha": 
      result = "Adams";
      break;
    case "bravo": 
      result = "Boston";
      break;
    case "charlie": 
      result = "Chicago";
      break;
    case "delta": 
      result = "Denver";
      break;
    case "echo": 
      result = "Easy";
      break;
    case "foxtrot": 
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
```
After:
```javascript
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line

  var lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot" : "Frank"
  }

  result = lookup[val];

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
```

<a data="testing-objects-for-properties"></a>
### ___Testing Objects for Properties___

Sometimes it is useful to check if the property of a given object exists or not. We can use the ```.hasOwnProperty(propname)``` method of objects to determine if that object has the given property name. ```.hasOwnProperty()``` returns true or false if the property is found or not. Example:
```javascript
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty("middle"); // false
```

<a data="manipulating-complex-objects"></a>
### ___Manipulating Complex Objects___

A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects. Here's an example of a complex data structure:

```javascript
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
```
This is an array which contains one object inside. It also has a nested "formats" array. Objects hold data in a property, which has a key-value format. In the example above, ```"artist": "Daft Punk"``` is a property that has a key of ```"artist"``` and a value of ```"Daft Punk"```. JavaScript Object Notation or JSON is a related data interchange format used to store data.
```javascript
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
```
Exercise: Add a new album to the ```myMusic``` array. Add ```artist``` and ```title``` strings, ```release_year``` number, and a ```formats``` array of strings.

Before:
```javascript
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  // Add record here
  
];
```
After:
```javascript
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  // Add record here
  {
    "artist": "Dolly Parton",
    "title": "Jolene",
    "release_year": 1982,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ]
  }
];
```
<a data="accessing-nested-objects"></a>
### ___Accessing Nested Objects___

The sub-properties of objects can be accessed by chaining together the dot or bracket notation. Here is a nested object:
```javascript
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2; // "secrets"
ourStorage.desk.drawer; // "stapler"
```
<a data="accessing-nested-arrays"></a>
### ___Accessing Nested Arrays___

As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays. Here is an example of how to access a nested array:

```javascript
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"
```

#### Record Collection Example

Each album has several properties and a unique id number as its key. Not all albums have complete information. Write a function which takes an album's ```id``` (like ```2548```), a property ```prop``` (like ```"artist"``` or ```"tracks"```), and a value (like ```"Addicted to Love"```) to modify the data in this collection. If ```prop``` isn't ```"tracks"``` and ```value``` isn't empty (```""```), update or set the ```value``` for that record album's property. Your function must always return the entire collection object.

If ```prop``` is ```"tracks"``` but the album doesn't have a ```"tracks"``` property, create an empty array before adding the new value to the album's corresponding property.

If ```prop``` is ```"tracks"``` and value isn't empty (``""```), push the value onto the end of the album's existing ```tracks``` array.

If value is empty (```""```), delete the given prop property from the album.

Before:
```javascript
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
  
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
```

After:

```javascript
// Only change code below this line
function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
   if(collection[id][prop]) {
    collection[id][prop].push(value);
   }
   else {
    collection[id][prop]=[value];
   }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}
```
<a data="loops"></a>
### ___Loops___

The most popular loops are the ```while``` and ```for``` loops. For loops don't have to iterate one at a time. By changing our ```final-expression```, we can count by even numbers.

```javascript
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

```ourArray``` will now contain ```[0,2,4,6,8]```.

A common task in JavaScript is to iterate through the contents of an array.

```javascript
var arr = [10,9,8,7,6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```
You can use nested for loops if you have multi-dimensional arrays.
```javascript
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```
Excersise: Modify function ```multiplyAll``` so that it multiplies the ```product``` variable by each number in the sub-arrays of ```arr```.

Before:
```javascript
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```
After:
```javascript
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i=0; i < arr.length; i++){
    for (var j=0; j < arr[i].length; j++){
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
```

<a data="do-while-loops"></a>
### ___Do While Loops___

A "```do...while```" loop will first "```do```" one pass of the code inside the loop no matter what, and then it runs "```while```" a specified condition is true and stops once that condition is no longer true.

```javascript
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```
What makes the ```do...while``` different from other loops is how it behaves when the condition fails on the first check. A ````do...while``` loop ensures that the code inside the loop will run at least once.

#### Profile Lookup Exercise

Update the ```lookupProfile``` function so it checks that ```name``` is an actual contact's firstName and the given property (```prop```) is a property of that contact. If both are true, then return the "value" of that property. If ```name``` does not correspond to any contacts then return ```"No such contact"```. If ```prop``` does not correspond to any valid properties of a contact found to match name then return ```"No such property"```.

Before:
```javascript
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
```

After:
```javascript
function lookUpProfile(name, prop){
// Only change code below this line
  var i;
  for (var i = 0; i < contacts.length; i++){
      if (contacts[i].firstName === name) {
          if (contacts[i].hasOwnProperty(prop)) {
              return contacts[i][prop];
          } else {
              return "No such property";
          }
      }
  }
return "No such contact";
```
<a data="math-function"></a>
### ___Math Function___

JavaScript has a ```Math.random()``` function that generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive). Thus ```Math.random()``` can return a 0 but never quite return a 1.

Exercise: Change randomFraction to return a random number instead of returning 0.

Before:
```javascript
function randomFraction() {

  // Only change code below this line.

  return 0;

  // Only change code above this line.
}
```
After:
```javascript
function randomFraction() {

  // Only change code below this line.

  return Math.random();

  // Only change code above this line.
}
```

```Math.floor()``` to round the number down to its nearest whole number. We can generate a random number that falls within a range of two specific numbers. To do this, we'll define a minimum number ```min``` and a maximum number ```max```. This is done with the following code:
```javascript
Math.floor(Math.random() * (max - min + 1)) + min
```

<a data="ParseInt"></a>
### ___ParseInt___

The ```parseInt()``` function parses a string and returns an integer. Here's an example:
```javascript
var a = parseInt("007");
```

The above function converts the string "007" to an integer 7. If the first character in the string can't be converted into a number, then it returns ```NaN```.

The ```parseInt``` function can take a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36. And here's an example:
```javascript
var a = parseInt("11", 2);
```

The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3.

<a data="conditional-ternary-operator"></a>
### ___Conditional Ternary Operator___

The syntax is:
```
condition ? statement-if-true : statement-if-false;
```
The following function uses an if-else statement to check a condition:
```javascript
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

This can be re-written using the conditional operator:
```javascript
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
```

You can also chain ternary operators together to check for multiple conditions. 

```javascript
The following function uses if, else if, and else statements to check multiple conditions:

function findGreaterOrEqual(a, b) {
  if(a === b) {
    return "a and b are equal";
  }
  else if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```
The above function can be re-written using multiple conditional operators:

```javascript
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

