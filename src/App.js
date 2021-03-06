import React from 'react';
import Welcome from './Components/Welcome';
import MoodPage from './Components/MoodPage';
import Sad from './Components/Sad';
import Freaky from './Components/Freaky';
import Angry from './Components/Angry';
import Happy from './Components/Happy';
import Chill from './Components/Chill';
import Seasonal from './Components/Seasonal';
import Navbar from './Components/NavHeader';
import DailySong from './Components/DailySong';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
   <Router>
     <Navbar />
     <div className="App">
       <Routes>
         <Route path="/" element={<Welcome />} />
         <Route path="/moodpage" element={<MoodPage />} />
         <Route path="/chill" element={<Chill  />} />
         <Route path="/sad" element={<Sad /> } />
         <Route path="/happy" element={<Happy />} />
         <Route path="/angry" element={<Angry />} />
         <Route path="/freaky" element={<Freaky />} />
         <Route path="/seasonal" element={<Seasonal />} />
         <Route path="/dailysong" element={<DailySong />} />
       </Routes>
     </div>
   </Router> 
  )
}

export default App;
