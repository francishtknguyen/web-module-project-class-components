import React from 'react'


const Todo = props => {

    const handleCLick = ()=> {
        props.toggleItem(props.task.id);
    }
    return(
        <div onClick={handleCLick} className={`item ${props.task.completed ? "completed" : ""}`}>
            <p>{props.task.task}</p>
        </div>
    )

}

export default Todo;