import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { FcSettings } from 'react-icons/fc';
import { FaArrowLeft } from 'react-icons/fa';

import myImage from '../photos/googlelogoCropped.jpg'

function TopBar() {

    const settingsButton = () => {
        alert("settings");
    };

  //   const navigate = useNavigate(); 
    const returnHome = () => {
     // navigate('http://localhost:3000/home');
     window.location = 'http://localhost:3000/home';

     alert("hello")
  };
  

    

  return (
    <div className="HomeTopBox">
        <div className="HomeTopBoxInsideTop">
          {/* <div className="HomeTopBoxOne" style={{ color: "white" }}>
            <h6>Hello</h6>
          </div> */}
          <button className="HomeTopBoxThreeButton" onClick={returnHome}>
              <h1>
                <FaArrowLeft />
              </h1>
            </button>
          <div className="HomeTopBoxThree">
          </div>
        </div>
        <div className="HomeTopBoxInsideBottom">
          <div className="HomeTopBoxTwo">
            <img className="HomelogoPhoto" src={myImage} alt="logo"></img>
          </div>
        </div>
      </div>
  )
}

export default TopBar
