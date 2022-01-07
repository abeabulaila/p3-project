import React from "react";
import Stars from "./Stars";
import angryCat from './Gifs/angrycat.gif'
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

function Angry() {
    const [angryPlaylist, setAngryPlaylist] = useState({artist:{}})


    useEffect(() => {
        fetch("http://localhost:9292/playlist/Angry")
          .then((r) => r.json())
          .then((data) => {
                // declare a variable randomPlaylist and randomly select an element from the server
                let randomPlaylist = data[Math.floor(Math.random() * data.length)];
                setAngryPlaylist(randomPlaylist);
          });
      }, []);

    return (
        <div>
            <h1>Be Worry, Don't Happy</h1>
            <div>
                <ReactPlayer url={angryPlaylist.url} width={800} height={600} playing={true} controls={true} style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }} />
                <Stars playlist={angryPlaylist}/>
            </div>
            <div className="bio-text">
            <p>{angryPlaylist.artist.bio}</p>
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