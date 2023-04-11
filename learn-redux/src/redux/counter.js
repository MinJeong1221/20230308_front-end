// 'INCREMENT' => 1증가 'DECREMENT'=> 1 감소

// 액션 타입
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// 액션 생성 함수
export function increase(amount) {
    return {
        type: INCREMENT,
        amount: amount,
    };
}
export function decrease(amount) {
    return {
        type: DECREMENT,
        amount: amount,
    };
}

//amount 전달 받아서 amount만큼 줄이기
function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + action.amount;
        case DECREMENT:
            return state - action.amount;
        default:
            return state;
    }
}

export default counter;
