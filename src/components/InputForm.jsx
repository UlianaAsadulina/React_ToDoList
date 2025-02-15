import { useState } from "react";
import { ACTIONS, todoReducer } from "../utilities/todoReduser"

export default function Form(props) {

    const [text, setText] = useState(props.value);

    function handleChange(e) {
        setText(e.target.value)
    }

    console.log("Form text: "+text);

    return <form>
        <input type="text" value={text} onChange={handleChange}/>
        <button onClick={() =>  {props.onClick(text); }}
        >{props.button}</button>
    </form>
}