import React from "react";
import Stars from "./Stars";
import chillCat from './Gifs/chillcat.gif'
import { useState } from "react";

function Chill() {

    // function randomNum(min, max) {
    //     return Math.floor(Math.random())
    // }
    // const [playlist, setPlaylist] = useState[randomNum(1, 2)]

    // function chooseList(){
    //     setPlaylist(!playlist)
    //     if (playlist === 1) {
    //        setPlaylist(<h1>ChillOut</h1>)
    //     }
    //     else {
    //        setPlaylist(<h2>Dont Chill</h2>)
    //     }
    // }

    return (
        <div>
            <h1>Chill Out</h1>
            <div>
            </div>
            <div>
                <iframe width="600" height="600" src="https://www.youtube.com/embed/videoseries?list=PLI5YP4PZ67tJ-VnmVZBbnTzSo47I73jKg&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Stars />
            </div>
            <div className="bio-text">
                <p> Definition of Chill - adjective: having a laid-back or easy demeanor. This playlist effectively settles into this defintiion because of reasons and stuff, this is mostly just fluff so i can see how it all looks when its all filled out with proper information. GAS is a legend tho and a new album just came out and its been on repeat nonstop. The 90s legend continues to bring the BANGERS out here and I want more. Enjoy the playlist xoxoxox hope ya like it!
                </p>
            </div>
            <img src={chillCat} alt="chillin" />
        </div>
    )
}

export default Chill;