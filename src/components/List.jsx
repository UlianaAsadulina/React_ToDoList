import { useState, useReducer } from "react";
import Todo from "./Todo";
import { ACTIONS, todoReducer } from "../utilities/todoReduser"

function List() {
    const [todoText, setTodoText] = useState("");

    function handleChange(event) {
        setTodoText(event.target.value);
    }

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const todoList = state.map((todo, index) => {
        return (
            <Todo key={index} text={todo.txt} dispatch={dispatch} />
        );
    });


    return (
        <div>
            <h1>ToDo List</h1>

            <input type="text" onChange={handleChange} />
            <button onClick={() => {
                dispatch({ type: ACTIONS.add, payload: { todoText } });
            }}> Add </button>


            {todoList}

        </div>
    )
}

const initialState = [
    { txt: "Todo 1" },
    { txt: "Todo 2" },

];


export default List;