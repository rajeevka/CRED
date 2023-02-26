import React from 'react'
import './Container4.css'
import companylogs from "./companylogs.PNG";
const Container4 = () => {
  return (
    <div className="Container4">
      <h1 style={{marginLeft:"100px"}}>rewards from brands you love.</h1>
      <div className="companylogs">
        <img src={companylogs} alt="" />
      </div>
    </div>
  );
}

export default Container4