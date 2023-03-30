import { useState, useRef } from "react";
import Parent from "./Parent";
function GrandParent() {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount(count + 1);
  return (
    <div style={{ border: "3px solid black" }}>
      <h3>GrendParent</h3>
      <p>count:{count}</p>
      <button onClick={handleCount}>+1</button>
      {/* count, handleCount값을 Parent에 전달 */}
      <Parent count={count} handleCount={handleCount} />
    </div>
  );
}

export default GrandParent;
