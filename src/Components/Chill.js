import React from "react";
import Stars from "./Stars";
import chillCat from './Gifs/chillcat.gif'

function Chill(){

   
    return (
        <div>
            <h1>Chill Out</h1>
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLI5YP4PZ67tJ-VnmVZBbnTzSo47I73jKg&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Stars />
        </div>
        <img src={chillCat} />
        </div>
    )
}

export default Chill;