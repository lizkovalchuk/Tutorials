# Angular & NodeJS - The MEAN Stack Guide [2020 Edition]

## Adding the Express Server - Section 3

1. [ Initial Set-up ](#initial-set-up)
2. [ Request and Response Objects ](#request-and-response-objects)

<a data="initial-set-up"></a>

### **_Initial Set-up_**

Install Express with the following command:

```
npm install --save express
```

Once you've installed express, the most simple response is:

```js
const express = require('express');

// Init express

const app = express();

// Create your route endpoints/route handlers

app.get('/', (req, res) => {
  res.send('Hello World');
})

// Listen on a port

app.listen(5000);
```

- Within the route, you can do just about anything. Here are some examples:
    - Fetch data from a database.
    - Load pages
    - Return JSON

<a data="request-and-response-objects"></a>

### **_Request and Response Objects_**

The request and response objects are key concept to understand for Express. They are the 2 parameters of the callback function as seen below:

```js
app.get('/', (req, res) => {
  res.send('Hello World');
})
```

##### Request Object

- The request object represents the HTTP request properties for things like:
  - URL parameters  
  - query strings
  - any data that's sent within the body
  - the HTTP headers

##### Response Object

- The response object represents the HTTP response which can:
  - Return JSON data
  - Return a template
  - Perform a redirection

##### Middleware

- Middleware functions are functions that have access to the request and response objects. 
- It can make changes to the request and response objects. 
- It can also end the respnose cycle.
- Middleware functions always require a next function that calls the next stack.

