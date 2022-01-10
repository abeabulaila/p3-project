import React from 'react';

function DailySong() {

    return (
        <div>
            <h1> Song of the Day!</h1>
            <div>
            <iframe width="600" height="600" src="https://www.youtube.com/embed/-wPg1tNEWmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            <p className="bio-text">Here is a daily song that we like a lot because its a song and its good and its a song.</p>
        </div>
    )
}

export default DailySong;