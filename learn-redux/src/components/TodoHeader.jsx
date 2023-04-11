import React from "react";

const date = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
});

function TodoHeader() {
    return (
        <div>
            <h1>{date}</h1>
        </div>
    );
}

export default TodoHeader;
