import React, { useEffect, useRef } from "react";

// src/components/TodoInput.jsx
function TodoInput({ createTodo, onChange }) {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log("TodoInput Render");
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={onChange} ref={inputRef} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default React.memo(TodoInput);
