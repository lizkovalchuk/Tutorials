# React Front to Back

## Udemy React Tutorial Notes Section 9: Learning Redux - Part 3 Deploy React to Apache

1. [ Deploy to Apache ](#deploy-to-apache)
2. [ Uploading to Subdirectory ](#uploading-to-subdirectory)
3. [ Disabling Redux Dev Tools for Production ](#disabling-redux-dev-tools-fo-production)

<a data="deploy-to-apache"></a>

### **Deploy to Apache**


1. Check that the `"homepage"` value in your `package.json` file is set correctly.  
2. Run `npm run-script build` in your terminal. A `build` folder will be created as a result.
3. Open the build folder, and move all the contents in that folder to where it needs to be in either FileZilla or cpanel.

<a data="uploading-to-subdirectory"></a>

### **Uploading to Subdirectory**

In your `package.json`, make sure that your homepage is set correctly.
I had forgetten to update it from the GitHub pages to the new subdirectory I'm using.

```json
{
  "name": "contact-manager",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://lizk.ca/contact-manager",
  "dependencies": {
    "axios": "^0.18.0",
    "bootstrap": "^4.1.2",
    "classnames": "^2.2.6",
    "gh-pages": "^2.0.1",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-redux": "^7.1.0",
    "react-router-dom": "^5.0.0",
    "react-scripts": "3.0.0",
    "redux": "^4.0.1",
    "redux-thunk": "^2.3.0",
    "uuid": "^3.3.2"
  },
  "scripts": {
    "deploy": "npm run build&&gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

If you are updating your react project as a subdirectory, you also need to update the links in your header.
The header used to have `/` for the `home` pages, but the needed to be updated to the subdirectory path.

```jsx
<nav className="nav-bar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
  <div className="container w-75">
    <div className="row justify-content-between">
      <a href="/contact-manager" className="navbar-brand">
        {branding}
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/contact-manager" className="nav-link">
            <i className="fas fa-home" /> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact/add" className="nav-link">
            <i className="fas fa-plus" />
            Add
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <i className="fas fa-question" />
            About
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

<a data="disabling-redux-dev-tools-fo-production"></a>

### **Disabling Redux Dev Tools for Production**

A browser without the Redux DevTools Extension may produce an error if the Redux store is not properly created. There are a number of options to fix this problem. You can disable Redux Dev tools or alter the Redux Dev Tools extention. This [stackoverflow article](https://stackoverflow.com/questions/47484627/react-app-works-on-chrome-but-not-firefox) describes in detail how to solve the problem. For a quick solution, disable Redux Dev Tools.

```jsx

// Store.js

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

// const store = createStore(rootReducer, initialState, compose(
//   applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ));

const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(...middleware)
));

export default store;

```

