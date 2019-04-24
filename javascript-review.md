# JavaScript Review
## Free Code Camp Intro to JavaScript Tutorial 4/22/2019

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
    } 
    if (i % 3 !== 0 && i % 5 !== 0){
        console.log(i)
    }
}
```

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

####Find the Length

You can find the length of a String value by writing .length after the string variable or string literal.
	
#### Bracket Notation

Bracket notation is a way to get a character at a specific index within a string. For example, the character at index 0 in the word "Charles" is "C". So if ```var firstName = "Charles"```, you can get the value of the first letter of the string by using ```firstName[0]```.

In order to get the last letter of a string, you can subtract one from the string's length.

For example, if ```var firstName = "Charles"```, you can get the value of the last letter of the string by using ```firstName[firstName.length - 1]```.
	
You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character. For example, you can get the value of the third-to-last letter of the ```var firstName = "Charles"``` string by using ```firstName[firstName.length - 3]```.

#### Arrays

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

#### Manipulating Arrays

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

#### Global Scope and Functions

##### Scope

Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var.

Variables which are declared within a function, as well as the function parameters have local scope. It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

##### Undefined Value returned from a Function

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

#### Switch Statement

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

#### Returning Boolean Values from Functions

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
#### Objects

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

####  Using Objects for Lookups

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

#### Testing Objects for Properties

Sometimes it is useful to check if the property of a given object exists or not. We can use the ```.hasOwnProperty(propname)``` method of objects to determine if that object has the given property name. ```.hasOwnProperty()``` returns true or false if the property is found or not. Example:
```javascript
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty("middle"); // false
```

#### Manipulating Complex Objects

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
#### Accessing Nested Objects

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

#### Accessing Nested Arrays

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

#### Loops

For loops don't have to iterate one at a time. By changing our ```final-expression```, we can count by even numbers.

```javascript
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

```ourArray``` will now contain ```[0,2,4,6,8]```.


