# Easy Redux Demo

## What is Redux ??

Redux is a state management tool/library which is used to create and manage global state that is available to all elements/components across the application without the need of prop drilling + available to routed sibling elements

## How to use it in REACT

### Step 1: Install Packages

Install <code> react-redux </code> & &nbsp; <code>@reduxjs/toolkit</code> &nbsp; from npm

```
npm install --save @reduxjs/toolkit react-redux
```

### Step 2: Create Redux Store

Create one js file (e.g. Store/store.js) in which we use `configureStore` function from `@reduxjs/toolkit` which takes `reducers` object and creates store

- in reducers object key will be the name of state and will accessible to anywhere with this name only , and value will be the reducer for that state

Store/store.js

```javascript
import configureStore from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";

export default configureStore({
  reducers: {
    user: userReducer,
  },
});
```

### Step 3: Create State Slice

Create one js file (e.g. Store/user/userSlice.js) in which we will create userSlice using `createSlice` from `@reduxjs/toolkit`. slice in nothing but combination of reducer & actions to simplify state management

- `createSlice` will take one object as argument which will have

1. `name` - name of slice
2. `initialState` - initial state ( like in useState )
3. `reducers` - object in which key will be name of action & will be available with same name. and value will be fuction that takes `current state` & `action` as arguments and returns `upated state`

- `action` will have 2 things

1. `type`: type of action you have called.
2. `payload` : data that you have passed in action call

Store/user/userSlice.js

```javascript
import createSlice from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Darshan Patel",
    age: 21,
  },
  reducers: {
    updateName: (state, action) => {
      const { type, payload } = action;

      return { ...state, name: payload };
    },
    updateAge: (state, { payload }) => {
      return { ...state, age: payload };
    },
  },
});

export default userSlice.reducer;
export const { updateName, updateAge } = userSlice.actions;
```

```
Note: we will export slice.reducer as default so it acn be directly user in configureStore & will export all reducers from slice.actions to use them in any components using dispatch
```

### Step 4: Provide store at root level (i.e index.js)

will provide store in root level using `Provider` from 'react-redux' so it will availbale across app

index.js

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./Store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### Step 5: use store wherever you want using `useSelector` & `useDispatch` from `react-redux`

To Access user state

```javascript
import { useSelector } from "react-redux";

const user = useSelector((state) => state.user);

const { name, age } = user;
```

To use user reducers (update State)

```javascript
import { useDispatch } from "react-redux";
import { updateName, updateAge } from "path/to/userSlice";

const dispatch = useDispatch();

const updateUser = () => {
  dispatch(updateName("New Name"));
  dispatch(updateAge(23));
};
```
