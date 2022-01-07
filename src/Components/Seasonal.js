import React from "react";
import Stars from "./Stars";
import ReactPlayer from "react-player";

// import freakyCat from './Gifs/freakycat.gif'
import { useState, useEffect } from "react";

function Seasonal() {

    const [playlist, setPlaylist] = useState({artist:{}})
      useEffect(() => {
        fetch("http://localhost:9292/playlist/Seasonal")
          .then((r) => r.json())
          .then((data) => {
            let randomPlaylist = data[Math.floor(Math.random() * data.length)];
            setPlaylist(randomPlaylist);
          });
      }, []);
      console.log(playlist)

    return (
        <div>
            <h1>Seasonallll</h1>
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
                <p className="artist-links"> <a className="anchor" href='https://www.discogs.com/artist/387397-Paysage-DHiver' target="blank"> Discogs</a> </p>
                <p className="artist-links"><a className="anchor" href="https://en.wikipedia.org/wiki/Paysage_d%27Hiver" target="blank">Wikipedia</a></p>
            </div>
            {/* <img className="cat-pics"  src={freakyCat} alt="freakin" /> */}
        </div>
    )
}

export default Seasonal;