import React from "react";

import TodoList from "./TodoList"
import ContactList from "./ContactList";

function MainContent(){
    return (
        <main>
            To run code you just need to go to your folder <i><b>npm start</b></i> in terminal. 
             <ContactList />
             <TodoList />
        </main>
    )
}

export default MainContent