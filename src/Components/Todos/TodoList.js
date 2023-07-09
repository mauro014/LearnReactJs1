import React from "react";

import TodoItem from "./TodoItem";
import todosData from "./TodosData";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(id) {
        // this.setState(prevState => {
        //     const updatedTodos = prevState.todos.map(todo => {
        //         if (todo.id === id) {
        //             todo.completed = !todo.completed
        //         }
        //         return todo
        //     })
        //     return {
        //         todos: updatedTodos
        //     }
        // }
        // )
        this.setState(
            function(prevState) {
                const updatedTodos = prevState.todos.map(
                    function (todo){
                        if(todo.id === id){
                            todo.completed = !todo.completed;
                        }
                        return todo;
                    }
                )
                return {
                    todos: updatedTodos
                }
            }
        )
    };

    render() {
        const todosItems = this.state.todos.map(
            item =>
                <TodoItem
                    item={item}
                    key={item.id}
                    handleChange={this.handleChange}
                />
        )
        return (
            <div className="todo-list">
                <h1>Todo List</h1>
                {todosItems}
            </div>
        );
    }
};

export default TodoList;