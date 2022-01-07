import React from "react";
import Stars from "./Stars";
import freakyCat from './Gifs/freakycat.gif'
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

function Freaky() {

    const [playlist, setPlaylist] = useState({artist:{}})
      useEffect(() => {
        fetch("http://localhost:9292/playlist/Freaky")
          .then((r) => r.json())
          .then((data) => {
            let randomPlaylist = data[Math.floor(Math.random() * data.length)];
                setPlaylist(randomPlaylist);
          });
      }, []);
      console.log(playlist)

    return (
        <div>
            <h1>Supafreak</h1>
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
            <div>
                <p className="artist-links"> <a className="anchor" href='https://www.discogs.com/release/703214-H%C3%A1t-V%E1%BB%9Bi-Qu%C3%AA-H%C6%B0%C6%A1ng-H%C3%A1t-V%E1%BB%9Bi-Qu%C3%AA-H%C6%B0%C6%A1ng' target="blank"> Discogs</a> </p>
                <p className="artist-links"><a className="anchor" href="https://en.wikipedia.org/wiki/Holger_Hiller" target="blank">Wikipedia</a></p>
            </div>
            <img className="cat-pics" src={freakyCat} alt="freakin" />
        </div>
    )
}

export default Freaky;