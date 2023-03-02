import React from 'react';
import Navbar from './elements/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './elements/pages/Home';
import Artist from './elements/pages/Artist';
import Videos from './elements/pages/Videos';
import Music from './elements/pages/Music';
import SignUp from './elements/pages/SignUp';





function App() {
  return (
    <>
    <Router>
     <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/> } />
        <Route path='artist' element={<Artist/>} />
        <Route path='videos' element={<Videos/>} />
        <Route path='music' element={<Music/>} />
        <Route path='sign-up' element={<SignUp/>} />
      </Routes>
     </Router>
  </>
  );
}

export default App;