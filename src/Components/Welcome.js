import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import note from './Gifs/note.png'

function Welcome() {
    let navigate = useNavigate();

    function handleClick(e) {
        e.preventDefault();
        navigate('/moodpage')
    }

    return (
        <div>
            <h1> Welcome to Muse Mood</h1>
            <div>
                <div>
                <img className="welcome" src={note} alt="beepboop" />           

                </div>
                <Button variant='primary' onClick={handleClick}> Click to Enter! </Button>
                 </div>

        </div>
    )
}

export default Welcome;