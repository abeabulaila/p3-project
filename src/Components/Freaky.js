import React from "react";
import Stars from "./Stars";
import freakyCat from'./Gifs/freakycat.gif'

function Freaky() {
    return (
        <div>
            <h1>Supafreak</h1>
            <div>
                <h5>Embed playlist here</h5>
                <Stars />
            </div>
            <img src={freakyCat} />
        </div>
    )
}

export default Freaky;