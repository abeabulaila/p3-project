import React from "react";
import Stars from "./Stars";
import happyCat from './Gifs/happycat.gif'
function Happy() {
    return (
        <div>
            <h1>Don't Worry, Be Happy</h1>
            <div>
                <iframe width="600" height="600" src="https://www.youtube.com/embed/videoseries?list=PLI5YP4PZ67tIB_reEgvEQqmYZmWT9zK21&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Stars />
            </div>
            <div className="bio-text">
                <p>Definition of Happy - </p>
            </div>
            <img src={happyCat} alt="meowwwwww" />
        </div>
    )
}

export default Happy;