import React from "react";
import Stars from "./Stars";
import sadCat from './Gifs/sadcat.gif'
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

function Sad() {

    const [playlist, setPlaylist] = useState({artist:{}})
    useEffect(() => {
        fetch("http://localhost:9292/sad")
            .then((r) => r.json())
            .then((data) => {
                setPlaylist(data[0]);
            });
    }, []);
    // console.log(playlist.artist.bio)

    return (
        <div>
            <h1>I criiii</h1>
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
            <div>
                <p className="artist-links"> <a className="anchor" href='https://www.discogs.com/artist/6378-Gorillaz' target="blank"> Discogs</a> </p>
                <p className="artist-links"><a className="anchor" href="https://en.wikipedia.org/wiki/Gorillaz" target="blank">Wikipedia</a></p>
            </div>
            <img className="cat-pics" src={sadCat} alt="sad meowwww" />
        </div>
    )
}

export default Sad;