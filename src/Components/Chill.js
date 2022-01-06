import React from "react";
import Stars from "./Stars";
import chillCat from './Gifs/chillcat.gif'
import { useState, useEffect } from "react";

function Chill() {

    const [playlist, setPlaylist] = useState("")
    useEffect(() => {
      fetch("http://localhost:9292/chill")
        .then((r) => r.json())
        .then((data) => {
          //   console.log(data)
            setPlaylist(data[0]);
        });
    }, []);
    console.log(playlist)







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
                <p> Definition of Chill - adjective: having a laid-back or easy demeanor. This playlist effectively settles into this defintiion because of reasons and stuff, this is mostly just fluff so i can see how it all looks when its all filled out with proper information. GAS is a legend tho and a new album just came out and its been on repeat nonstop. The 90s legend continues to bring the BANGERS out here and I want more. Enjoy the playlist hope ya like it!
                </p>
            </div>
            <div >
                <p className="artist-links"> <a className="anchor" href='https://www.discogs.com/artist/4986-Gas' target="blank"> Discogs</a> </p>
                <p className="artist-links"><a className="anchor" href="https://en.wikipedia.org/wiki/Gas_(musician)" target="blank">Wikipedia</a></p>
            </div>
            <img className="cat-pics" src={chillCat} alt="chillin" />
        </div>
    )
}

export default Chill;