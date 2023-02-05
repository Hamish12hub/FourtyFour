import React from 'react'
import './FHome.css';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function FHome() {
  var FHScore = 22;
  var FHScoreRed = "red";

  const navigate = useNavigate();

  const PlayButton = () => {
    navigate("FGame");
  }

  const AnswerButton = () => {
    navigate("Answers")
  }
  
  return (
    <div class="FHoutside">
      <div className='FHTop'>
      <div className='FHTopLeft'>
        <h1 className='FHTopHeading'>This is flags and countrys for the whole of europe</h1>
      <ul className='FHList'>
            <li>How are your flags and countrys do they need improving</li>
             <li>Ever wanted to impress your friends and family with your basic geographical skills?</li>
             <li>are you able to do the whole</li>
            </ul>  
            </div>
            <div className='FHTopRight'>
            <button className="FHTopTwoButton" onClick={PlayButton}>
          <FaPlay /> Play
          </button>
        <button className="FHTopTwoButton" onClick={AnswerButton}>
          Answers
          </button>
            </div>
            </div>
      
      
      <div className="FHBottom">
        <div className="FHBottomLeft">
          <p className="FHBottomText">
            Your Score is {FHScore} / 44
          </p>
        </div>
        <div className="FHBottomRight">
          <div
            className="FHBottomRightInside"
            style={{
              ...{ backgroundColor: `${FHScoreRed}` },
              ...{ width: `${FHScore}%` },
            }}
          ></div>
        
        </div>
        </div>
      
    </div>
  )
}

export default FHome
