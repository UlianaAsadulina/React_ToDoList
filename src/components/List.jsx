import { useState } from "react";
import Todo from "./Todo";

function List() {
    const [todoText, setTodoText] = useState("");

    function handleChange(event) {
        console.log(event.target.value);
        const newTodo = event.target.value;
        setTodoText(newTodo);

    }

    function handleAdd (event) {
        event.preventDefault()
        console.log(todoText);
        // Add new Todo on top

    }

    return (
        <div>
            <h1>ToDo List</h1>
            <form onSubmit={handleAdd} >
                <input type="text" onChange={handleChange}/>
                <input type="submit" value="add" />
            </form>
            <Todo text="Todo 1"/>
            <Todo text="Todo 2"/>
        </div>
    )
}

export default List;