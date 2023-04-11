import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counter from "./redux/counter";
import todosReducer from "./redux/todos";

// const store = createStore(counter);

const store = configureStore({ reducer: { counter, todos: todosReducer } });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
reportWebVitals();
