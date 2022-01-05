import React from "react";
import { Container, Row, Button } from 'react-bootstrap';


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
                <Container>
                    <Row sm ={2}>
                    <Button className="mood-button" onClick={handleSad} >Sad</Button>
                    <br></br>
                    <Button className="mood-button" onClick={handleHappy} >Happy</Button>
                    <br></br>
                    <Button className="mood-button" onClick={handleAngry} >Angry</Button>
                    <br></br>
                    <Button className="mood-button" onClick={handleChill}>Chill</Button>
                    <br></br>
                    <Button className="mood-button" onClick={handleFreaky} >Freaky</Button>
                    <Button className="mood-button" onClick={handleFreaky} >Freaky</Button>
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default MoodPage;