# React Front to Back

## Udemy React Tutorial Notes Section 8: Learning Redux - Part 3

1. [ Actions in Seperate File ](#actions-in-seperate-file)

<a data="actions-in-seperate-file"></a>

### **Actions in Seperate File**

Another approach that Brad suggests is to have an action file for each reducer instead of calling the dispatch right in the component that is using the reducer as seen in Figure 1 - Contacts.js. (Specifically `const mapDispatchToProps`).

##### Figure 1 - Contacts.js

```jsx
import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { GET_CONTACTS } from '../../actions/types';

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: propTypes.array.isRequired,
  getContacts: propTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
})

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch({ type: GET_CONTACTS })
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
```

The steps to refactor calling an action from a component to having the action in another file are:

1. The logic is that each reducer would have its own action file. So since we have a `contactReducer.js` file, we need to create a corresponding `contactActions.js` file in our `actions` folder. This results in the following file structure:

```
-src
  -actions
    -contactActions.js
    -types.js
  -components
  -reducers
    -contactReducers.js
    -index.js
```

2. Bring in your actions types as seen in Figure 1 - contactActions.js:

##### Figure 1 - contactActions.js

```jsx
import { GET_CONTACTS } from './types';
```

3. Next we need to export a function that will return a type to the reducer. In our case, we want to return the type of `GET_CONTACTS`. Figure 2 - contactActions.js shows a function that returns a type of `GET_CONTACTS`.

##### Figure 2 - contactActions.js

```jsx
import { GET_CONTACTS } from './types';

export const getContacts = () => {
  return {
    type: GET_CONTACTS
  }
}
```

4. After we've defined a `contactActions.js` actions file, we can refactor `Contacts.js` so that it's not importing our action type, but instead is importing `contactActions.js`.

##### Figure 3 - contactActions.js importing action type

```jsx
import { GET_CONTACTS } from '../../actions/types';
```

##### Figure 4 - contactActions.js importing contactActions.js

```jsx
import { getContacts } from '../../actions/contactActions'
```

5. Once we import `contactActions.js`, we will no longer need `mapDispatchToProps()` in `Contacts.js`. Instead we will just adjust the second parameter in `connect` of our export statement. For the second parameter of `connect`, we need to pass in an object with the action `getContacts`. 

##### Figure 5 - contactActions.js using mapDispatchToProps()

```jsx
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
```

##### Figure 6 - contactActions.js using getContacts from contactActions.js

```jsx
export default connect(mapStateToProps, {getContacts})(Contacts);
```


##### Figure 7 - complete contactActions.js 

```jsx
import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { getContacts } from '../../actions/contactActions'

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: propTypes.array.isRequired,
  getContacts: propTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
})

export default connect(mapStateToProps, {getContacts})(Contacts);
```