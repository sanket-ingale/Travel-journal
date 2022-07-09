import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
        <img src={require("../images/earth-globe.png")} alt="globe" id='globe'></img>
        <h1>Sanket's travel journal</h1>
    </div>
  );
}
