import { createContext, useState } from "react";
import Parent from "./Parent";

export const CountContext = createContext("기본값");
export const HandleContext = createContext(null);

function GrandParent() {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount(count + 1);
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
Context API

  - 전역에 상태를 공유하고자할 때 사용한다.  
    1) createContext(기본값) : 컨텍스트를 생성한다.
      => <Context.Provider>를 통해서 값을 공유받고자하는 컴포넌트를 감싼다.
      => 공유하고자 하는 값을 value prop(value={})에 지정한다.
      => 기본값은 Context.Provider 밖에서 컨텍스트를 사용할 때 제공되는 값이다.

    2) useContext : 컨텍스트가 제공하는 값을 받는다.
      => 원하는 값을 제공하는 컨텍스트를 인자로 전달한다.

  - 여러개의 컨텍스트를 중첩해서 사용할 수 있다.
*/
