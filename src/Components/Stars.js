import React, { useState, useEffect } from "react";
import { FaStar } from 'react-icons/fa';

function Stars() {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    const [playlist, setPlaylist] = useState({artist: {}})
    useEffect(() => {
        fetch("http://localhost:9292/sad")
          .then((r) => r.json())
          .then((data) => {
            //   console.log(data)
              setPlaylist(data[0]);
          });
      }, []);
      console.log(playlist)

      
      
      
      return (
          <div className="star-div">
                
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
                function handleUpdateRating() {
                  // add fetch request
                  fetch(`http://localhost:9292/sad/${playlist.id}`, {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      rating: rating,
                    }),
                  })
                    .then((r) => r.json())
                    .then((updatedItem) => console.log(updatedItem));
                }
            
                return <label>
                    <input
                        type='radio'
                        name="rating"
                        value={ratingValue}
                        onClick={() => {
                            setRating(ratingValue);
                            handleUpdateRating()
                          }}

                    />
                    <FaStar
                        className="star"
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        size={30}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                    />
                </label>
            })}
            <h5 className="star-text">{rating} out of 5!</h5>
        </div>
    )
}

export default Stars