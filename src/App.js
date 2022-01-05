import React from 'react';
import Welcome from './Components/Welcome';
import MoodPage from './Components/MoodPage';
import Sad from './Components/Sad';
import Freaky from './Components/Freaky';
import Angry from './Components/Angry';
import Happy from './Components/Happy';
import Chill from './Components/Chill';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css';

function App() {
  return (
   <Router>
     <div className="App">
       <Routes>
         <Route path="/" element={<Welcome />} />
         <Route path="/moodpage" element={<MoodPage useNavigate = {useNavigate} />} />
         <Route path="/chill" element={<Chill />} />
         <Route path="/sad" element={<Sad />} />
         <Route path="/happy" element={<Happy />} />
         <Route path="/angry" element={<Angry />} />
         <Route path="/freaky" element={<Freaky />} />
       </Routes>
     </div>
   </Router> 
  )
}

export default App;
