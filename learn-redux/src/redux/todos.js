import {
    createReducer,
    createAction,
    nanoid,
    createSlice,
} from "@reduxjs/toolkit";

const initialState = [
    { id: 1, text: "Redux 기본 개념 배우기", done: true },
    { id: 2, text: "Redux tokit 배우기", done: false },
    { id: 3, text: "Redux 응용하기", done: false },
];
/*
// 상태관리
export const createTodos = createAction("todos/creates");
export const removeTodos = createAction("todos/remove");
export const toggleTodos = createAction("todos/toggle");

const todosReducer = createReducer(initialState, (builder) => {
    // immer라이브러리가 자동으로 적용되어 있다.=> 상태를 직접 변경 하던가 새로운 값을 return하던가 둘 중 하나
    builder
        .addCase(createTodos, (state, action) => {
            //push는 원본 변경
            state.push({ id: nanoid(), text: action.payload, done: false });
        })

        .addCase(removeTodos, (state, action) => {
            const id = action.payload;
            // filter는 원본 변경 안됨 => 새로운값 return
            return state.filter((todo) => todo.id !== id);
        })
        .addCase(toggleTodos, (state, action) => {
            //immer가 적용되서 가능
            const id = action.payload;
            const todo = state.find((todo) => todo.id === id);
            todo.done = !todo.done;
        });
});
*/

//액셕과 리듀서를 동시에 생성한다
const todosSlice = createSlice({
    name: "todos",

    //이름이 같아서 생략 :값 생략 가능
    initialState,

    reducers: {
        createTodos: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (text) => {
                return { payload: { id: nanoid, text, done: false } };
            },
        },
        removeTodos: (state, action) => {
            const id = action.payload;
            console.log(id);
            return state.filter((todo) => todo.id !== id);
        },
        toggleTodos: (state, action) => {
            const id = action.payload;
            const todo = state.find((todo) => todo.id === id);
            todo.done = !todo.done;
        },
    },
});

export const { createTodos, removeTodos, toggleTodos } = todosSlice.actions;

export default todosSlice.reducer;
