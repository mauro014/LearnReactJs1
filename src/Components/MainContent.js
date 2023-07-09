import React from "react";

import TodoList from "./Todos/TodoList"
import ContactList from "./ContactList";
import JokeList from "./JokeList";
import ProductList from "./Products/ProductList";
import StatePractice from "./StatesPractice/StatePractice";
import LoggedPractice from "./StatesPractice/LoggedPractice";
import Counter from "./StatesPractice/Counter";
import ConditionalLoading from "./ConditionalLoading/ConditionalLoading";

function MainContent(){
    return (
        <main>
            <hr />
            To run code you just need to go to your folder <i><b>npm start</b></i> in terminal. 
            <br />
            3:15:31
            <hr />
            <ConditionalLoading />
            <hr />
            <Counter />
            <hr />
            <LoggedPractice />
            <hr />
            <StatePractice />
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