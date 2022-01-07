import React from "react";
import Stars from "./Stars";
import chillCat from './Gifs/chillcat.gif'
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

function Chill() {

    const [playlist, setPlaylist] = useState({artist:{}})

    useEffect(() => {
        fetch("http://localhost:9292/playlist/Chill")
            .then((r) => r.json())
            .then((data) => {
                let randomPlaylist = data[Math.floor(Math.random() * data.length)];
                setPlaylist(randomPlaylist);
            });
    }, []);


    return (
        <div>
            <h1>Chill Out</h1>
            <div>
            </div>
            <div>
                <ReactPlayer url={playlist.url} width={800} height={600} playing={true} controls={true} style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }} />
                <Stars playlist={playlist}/>
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