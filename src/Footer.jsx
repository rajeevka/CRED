import React from 'react'
import "./Footer.css"
import credlogo from './credlogo.PNG'
import credlogos from "./credlogoS.PNG";

const Footer = () => {
    return (
      <div className="Footer">
        <div className="one">
          <img src={credlogo} alt="" />
                <img src={credlogos} alt="" />
                
          <h4>complete security. no asterists</h4>
          <h5>CCRED Lorem ipsum dolor sit amet consectetur.</h5>
          <h5>Lorem ipsum dolor sit amet consectetur.</h5>
        </div>
        <div className="one">
          <h3>Product</h3>
          <h5>Cred play</h5>
          <h5>credit score and check</h5>
          <h5>resources</h5>
          <h5>articles</h5>
          <h5>blogs</h5>
          <h5>calculators</h5>
          <h5>creditand payments guide</h5>
          <h5>credit score guide</h5>
        </div>
        <div className="one">
          <h3>CRED</h3>
          <h5>about </h5>
          <h5>careers</h5>
          <h5>IPL</h5>
          <h5>CUSTOmre</h5>
          <h5>policy</h5>
          <h5>securiyt</h5>
          <h5>transactiomn</h5>
          <h5>google api discloser</h5>
          <h5>UPI &</h5>
        </div>
      </div>
    );
}

export default Footer