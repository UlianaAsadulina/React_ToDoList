function Todo ({text}) {
    return (
        <div>
            <input type="checkbox" name="" id="" />
            <span>{text}</span>
            <input type="button" value="edit" />
            <input type="button" value="delete" />
        </div>
    )
}

export default Todo;