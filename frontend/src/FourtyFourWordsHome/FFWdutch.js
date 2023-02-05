import "./FFW.css";
import { FcSettings } from 'react-icons/fc';
import { FaPlay } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { TfiReload } from 'react-icons/tfi';
import { BsThreeDotsVertical } from 'react-icons/bs'

import React, { useState, useEffect } from 'react';

import myImage from '../photos/flags/Netherlands.png'

import { useNavigate } from "react-router-dom";

function FFWdutch() {

  const navigate = useNavigate();

  const PlayButton = () => {
    navigate("dutch");
  };
  const sheetButton = () => {
    navigate("languageAnswers?dutch");
  }


  const deletingDutch = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/DeletingDutch', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }else{
      window.location.reload(false);
    }
  }


  useEffect(() => {
    alertFFWScore();
  })
  const [OldScore, setOldScore] = useState("");
  const alertFFWScore = async () => {
    const token = localStorage.getItem("token");
    const req = await fetch('http://localhost:1337/DutchScore', {
      headers: {'x-access-token': token},
    })
    const data = await req.json()
    if(data.status == "ok"){
      setOldScore(data.dutch)
    }else{
      alert('Invalid Token');
    }
  };

  const [CACHScoreRed, setColor] = useState("initialColor");
  useEffect(() => {
  if (OldScore <= 22) {
    var color = "rgb(255," + Math.floor((OldScore /22) * 255) + ",0)";
    setColor(color);
} else {
    var color = "rgb(" + Math.floor((1 - (OldScore - 22)/22) * 255) + ",255,0)";
    setColor(color);
}
  }, [OldScore]);

  const ResetButton = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/resetingDutchScore', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }else{
      window.location.reload(false);
    }
  }





  return (
    <div className="FFWOutside">
      <div className="FFWTop">
        <div className="FFWTopOne">
          <p className="FFWTopText">Dutch</p>
          <img className="FFWPhoto" src={myImage} alt="logo"></img>
        </div>
        <div className="FFWTopTwo">
          <button className="FFWTopTwoButton" onClick={PlayButton}>
          <FaPlay /> Play
          </button>
        </div>
        <div className="FFWTopFour">
        <button className="FFWTopFourButton" onClick={sheetButton}>
          Answers
          </button>
        </div>
        <div className="FFWTopThreeOutside">
        <div className="FFWTopThree">

        <button className="FFWTopThreeButton" onClick={deletingDutch}><RiDeleteBin6Line/></button>
        <button className="FFWTopThreeButton" onClick={ResetButton}><TfiReload/></button>
        
        </div>
        </div>
      </div>
      <div className="FFWBottom">
        <div className="FFWBottomLeft">
          <p className="FFWBottomText">
            Your Score is {OldScore} / 44
          </p>
        </div>
        <div className="FFWBottomRight">
          <div
            className="FFWBottomRightInside"
            style={{
              ...{ backgroundColor: `${CACHScoreRed}` },
              ...{ width: `${(OldScore/44) * 100}%` },
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default FFWdutch;