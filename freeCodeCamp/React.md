# React

## Free Code Camp Front End Libraries - React

1. [ JSX Elements ](#jsx-elements)
2. [ Comments ](#comments)
3. [ ReactDOM.render() ](<#reactdom.render()>)
4. [ Stateless Functional Component ](#stateless-functional-component)
5. [ Class Based Component ](#class-based-component)

<a name="jsx-elements"></a>

### **_JSX Elements_**

JavaScript called JSX that allows you to write HTML directly within JavaScript. You can always write JavaScript directly within JSX. To do this, you simply include the code you want to be treated as JavaScript within curly braces: `{ 'this is treated as JavaScript code' }`. Here is an example of a simple JSX element:

```jsx
const JSX = <h1>Hello JSX!</h1>;
```

A complex JSX element containe child elements. There must be one parent element that wraps all the other levels. Here is an example of valid JSX:

```jsx
const JSX = (
  <div>
    <h1>Header</h1>
    <p>Description</p>
    <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
  </div>
);
```

<a name="comments"></a>

### **_Comments_**

To put comments inside JSX, you use the syntax `{/* */}` to wrap around the comment text.

<a name="reactdom.render()"></a>

### **_ReactDOM.render()_**

With React, we can render JSX directly to the HTML DOM using React's rendering API known as ReactDOM. ReactDOM offers a simple method to render React elements to the DOM which looks like this: `ReactDOM.render(componentToRender, targetNode)`, where the first argument is the React element or component that you want to render, and the second argument is the DOM node that you want to render the component to.

As you would expect, `ReactDOM.render()` must be called after the JSX element declarations, just like how you must declare variables before using them.

**Exercise:**

Use the `ReactDOM.render()` method to render the component below. (You can pass defined JSX elements directly in as the first argument and use `document.getElementById()` to select the DOM node to render them to. There is a div with `id='challenge-node'` available).

Before:

```jsx
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
```

After:

```jsx
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line

ReactDOM.render(JSX, document.getElementById("challenge-node"));
```

<a name="stateless-functional-component"></a>

### **_Stateless Functional Component_**

There are two ways to create a React component. The first way is to use a JavaScript function. Defining a component in this way creates a stateless functional component. Think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data.

To create a component with a function, you simply write a JavaScript function that returns either JSX or null. One important thing to note is that React requires your function name to begin with a capital letter. Here's an example of a stateless functional component that assigns an HTML class in JSX:

```jsx
// After being transpiled, the <div> will have a CSS class of 'customClass'
const DemoComponent = function() {
  return <div className="customClass" />;
};
```

<a name="class-based-component"></a>

### **_Class Based Component_**

The other way to define a React component is with the ES6 `class` syntax. In the following example, `Kitten` extends `React.Component`:

```jsx
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Hi</h1>;
  }
}
```

The `Kitten` class has a `constructor` defined within it that calls `super()`. It uses `super()` to call the constructor of the parent class, in this case `React.Component`. The constructor is a special method used during the initialization of objects that are created with the `class` keyword. It is best practice to call a component's constructor with `super`, and pass `props` to both.
