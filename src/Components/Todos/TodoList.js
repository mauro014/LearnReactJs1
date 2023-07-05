import React from "react";

import TodoItem from "./TodoItem";
import todosData from "./TodosData";

function TodoList(){
    const todosItems = todosData.map(
        function(todo) {
            return <TodoItem item={todo} key={todo.id} />
        }
    )
    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            {todosItems}
        </div>
    );
};

export default TodoList;