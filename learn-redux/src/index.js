import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counter from "./redux/counter";
import todosReducer from "./redux/todos";
import moviesReducer from "./redux/movies";
import { movieApi } from "./api/movie";
import { getDefaultNormalizer } from "@testing-library/react";

// const store = createStore(counter);

const store = configureStore({
    reducer: {
        counter,
        todos: todosReducer,
        movies: moviesReducer,
        [movieApi.reducerPath]: movieApi.reducer,
    },
    // middleware: (getDefaultMiddleware)=>
    // getDefaultMiddleware().concat(movieApi,),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
reportWebVitals();
