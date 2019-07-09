# React Front to Back

## Udemy React Tutorial Notes Section 9: Learning Redux - Part 1 Add and Delete Actions

1. [ From Hardcoded State to Using GET Request with axios ](#from-hardcoded-state-to-using-get-request-with-axios)

<a data="from-hardcoded-state-to-using-get-request-with-axios"></a>

### **From Hardcoded State to Using GET Request with axios**

1. In `reducers/contactReducer.js`, delete the hardcoded state.

```jsx

// Before

import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from '../actions/types'

const initialState = {
  contacts: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
      phone: '555-555-5555'
    },
    {
      id: 2,
      name: 'Karen Williams',
      email: 'karen@gmail.com',
      phone: '444-444-4444'
    },
    {
      id: 3,
      name: 'Henry Johnson',
      email: 'henry@gmail.com',
      phone: '333-333-333'
    }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    default:
      return state;
  }
}

// After

import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from '../actions/types'

const initialState = {
  contacts: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    default:
      return state;
  }
}
```

2. Once you've deleted the hardcoded state in our reducer, it's in our `contactAction.js` where we want to make our request. Specifically the `getContacts()` function. 
    - In order to make a request with `getContacts()`, we need to call dispatch.
    - When using `dispatch`, we need to replace `return` with `dispatch` and wrap the type object in a `dispatch` method.
    - Above `dispatch` is where to make our request to JSON placeholder. First we need to get the response and then we need to add that as a payload to get the contacts.
    - Import `axios` to make our request to JSON placeholder.
    - For this type of call, it's best to use `async await`. To do this, add `async` before `dispatch` in the second parameter set.
    - Create a variable called `res`, set it to `await`, and then use `axios` to get contacts from the JSON placeholder API.
    - We will be able to access the `axios` response data as it will be stored in our `res` variable. This data is accessible with `res.data`.
    - Add a payload after the `type` declaration and set it to `res.data`

```jsx

//Before

import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './types';

export const getContacts = () => {
  return {
    type: GET_CONTACTS
  }
}
export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id
  }
}
export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact
  }
}

//After

import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './types';
import axios from 'axios'

export const getContacts = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  })
}
export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id
  }
}
export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact
  }
}

```

3. Next we need to adjust `GET_CONTACTS` in `contactReducer.js` from just to returning the initial state to returning the initial state with the `payload`. (What were basically doing is returning the initial state _with_ the payload.)
    - In the return statement, add a comma after `...state` and set `contacts` equal to the action and its payload.


```jsx

// Before

import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from '../actions/types'

const initialState = {
  contacts: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    default:
      return state;
  }
}

// After

import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from '../actions/types'

const initialState = {
  contacts: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    default:
      return state;
  }
}

```


