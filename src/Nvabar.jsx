import React from 'react'
import './Navbar.css'
import credlogo from './credlogo.PNG'
const Nvabar = () => {
  return (
      <div>
          <div className="Navbar">
        <img src={credlogo} alt=""/>
        <div className="Navbarright">
            <h3>credit score check</h3>
            <h3>CRED pay</h3>
        </div>
    </div>
    <div className="Navbarbottom">
        <h1>rewards for paying
           </h1><h1>credit card bills.</h1>
        <h2>join 9M+ members who win rewards and cashbacks everyday</h2>
        <button>Download CRED</button>
    </div>
    </div>
  )
}

export default Nvabar