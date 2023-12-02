import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import {
  BrowserRouter as Router,Routes,Route,
} from "react-router-dom";
import Home from './Component/Home';
import { useState } from 'react';


function App() {
  {document.body.style.backgroundColor="rgba(25,25,25)"};
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

