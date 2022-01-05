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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLI5YP4PZ67tJ-VnmVZBbnTzSo47I73jKg&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Stars />
            </div>
            <div className="bio-text">
                "put bio here"
            </div>
            <img src={chillCat} alt="chillin" />
        </div>
    )
}

export default Chill;