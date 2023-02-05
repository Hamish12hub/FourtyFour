import React, { useState, useEffect } from 'react';
import './AALanguages.css';
import {decodeToken} from 'react-jwt'
import { useNavigate } from "react-router-dom";
import Fireworks from '../photos/fireworks.jpg'
import theFlag from '../photos/flags/Hungary.png';




function Hungarian() {

  const TheLanguage = "Hungarian"

       const [score, setScore] = useState(-1);
    const [myOtherLanguage, setMyOtherLanguage] = useState([
//1-10
"Hello", "Szia", "Koszonom", "Kerlek", "Es", "Az", "Igen", "Nem", "Jo reggelt", "Jo napot",
//11-21
"Etel", "Tojas", "Tej", "Kenyer", "Chipsek", "Hal", "Csokolade", "Pizza", "Viz", "Sor", "Bor",
// 22-29
"Etterem", "Haz", "Strand", "Uzlet", "Varos", "Uszomedence", "Park", "WC",
//30-35
"A szamla", "Penz", "Telefon", "Vegetarianus", "Vonat", "Auto",
//36-44
"Egy", "Ketto", "Harom", "Negy", "Ot", "Hat", "Het", "Nyolc", "Kilenc"
    ]);

    const [myEnglishWords, setMyEnglishWords] = useState([
    //1-10
    'Hello','Hi','Thank you','Please','And','The','Yes','No','Good Morning','Good Afternoon',
    //11 - 21
    'Food','Eggs','Milk','Bread','Chips','Fish','Chocolate','Pizza','Water','Beer','Wine',
    //22-29
    'Restaurant','House','Beach','Shop','City','Swimming pool','Park','Toilet',
    //30-35
    'The bill','Money','Phone','Vegetarian','Train','Car',
    //36-44
    "One","Two","Three","Four","Five","Six","Seven","Eight","Nine"
    ]);
   






    const [removedElement, setRemovedElement] = useState('');
     const [removedElementTwo, setRemovedElementTwo] = useState('');
          const removeElement = () => {
        // Generate a random index
        const index = Math.floor(Math.random() * myOtherLanguage.length);
        // Remove the element at the random index
        const updatedCapitals = myOtherLanguage.slice();
        const updatedCountries = myEnglishWords.slice();
        const [removedCapital] = updatedCapitals.splice(index, 1);
        const [removedCountry] = updatedCountries.splice(index, 1);
        setMyOtherLanguage(updatedCapitals);
        setMyEnglishWords(updatedCountries);
        setRemovedElement(removedCapital);
        setRemovedElementTwo(removedCountry);
        setScore(score + 1);
      }

  const [inputValue, setInputValue] = useState('');

  const handleGuessTwo = () =>{
    if(inputValue.toUpperCase() == removedElement.toUpperCase()){
      setInputValue('');
      checkFunction()
    }else{
      Lost()
    }
  }
  const Lost = () =>{
    document.getElementsByClassName("CACGrightbox")[0].style.display = "none";
    document.getElementsByClassName("CACGrightboxLose")[0].style.display = "block";
  }

  const Win = () =>{
    document.getElementsByClassName("CACGrightbox")[0].style.display = "none";
    document.getElementsByClassName("CACGrightboxWin")[0].style.display = "block";
  }

        const checkFunction = () => {
        if(score == 43){
          Win()
        }
        removeElement();
      }



        const playAgain = () =>{
          updateScore();
    window.location.reload(false);
  }





  const navigateBackHome = () => {
    updateScore();
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace("/hungarian", "");
    window.history.pushState({}, "", newUrl);
    window.location.reload(false);
  }



  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleGuessTwo();
    }
  };


  useEffect(() => {
    checkFunction();
  }, []);


  useEffect(() => {
    alertCACScore();
  })

  const [OldScore, setOldScore] = useState("");
  const alertCACScore = async () => {
    const token = localStorage.getItem("token");
    const req = await fetch('http://localhost:1337/HungarianScore', {
      headers: {'x-access-token': token},
    })
    const data = await req.json()
    if(data.status == "ok"){
      setOldScore(data.hungarian)
    }else{
      alert('Invalid Token');
    }
  };


  const updateScore = async () => {
    if(OldScore < score){
      UpdatingCACScore();
    }
  }
  const UpdatingCACScore = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/UpdatingHungarianScore', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
      body: await JSON.stringify({score}),
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }else{
      window.location.reload(false);
    }
  }

  



  return (

        <div className="CACGoutsideFront">
      <div className="CACGmainBox">
        
        <div className='CACGrightbox'>
        <div className='CACGbottomBox'>
          <div className='CACGTitle'>Learn {TheLanguage}</div>
          <div className='CACGTitleFlag'>
          <img className="CACGPhoto" src={theFlag} alt="logo"></img>
          </div>
          <div>what is this english word in {TheLanguage}</div>
          <div className='CACGTitleCountry'>
             {removedElementTwo} ? 
          </div>
          <div className='CACGTitleInput'>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleKeyPress} id="CACGInputBox"/>
    <button  id="CACGInputButton" onClick={handleGuessTwo}>Guess</button>
      </div>
          <div className='CACGTitleScore'>Your score is {score} / 44</div>
        </div>
        </div>

<div className='CACGrightboxWin'>
        <div className='CACGbottomBoxWin'>
          <img className="CACGBoxWinCanvas" src={Fireworks} alt="fireworks"></img>
          <div className='CACGBoxWinTop'>
          you win
          <h6>44 / 44</h6>
          <button className='CACGBoxWinButton' onClick={navigateBackHome }>return home</button>
          </div>
      </div>
      </div>


      <div className='CACGrightboxLose'>
        <div className='CACGbottomBoxLose'>
          <div><h1>You lose</h1></div>
          <div><h1>Your score was {score}</h1></div>
          <div><h2>The answer was {removedElement}</h2></div>
          <button id="AAReturnButtons" onClick={playAgain }>play again</button>
          <button id="AAReturnButtons" onClick={navigateBackHome}>return home</button>
      </div>
      </div>

      </div>  
    </div>

  )
}

export default Hungarian