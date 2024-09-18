import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home.js';
import Navigation from './component/navbar/navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Selected from './component/Selected/Selected.js';
import Login from './component/login/login.js';
import Update from './component/login/Update.js';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Selected' element={<Selected/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Update/:id' element={<Update />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
