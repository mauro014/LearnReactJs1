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

    return (
        <div>
            {jokeComponents}
            <hr />
            {jokeComponetesArrow}
        </div>
    );
}

export default JokeList