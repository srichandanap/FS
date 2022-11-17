import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import MapPage from "../src/views/mapPage/mapPage";
import NavBar from './components/navBar/navBar';



function App() {
  return (
    <>
 
      <MapPage />

      {/* <Routes>

        <Route path="/" element={<SignIn />} />
    

      </Routes> */}
    </>
  );
}

export default App;
