import React from "react";
import Stars from "./Stars";
import happyCat from './Gifs/happycat.gif'
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

function Happy() {

    const [playlist, setPlaylist] = useState({artist:{}})
      useEffect(() => {
        fetch("http://localhost:9292/playlist/Happy")
          .then((r) => r.json())
          .then((data) => {
            let randomPlaylist = data[Math.floor(Math.random() * data.length)];
                setPlaylist(randomPlaylist);
          });
      }, []);
      console.log(playlist)


    return (
        <div>
            <h1>Don't Worry, Be Happy</h1>
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
                <p className="artist-links"> <a className="anchor" href='https://www.discogs.com/artist/348256-Punkin-Machine' target="blank"> Discogs</a> </p>
                <p className="artist-links"><a className="anchor" href="https://www.last.fm/music/Punkin'+Machine/+wiki" target="blank">Wiki</a></p>
            </div>
            <img className="cat-pics" src={happyCat} alt="meowwwwww" />
        </div>
    )
}

export default Happy;