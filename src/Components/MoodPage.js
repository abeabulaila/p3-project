import React from "react";
import { Container, Row, Button, Column } from 'react-bootstrap';


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
                <Container >
                    <Row className="mood-row" lg={2}>
                    <Button  onClick={handleSad} >Sad</Button>                
                    <Button onClick={handleHappy} >Happy</Button> 
                    <Button onClick={handleAngry} >Angry</Button>                  
                    <Button onClick={handleChill}>Chill</Button>
                    <Button onClick={handleFreaky} >Freaky</Button>
                    <Button onClick={handleFreaky} >Freaky</Button>
                    </Row>
                </Container>
            </div>
            
            {/* <div className="text-container">
            <h2 className='sad-text'>When you real sad</h2>
            <h2 className='hide'>When you real happy</h2>
            <h2 className='hide'>When you real angry</h2>
            <h2 className='hide'>When you real chill</h2>
            <h2 className='hide'>When you real freaky</h2>
            <h2 className='hide'>When you real freaky</h2>
            </div> */}

        </div>

    )
}

export default MoodPage;