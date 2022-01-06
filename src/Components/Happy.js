import React from "react";
import Stars from "./Stars";
import happyCat from './Gifs/happycat.gif'
import { useState, useEffect } from "react";

function Happy() {

    const [playlist, setPlaylist] = useState({artist:{}})
      useEffect(() => {
        fetch("http://localhost:9292/happy")
          .then((r) => r.json())
          .then((data) => {
            //   console.log(data)
              setPlaylist(data[0]);
          });
      }, []);
      console.log(playlist)


    return (
        <div>
            <h1>Don't Worry, Be Happy</h1>
            <div>
                <iframe width="600" height="600" src="https://www.youtube.com/embed/videoseries?list=PLI5YP4PZ67tIB_reEgvEQqmYZmWT9zK21&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Stars />
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