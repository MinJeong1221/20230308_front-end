import React, { useState } from "react";
import { createTodos } from "../redux/todos";
import { useDispatch } from "react-redux";

function TodoInput() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    return (
        <div>
            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button onClick={() => dispatch(createTodos(text))}>등록</button>
        </div>
    );
}

export default TodoInput;
