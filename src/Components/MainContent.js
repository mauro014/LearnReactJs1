import React from "react";

import TodoList from "./Todos/TodoList"
import ContactList from "./ContactList";
import JokeList from "./JokeList";
import ProductList from "./Products/ProductList";
import StatePractice from "./StatesPractice/StatePractice";
import LoggedPractice from "./StatesPractice/LoggedPractice";
import Counter from "./StatesPractice/Counter";
import ConditionalLoading from "./ConditionalLoading/ConditionalLoading";
import LoggedInOutPractice from "./LoggedUser/LoggedInOutPractice";
import FetchingSW from "./FetchingSW/FetchingSW";
import FormsPart1 from "./Forms/FormsPart1";
import FormsPart2 from "./Forms/FormsPart2";
import FormsPart3 from "./Forms/FormsPart3/FormsPart3";
import MemeGenerator from "./MemeGenerator/MemeGenerator";

function MainContent(){
    return (
        <main>
            <hr />
            To run code you just need to go to your folder <i><b>npm start</b></i> in terminal. 
            <br />
            4:44:50
            <hr />
            <MemeGenerator />
            <hr />
            <FormsPart3 />
            <hr />
            <FormsPart2 />
            <hr />
            <FormsPart1 />
            <hr />
            <FetchingSW />
            <hr />
            <LoggedInOutPractice />
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