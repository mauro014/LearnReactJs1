import React from "react";

function myFunction(){
    console.log("I was clicked!!.");
};

function TodoItem(props){
    return (
        <div className="todo-item">
            <input 
                onChange={() => props.handleChange(props.item.id)} 
                type="checkbox" 
                checked={props.item.completed}></input>
            <p>{props.item.placeHolder}</p>
        </div>
    );
};

export default TodoItem ;