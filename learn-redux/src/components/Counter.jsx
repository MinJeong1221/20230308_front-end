import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../redux/counter";

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(({ counter }) => counter); //stor의 여러 상태값중 선택.
    console.log(count);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increase(3))}>+1</button>
            <button onClick={() => dispatch(decrease(10))}>-1</button>
        </div>
    );
}

export default Counter;
