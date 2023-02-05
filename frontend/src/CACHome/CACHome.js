import React, { useState, useEffect, useRef } from 'react';
import './CACHome.css';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function CACHome() {

  const navigate = useNavigate();

  const PlayButton = () => {
    navigate("CACGame");
  }

  const AnswerButton = () => {
    navigate("Answers")
  }


  useEffect(() => {
    alertCACScore();
  })
  const [CACScore, setCACScore] = useState("");
  const alertCACScore = async () => {
    const token = localStorage.getItem("token");
    const req = await fetch('http://localhost:1337/CACScore', {
      headers: {'x-access-token': token},
    })
    const data = await req.json()
    if(data.status == "ok"){
      setCACScore(data.CACScore)
    }else{
      alert('Invalid Token');
    }
  };

  const [CACHScoreRed, setColor] = useState("initialColor");
  useEffect(() => {
  //   if (CACScore >= 10 && CACScore < 15) {
  //     setColor("red");
  // } else if (CACScore >= 15 && CACScore < 35) {
  //     setColor("orange");
  // } else if (CACScore >= 35) {
  //     setColor("green");
  // }  
  if (CACScore <= 22) {
    var color = "rgb(255," + Math.floor((CACScore/22) * 255) + ",0)";
    setColor(color);
} else {
    var color = "rgb(" + Math.floor((1 - (CACScore - 22)/22) * 255) + ",255,0)";
    setColor(color);
}
  }, [CACScore]);

  
  return (
    <div class="CACHoutside">
      <div className='CACHTop'>
      <div className='CACHTopLeft'>
        <h1 className='CACHTopHeading'>This is countrys and capitals for the whole of europe</h1>
      <ul className='CACHList'>
            <li>How are your countrys and capitals do they need improving</li>
             <li>Ever wanted to impress your friends and family with your basic geographical skills?</li>
             <li>are you able to do the whole</li>
            </ul>  
            </div>
            <div className='CACHTopRight'>
            <button className="CACHTopTwoButton" onClick={PlayButton}>
          <FaPlay /> Play
          </button>
        <button className="CACHTopTwoButton" onClick={AnswerButton}>
          Answers
          </button>
            </div>
            </div>
      
      
      <div className="CACHBottom">
        <div className="CACHBottomLeft">
          <p className="CACHBottomText">
            Your Score is {CACScore} / 49
          </p>
        </div>
        <div className="CACHBottomRight">
          <div
            className="CACHBottomRightInside"
            style={{
              ...{ backgroundColor: `${CACHScoreRed}` },
              ...{ width: `${(CACScore/49) * 100}%` },
            }}
          ></div>
        
        </div>
        </div>
      
    </div>
  )
}

export default CACHome
