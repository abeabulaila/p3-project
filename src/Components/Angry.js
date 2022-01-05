import React from "react";
import Stars from "./Stars";
import angryCat from './Gifs/angrycat.gif'

function Angry() {
    return (
        <div>
            <h1>Be Worry, Don't Happy</h1>
            <div>
                <h5>Embed playlist here</h5>
                <Stars />
            </div>
            <img src={angryCat} />
        </div>
    )
}

export default Angry;