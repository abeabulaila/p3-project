import React from "react";
import Button from 'react-bootstrap/Button';


function MoodPage({ useNavigate }) {
    let navigate = useNavigate();

    function handleChill(e) {
        e.preventDefault();
        navigate('/chill')
    }

    function handleSad(e) {
        e.preventDefault();
        navigate('/sad')
    }

    function handleAngry(e) {
        e.preventDefault();
        navigate('/angry')
    }

    function handleHappy(e) {
        e.preventDefault();
        navigate('/happy')
    }

    function handleFreaky(e) {
        e.preventDefault();
        navigate('/freaky')
    }

    return (
        <div>
            <h1>What's Your Mood Today?</h1>
            <div>
                <Button onClick={handleSad} >Sad</Button>
                <br></br>
                <Button onClick={handleHappy} >Happy</Button>
                <br></br>
                <Button onClick={handleAngry} >Angry</Button>
                <br></br>
                <Button onClick={handleChill}>Chill</Button>
                <br></br>
                <Button onClick={handleFreaky} >Freaky</Button>
            </div>
        </div>

    )
}

export default MoodPage;