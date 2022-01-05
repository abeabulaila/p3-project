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
                <Button variant='primary' onClick={handleClick}> Click to Enter! </Button>
                <h5>Put app logo or image here...</h5>
            </div>

        </div>
    )
}

export default Welcome;