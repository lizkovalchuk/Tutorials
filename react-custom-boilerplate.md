# React Custom Boilerplate

## Build React Project cheatsheet

1. [ Inital Set-up ](#initial-set-up)
2. [ Must-have imports ](#must-have-imports)
3. [ File Structure ](#file-structure)

<a name="initial-set-up"></a>

### **_Inital Set-up_**

- In your terminal, open the directory where you want your new project to exist.
- Use the following command to create (bootstrap) your new project. The `my-app` of the command being the name of your new app.

```
npx create-react-app my-app
```

- Next clean up the following code:

| File      | Code Block                                                    |
| --------- | ------------------------------------------------------------- |
| `App.css` | delete all code                                               |
| `App.js`  | delete everything inside `<div className="App-header"></div>` |

delete the following files and remove any corresponding `import` statements.

| File        | Import Code |
| ----------- | ----------- |
| `logo.svg`  | `App.js`    |
| `index.css` | `index.js`  |

- Remember that auto-save in Visual Code is not ideal for React.

<a name="must-have-imports"></a>

### **_Must-have imports_**

Most web apps wil have more than one page, for that import `react-router-dom` with the following command:

```
npm i react-router-dom
```

Next you will need to import the following into `App.js`:

```jsx
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
```

However, GitHub pages works only if you use:

```jsx
import { HashRouter as Router, Route, Switch } from "react-router-dom";
```

To use React router, use the `<Router>` component to wrap `<Switch>` and `Route`. This example has a `<LandingPage>` component with the home path (`/`).

```jsx
import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
```





<a name="file-structure"></a>

### **_File Structure_**

Inside your `src` folder, create a components folder and group your components by feature or route .

```
common/
  Avatar.js
  Avatar.css
  APIUtils.js
  APIUtils.test.js
feed/
  index.js
  Feed.js
  Feed.css
  FeedStory.js
  FeedStory.test.js
  FeedAPI.js
profile/
  index.js
  Profile.js
  ProfileHeader.js
  ProfileHeader.css
  ProfileAPI.js
```
