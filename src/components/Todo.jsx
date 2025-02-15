import { todoReducer, ACTIONS } from "../utilities/todoReduser";
import { useState } from "react";

function Todo ({text, finished, dispatch}) {
    // const [todoText, setText] = useState({txt: text})

    // function handleEdit(event) {
    //     setText(event.target.value)

    // }

    console.log("Text: "+text)
    console.log("Is finished: "+finished)
    // console.log(todoText.txt)

    return (
        <>
            <input type="checkbox" className="chBox" checked={finished} 
                onChange={() => {dispatch ( { type: ACTIONS.check, payload: { text, finished}})}} />
            <span style={finished ? { textDecoration: "line-through" } : {}}>
                {text}
            </span>          
            <button 
                disabled={finished}
                onClick={() => {
                dispatch({ type: ACTIONS.edit, payload: { text } });
            }}> edit </button>
            <button  
                disabled={!finished}
                onClick={() => {
                    dispatch({ type: ACTIONS.delete, payload: { text } }
                   
                 );
            }}> delete </button>
        </>
    )
}

export default Todo;