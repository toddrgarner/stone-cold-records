import React from 'react';
import Navbar from './elements/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" exact element={<home/>} />
        <Route path="/videos" element={<videos/>} />
       <Route path="/music" element={<music/>} />
        <Route path="/sign-up" element={<signUp/>} />
      </Routes>
     </Router>
  </>
  );
}

export default App;
 