import React from "react";

import Joke from "./Joke";
import jokesData from "./JokesData"

function JokeList() {

    const jokeComponents = jokesData.map(
        function (joke) {
            return (
                <Joke question={joke.question} answer={joke.answer} key={joke.id} />
            );
        }
    );

    const jokeComponetesArrow = jokesData.map(
        (joke) => <Joke question={joke.question} answer={joke.answer} key={joke.id} />
    );

    //Filtering
    const jokeComponetsFiltered =
        jokesData.filter(
            joke => joke.question == null
        ).map(
            (joke) => <Joke question={joke.question} answer={joke.answer} key={joke.id} />
        );

    return (
        <div>
            <h1>Jokes List</h1>
            {jokeComponents}
            <hr />
            {jokeComponetesArrow}
            <hr />
            {jokeComponetsFiltered}
        </div>
    );
}

export default JokeList