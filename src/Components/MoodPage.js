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

    function handleSeasonal(e){
        e.preventDefault();
        navigate('/seasonal')
    }

    return (
        <div>
            <h1>What's Your Mood Today?</h1>
            <div>
                <Container >
                    <Row className="mood-row" lg={2}>
                    <Button className="mood-button" onClick={handleSad} >Sad</Button>                
                    <Button className="mood-button" onClick={handleHappy} >Happy</Button> 
                    <Button className="mood-button" onClick={handleAngry} >Angry</Button>                  
                    <Button className="mood-button" onClick={handleChill}>Chill</Button>
                    <Button className="mood-button" onClick={handleFreaky} >Freaky</Button>
                    <Button className="mood-button" onClick={handleSeasonal} >Seasonal</Button>
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