import React from "react";

import TodoList from "./TodoList"
import ContactList from "./ContactList";
import JokeList from "./JokeList";

function MainContent(){
    return (
        <main>
            <hr />
            To run code you just need to go to your folder <i><b>npm start</b></i> in terminal. 
            <br />
            1:49
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