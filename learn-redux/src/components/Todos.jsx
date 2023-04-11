import React from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

function Todos() {
    return (
        <div>
            <TodoHeader />
            <TodoInput />
            <TodoList />
        </div>
    );
}

export default Todos;
