import { createContext, useCallback, useContext, useState } from "react";
import Parent from "./Parent";

export const CountContext = createContext("기본값");
export const HandleContext = createContext(null);

function GrandParent() {
  const [count, setCount] = useState(0);
  const handleCount = useCallback(() => setCount((c) => c + 1), []);
  return (
    // 값을 공유하는 방법=> 부모를 거치지 않고 바로 child에 전송
    <CountContext.Provider value={count}>
      <HandleContext.Provider value={handleCount}>
        <div style={{ border: "3px solid black" }}>
          <h3>GrendParent</h3>
          <p>count:{count}</p>
          <button onClick={handleCount}>+1</button>
          {/* count, handleCount값을 Parent에 전달 */}
          <Parent handleCount={handleCount} />
        </div>
      </HandleContext.Provider>
    </CountContext.Provider>
  );
}

export default GrandParent;

/*
  useCallback 등을 사용할때 함수형 업데이트를 사용하면 의존성을 제거할 수 있다.
    => 불필요한 제렌더링을 방지할 수 있다.
*/
