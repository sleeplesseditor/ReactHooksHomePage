import React, { useEffect, useState } from 'react';

export default function Joke() {
    const [joke, setJoke] = useState({});
    
    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/jokes/random')
            .then(response => response.json())
            .then(json => {
                console.log('joke json', json);
                setJoke(json);
            });
    }, []);

    const { setup, punchline } = joke;

    return (
        <div>
            <h3>Terrible Joke of the Session</h3>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
        </div>
    )
}