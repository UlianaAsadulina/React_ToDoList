import { useState, useReducer } from "react";
import Todo from "./Todo";
import InputForm from "./InputForm"
import { ACTIONS, todoReducer } from "../utilities/todoReduser"

function List() {
    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }

    const [state, dispatch] = useReducer(todoReducer, initialState);

    let finished = false; //for new todo
    let editing = false; //for new todo 

    const todoList = state.map((todo, index) => {
        return (
            <div key={index} className="todo"> 
                {todo.editing ? <InputForm value={todo.txt} button="save" onClick={(text) => {
                                        console.log("nias:e.target.value" + text);   
                                        dispatch({ type: ACTIONS.update, payload: { text, finished, editing } });
                                        } }/>
                            : <Todo  text={todo.txt} finished={todo.finished} editing={todo.editing} dispatch={dispatch} />                  
                }
            </div>
        );
    });


    return (
        <div>
            <h1>ToDo List</h1>
            <div className="todo">
                <input type="text" value={text} onChange={handleChange} />
                <button onClick={() => {
                    dispatch({ type: ACTIONS.add, payload: { text, finished, editing }});
                    setText(""); 
                    }}
                > Add </button>
            </div>        

            {todoList}

        </div>
    )
}

const initialState = [
    { txt: "Todo 1", finished: false, editing: false },
    { txt: "Todo 2", finished: false, editing: false },

];


export default List;