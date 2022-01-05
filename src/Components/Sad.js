import React from "react";
import Stars from "./Stars";
import sadCat from './Gifs/sadcat.gif'
function Sad() {
    return (
        <div>
            <h1>I criiiii</h1>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLI5YP4PZ67tLJyLabS1NrUypSoVhmAELu&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Stars />
            </div>
            <img src={sadCat} />
        </div>
    )
}

export default Sad;