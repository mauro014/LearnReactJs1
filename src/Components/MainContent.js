import React from "react";

import TodoList from "./Todos/TodoList"
import ContactList from "./ContactList";
import JokeList from "./JokeList";
import ProductList from "./Products/ProductList";

function MainContent(){
    return (
        <main>
            <hr />
            To run code you just need to go to your folder <i><b>npm start</b></i> in terminal. 
            <br />
            2:07
            <hr />
            <ProductList />
            <hr />
            <JokeList />
            <hr />
            <ContactList />
            <hr />
            <TodoList />
            <hr />
        </main>
    )
}

export default MainContent