import React from "react";
import { Button } from "react-bootstrap";
import CommentList from "./CommentList";
import { useState } from "react";

function Comments() 
{
    const [comment, setComment] = useState({
        name: "",
        message: ""
    })

    function manageComment(e) {
        const key = e.target.name;
        setComment({
            ...comment,
            [key]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Fired!!!!")

        let newComment = {
            ...comment,
        }

        setComment({
            name: "",
            message: "",
        })
          
        // fetch(`http://localhost:9292/${playlist.mood}/${comments}`, {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(newComment)
        // }).then(() => {
        //     console.log("new comment added")
        // })
        
    }


    return (
        <div>
            <h1>Leave a Comment Here!</h1>
            <div class="form-div">
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Create New Genre</label>
                        <input type="text"
                            name="genre"
                            className="form-control"
                            id="newgenre"
                            placeholder="Get Creative!"
                            value={comment.name}
                            onChange={manageComment}
                        />
                    </div>
                    <div class="form-group">
                        <label>Describe The Story Behind Your Genre</label>
                        <input type="text"
                            className="form-control"
                            name="story"
                            id="newstory"
                            placeholder="Tell a Story..."
                            value={comment.message}
                            onChange={manageComment}
                            
                        />
                        <button style={{marginTop: "1em"}}
                            type="submit"
                            class="btn btn-primary formbutton"
                        >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Comments;