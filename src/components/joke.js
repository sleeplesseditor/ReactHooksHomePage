import React from 'react';
import { useFetch } from '../Hooks';

function Joke() {
    const { setup, punchline } = useFetch('https://official-joke-api.appspot.com/jokes/random', {})

    return (
        <div>
            <h2>Terrible Joke of the Session</h2>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
        </div>
    )
}

export default Joke;