import React from "react";
import Stars from "./Stars";
import sadCat from './Gifs/sadcat.gif'
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

function Sad() {

    const [playlist, setPlaylist] = useState({artist:{}})

    function handleDeleteClick() {
        fetch(`http://localhost:9292/playlist/${playlist.id}`, {
            method: "DELETE"
          })
            .then((r) => r.json())
            .then((updatedItem) => console.log(updatedItem));
        }
      
    
    // fetch request to handle loading the playlist and music information
    useEffect(() => {
        fetch(`http://localhost:9292/playlist/Sad`)
          .then((r) => r.json())
          .then((data) => {
                // declare a variable randomPlaylist and randomly select an element from the server
                let randomPlaylist = data[Math.floor(Math.random() * data.length)];
                setPlaylist(randomPlaylist);
          });
      }, []);

    return (
        <div>
            <h1>I criiii</h1>
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
            {/* <div>
                <button onClick={handleDeleteClick}>Delete Bio, I Don't Want to Learn Anymore</button>
            </div> */}
            <div>
                <p className="artist-links"> <a className="anchor" href='https://www.discogs.com/artist/6378-Gorillaz' target="blank"> Discogs</a> </p>
                <p className="artist-links"><a className="anchor" href="https://en.wikipedia.org/wiki/Gorillaz" target="blank">Wikipedia</a></p>
            </div>
            <img className="cat-pics" src={sadCat} alt="sad meowwww" />
        </div>
    )
}

export default Sad;