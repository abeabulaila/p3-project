import React from "react";
import Stars from "./Stars";
// import freakyCat from './Gifs/freakycat.gif'

function Seasonal() {
    return (
        <div>
            <h1>Seasonallll</h1>
            <div>
                <iframe width="600" height="600" src="https://www.youtube.com/embed/videoseries?list=PLI5YP4PZ67tI0eU4fWbrlDljID2Be6TOz&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Stars />
            </div>
            <div className="bio-text">
                <p>Definition of Seasonal - </p>
            </div>
            <div>
                <p className="artist-links"> <a className="anchor" href='' target="blank"> Discogs</a> </p>
                <p className="artist-links"><a className="anchor" href="" target="blank">Wikipedia</a></p>
            </div>
            {/* <img className="cat-pics"  src={freakyCat} alt="freakin" /> */}
        </div>
    )
}

export default Seasonal;