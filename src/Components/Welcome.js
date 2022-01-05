import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

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
                <Button  variant='primary' onClick={handleClick}> Click to Enter! </Button>
                <h5>Put app logo or image here...</h5>
            </div>
            <div>
                <h1>Song of The Day!</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GVj4v-UCIQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Welcome;