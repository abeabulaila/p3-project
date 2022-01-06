import React from "react";
import Stars from "./Stars";
import angryCat from './Gifs/angrycat.gif'
import { useState, useEffect } from "react";
function Angry() {

    const [playlist, setPlaylist] = useState({artist:{}})
      useEffect(() => {
        fetch("http://localhost:9292/angry")
          .then((r) => r.json())
          .then((data) => {
            //   console.log(data)
              setPlaylist(data[0]);
          });
      }, []);
      console.log(playlist)


    return (
        <div>
            <h1>Be Worry, Don't Happy</h1>
            <div>
                <iframe width="600" height="600" src="https://www.youtube.com/embed/videoseries?list=PLI5YP4PZ67tLyMUKDwpxsHQ_1kXkNL4H8&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Stars />
            </div>
            <div className="bio-text">
            <p>{playlist.artist.bio}</p>
            </div>
            <div>
                <p className="artist-links"> <a className="anchor" href='https://www.discogs.com/artist/12212-Rage-Against-The-Machine' target="blank"> Discogs</a> </p>
                <p className="artist-links"><a className="anchor" href="https://en.wikipedia.org/wiki/Rage_Against_the_Machine" target="blank">Wikipedia</a></p>
            </div>
            <img className="cat-pics" src={angryCat} alt="anger" />
        </div>
    )
}

export default Angry;