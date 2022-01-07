import React from "react";
import Stars from "./Stars";
// import freakyCat from './Gifs/freakycat.gif'
import { useState, useEffect } from "react";

function Seasonal() {

    // const [playlist, setPlaylist] = useState({artist:{}})
    //   useEffect(() => {
    //     fetch("http://localhost:9292/seasonal")
    //       .then((r) => r.json())
    //       .then((data) => {
    //         //   console.log(data)
    //           setPlaylist(data[0]);
    //       });
    //   }, []);
    //   console.log(playlist)

    return (
        <div>
            <h1>Seasonallll</h1>
            <div>
                <iframe width="600" height="600" src="https://www.youtube.com/embed/videoseries?list=PLI5YP4PZ67tI0eU4fWbrlDljID2Be6TOz&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Stars />
            </div>
            <div className="bio-text">
            {/* <p>{playlist.artist.bio}</p> */}
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