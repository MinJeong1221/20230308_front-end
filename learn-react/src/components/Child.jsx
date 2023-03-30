import { useContext } from "react";
import { CountContext, HandleContext } from "./GrandParent";

function Child() {
  const count = useContext(CountContext);
  const handleCount = useContext(HandleContext);
  return (
    <div
      style={{
        border: "3px solid yellow",
      }}
    >
      <h3>Child</h3>
      <p>count:{count}</p>
      <button onClick={handleCount}>+1</button>
    </div>
  );
}

export default Child;
