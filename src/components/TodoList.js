import React from 'react'
import Todo from './Todo'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props=> {

    return(
        <div>
            {props.todo.map( task => (
                <Todo toggleItem={props.toggleItem} task ={task} key= {task.id} />
            ))}
        </div>
    )
}

export default TodoList;