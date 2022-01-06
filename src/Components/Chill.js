import React from "react";
import Stars from "./Stars";
import chillCat from './Gifs/chillcat.gif'
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
function Chill() {

    const [playlist, setPlaylist] = useState({artist:{}})
    useEffect(() => {
        fetch("http://localhost:9292/chill")
            .then((r) => r.json())
            .then((data) => {
                //   console.log(data)
                setPlaylist(data[0]);
            });
    }, []);
    
    // console.log(playlist)

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
                <ReactPlayer url={playlist.url} controls={true} style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }} />
                <Stars />
            </div>
            <div className="bio-text">
                <p>{playlist.artist.bio}</p>
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