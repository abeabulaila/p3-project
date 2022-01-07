import React from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function MoodPage() {
    let navigate = useNavigate();

    // const [playlist, setPlaylist] = useState({artist: {}})
    // const [playlist, setPlaylist] = useState({artist: {}})
    // const [playlist, setPlaylist] = useState({artist: {}})
    // const [playlist, setPlaylist] = useState({artist: {}})
    // const [playlist, setPlaylist] = useState({artist: {}})
    // const [sadList, setSadList] = useState({artist: {}})

    function handleSad(e) {
        e.preventDefault();
        navigate('/sad')
    }

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

    function handleSeasonal(e) {
        e.preventDefault();
        navigate('/seasonal')
    }

    return (
        <div>
            <h1>What's Your Mood Today?</h1>
            <div className="container overflow-hidden">
                <div className="row gy-5">
                    <div className="col-6">
                    <Button className="mood-button" onClick={handleSad} >Sad</Button>                    
                    </div>
                      <div className="col-6">
                    <Button className="mood-button" onClick={handleHappy} >Happy</Button>
                    </div>
                    <div className="col-6">
                    <Button className="mood-button" onClick={handleAngry} >Angry</Button>
                    </div>
                    <div className="col-6">
                    <Button className="mood-button" onClick={handleChill}>Chill</Button>
                    </div>
                    <div className="col-6">
                    <Button className="mood-button" onClick={handleFreaky} >Freaky</Button>
                    </div>
                    <div className="col-6">
                    <Button className="mood-button" onClick={handleSeasonal} >Seasonal</Button>                    
                </div> 
                </div>
            </div>

            {/* <div classNameName="text-container">
            <h2 classNameName='hide'>When you real sad</h2>
            <h2 classNameName='hide'>When you real happy</h2>
            <h2 classNameName='hide'>When you real angry</h2>
            <h2 classNameName='hide'>When you real chill</h2>
            <h2 classNameName='hide'>When you real freaky</h2>
            <h2 classNameName='hide'>When you real freaky</h2>
            </div> */}

        </div>

    )
}

export default MoodPage;
