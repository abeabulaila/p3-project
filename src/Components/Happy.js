import React from "react";
import Stars from "./Stars";
import happyCat from './Gifs/happycat.gif'
function Happy() {
    return (
        <div>
            <h1>Don't Worry, Be Happy</h1>
            <div>
                <h5>Embed playlist here</h5>
                <Stars />
            </div>
            <img src={happyCat} alt="meowwwwww" />
        </div>
    )
}

export default Happy;