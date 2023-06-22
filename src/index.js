import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Profile from "./Components/Profile/profile";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import Form from "./Components/Form/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/form",
        element: <Form />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate replace to={"/"} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
