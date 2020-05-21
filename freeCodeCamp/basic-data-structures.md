# Basic Data Structures
## Free Code Camp Intro to Basic Data Structures

1. [ JS Array Methods ](#JS-array-methods)
2. [ Spread Operator ](#spread-operator)
3. [ IndexOf ](#indexof)
4. [ For Loop ](#for-loop)

<a name="JS-array-methods"></a>

### ___JS Array Methods___


- ` push()` method adds elements to the end of an array.
- `unshift()` adds elements to the beginning.
- `pop()` removes an element from the end of an array.
- `shift()` removes an element from the beginning.
- `splice()` allows us remove any number of consecutive elements from anywhere in an array.
  - `splice()` can take up to 3 parameters.
  - The first two parameters of `splice()` are integers which represent indexes, or positions, of the array.
  - `splice()`'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete.
  - the third parameter, comprised of one or more element(s), to add to the array. The new items will be inserted at the index at which to begin deleting elements (therefore the index as indicated in the first parameter).
- `slice()` copies, or extracts, a given number of elements to a new array, leaving the array it is called upon untouched.
  - `slice()` takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction.

<a name="spread-operator"></a>

### ___Spread Operator___

ES6's new spread operator allows us to easily copy all of an array's elements with a simple and highly readable syntax. The spread syntax simply looks like this: `...`

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray
```

Here is an example: this `copyMachine` function takes `arr` (an array) and `num` (a number) as arguments. The function is supposed to return a new array made up of `num` copies of `arr`.

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
```

Another huge advantage of the spread operator, is the ability to combine arrays, or to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another.




<a name="indexof"></a>

### ___IndexOf___

`indexOf()` allows us to quickly and easily check for the presence of an element on an array. `indexOf()` takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

Here is example: `quickCheck` is a function that takes an array and an element as arguments. `quickCheck` uses `indexOf()` so that it returns `true` if the passed element exists in the array, and `false` if it does not.

```js
function quickCheck(arr, elem) {
  if(arr.indexOf(elem) === -1){
    return false
  } else {
    return true;
  };
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

<a name="for-loop"></a>

### ___For Loop___

`filteredArray` takes an `arr`, a nested array, and `elem` as arguments, and returns a new array. `elem` represents an element that may or may not be present on one or more of the arrays nested within `arr`. Return a filtered version of the passed array such that any array nested within `arr` containing `elem` has been removed.


#### Example 1: _Solution of `filteredArray` using `push`_

This solution utlizes logic that expresses:
- If `elem` is *not* present inside a nested array, add it to the new array.


```js
function filteredArray(arr, elem) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].indexOf(elem) == -1){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

#### Example 2: _Solution of `filteredArray` using `splice`_

This solution utlizes logic that expresses:
- If `elem` *is* present inside a nested array, remove it from the array using `splice`.
- This approach utilizes a counter to offset re-arranged indice due to `spice`

```js
function filteredArray(arr, elem) {
  let newArr = [...arr];
  let counter = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i].indexOf(elem) !== -1){
      newArr.splice(i - counter, 1);
      counter++;
    }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

Using a counter inside a for loop can be confusing. Here is a table that illustrates the values and their transformations happening in `filteredArray` as per example 2. For simplicities sake, image we are calling `filterdArray` to remove even numbers.

- Remove even numbers ( 2, 4 ) :

|Step |  arr            | newArr          | i   | counter | index_removed
|-----|-----------------|-----------------|-----|---------|---------------
|0    | [1, 2, 3, 4, 5] | [1, 2, 3, 4, 5] | N/A | 0       | N/A
|1    | [1, 2, 3, 4, 5] | [1, 2, 3, 4, 5] | 0   | 0       | N/A 
|2    | [1, 2, 3, 4, 5] | [1, 3, 4, 5 ]   | 1   | 0       | 1
|3    | [1, 2, 3, 4, 5] | [1, 3, 4, 5 ]   | 2   | 1       | N/A 
|4    | [1, 2, 3, 4, 5] | [1, 3, 5 ]      | 3   | 1       | 2
|5    | [1, 2, 3, 4, 5] | [1, 3, 5 ]      | 4   | 2       | N/A