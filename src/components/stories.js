import React from 'react';
import { useFetch } from '../Hooks';

export default function Stories() {
    const stories = useFetch('https://news-proxy-server.appspot.com/topstories', []);

    return (
        <div className="Stories">
            <h2>HackerNews Stories</h2>
            {
                stories.map(story => {
                    const { id, by, time, title, url, } = story;

                    return (
                        <div key={id}>
                            <a href={url}><strong>{title}</strong></a>
                            <div>{by} – {new Date(time * 1000).toLocaleString()}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}