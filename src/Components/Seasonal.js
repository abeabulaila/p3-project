import React from "react";
import Stars from "./Stars";
// import freakyCat from './Gifs/freakycat.gif'

function Seasonal() {
    return (
        <div>
            <h1>Seasonallll</h1>
            <div>
                <h5>Embed playlist here</h5>
                <Stars />
            </div>
            <div className="bio-text">
                <p>Definition of Seasonal - </p>
            </div>
            {/* <img src={freakyCat} alt="freakin" /> */}
        </div>
    )
}

export default Seasonal;