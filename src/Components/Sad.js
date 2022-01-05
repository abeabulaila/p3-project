import React from "react";
import Stars from "./Stars";
import sadCat from './Gifs/sadcat.gif'
function Sad() {
    return (
        <div>
            <h1>I criiiii</h1>
            <div>
                <iframe width="600" height="600" src="https://www.youtube.com/embed/videoseries?list=PLI5YP4PZ67tLJyLabS1NrUypSoVhmAELu&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Stars />
            </div>
            <div className="bio-text">
                <p>Definition of Sad - </p>
            </div>
            <div>
                <p className="artist-links"> <a className="anchor" href='https://www.discogs.com/artist/6378-Gorillaz' target="blank"> Discogs</a> </p>
                <p className="artist-links"><a className="anchor" href="https://en.wikipedia.org/wiki/Gorillaz" target="blank">Wikipedia</a></p>
            </div>
            <img className="cat-pics" src={sadCat} alt="sad meowwww" />
        </div>
    )
}

export default Sad;