import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodos, toggleTodos } from "../redux/todos";

function TodoList() {
    const todos = useSelector(({ todos }) => todos);
    const dispatch = useDispatch();

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            textDecoration: todo.done && "line-through",
                        }}
                        onClick={() => dispatch(toggleTodos(todo.id))}
                    >
                        {todo.text}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(removeTodos(todo.id));
                            }}
                        >
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
