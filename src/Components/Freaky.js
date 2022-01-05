import React from "react";
import Stars from "./Stars";
import freakyCat from './Gifs/freakycat.gif'

function Freaky() {
    return (
        <div>
            <h1>Supafreak</h1>
            <div>
                <iframe width="600" height="600" src="https://www.youtube.com/embed/videoseries?list=PLI5YP4PZ67tJHyDX8m0zgU4u8a5BqvsF0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Stars />
            </div>
            <div className="bio-text">
                <p>Definition of Freaky - </p>
            </div>
            <img src={freakyCat} alt="freakin" />
        </div>
    )
}

export default Freaky;