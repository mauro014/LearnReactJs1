import React from "react";

function TodoItem(props){
    return (
        <div className="todo-item">
            <input 
                onChange={() => props.handleChange(props.item.id)} 
                type="checkbox" 
                checked={props.item.completed}></input>
            <p className={props.item.completed ? 'todo-completed' : ''}>{props.item.placeHolder}</p>
        </div>
    );
};

export default TodoItem ;