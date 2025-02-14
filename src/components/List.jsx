import { useState, useReducer } from "react";
import Todo from "./Todo";
import { ACTIONS, todoReducer } from "../utilities/todoReduser"

function List() {
    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const todoList = state.map((todo, index) => {
        return (
            <Todo key={index} text={todo.txt} finished={todo.finished} dispatch={dispatch} />
        );
    });

    let finished = false;
    console.log("Add "+text);

    return (
        <div>
            <h1>ToDo List</h1>

            <input type="text" onChange={handleChange} />
            <button onClick={() => {
                dispatch({ type: ACTIONS.add, payload: { text, finished } });
            }}> Add </button>


            {todoList}

        </div>
    )
}

const initialState = [
    { txt: "Todo 1", finished: false },
    { txt: "Todo 2", finished: false },

];


export default List;