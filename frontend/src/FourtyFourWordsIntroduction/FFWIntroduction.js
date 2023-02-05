import React, { useState, useEffect } from 'react';
import './FFWIntroduction.css';
import {decodeToken} from 'react-jwt'

function FFWIntroduction() {

  const [country, setCountry] = useState("");

  const addCountry = async (e) => {
    switch(country) {
      case "bulgarian":creatingBulgarian();break;
      case "croatian":creatingCroatian();break;
      case "czech":creatingCzech();break;
      case "danish":creatingDanish();break;
      case "dutch":creatingDutch();break;
      case "finnish":creatingFinnish();break;
      case "french":creatingFrench();break;
      case "greek":creatingGreek();break;
      case "german":creatingGerman();break;
      case "hungarian":creatingHungarian();break;
      case "italian":creatingItalian();break;
      case "polish":creatingPolish();break;
      case "portuguese":creatingPortuguese();break;
      case "romanian":creatingRomanian();break;
      case "russian":creatingRussian();break;
      case "spanish":creatingSpanish();break;
      case "swedish":creatingSwedish();break;
      case "turkish":creatingTurkish();break;
      default:
        alert("choose a languge")
    }  
  }

  const [nameHere, setNameHere] = useState("");
    const alertName = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/NameEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setNameHere(data.yourName)
      }else{
        alert('Invalid Token');
      }
    };

    // Bulgarian
  const creatingBulgarian = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingBulgarian', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }
  // Croatian
  const creatingCroatian = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingCroatian', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }
  // Czech
  const creatingCzech = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingCzech', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }
  // Danish 
  const creatingDanish = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingDanish', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }
  // Dutch 
  const creatingDutch = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingDutch', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }
  // Finnish
  const creatingFinnish = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingFinnish', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }
  // French
  const creatingFrench = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingFrench', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }
  // German
  const creatingGerman = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingGerman', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }
  // Greek
  const creatingGreek = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingGreek', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }
  // Hungarian
  const creatingHungarian = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingHungarian', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }
  // Italian
  const creatingItalian = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingItalian', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }
    // Polish
  const creatingPolish = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingPolish', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }
    // Portuguese
  const creatingPortuguese = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingPortuguese', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }
  // Romanian
  const creatingRomanian = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingRomanian', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }
  // Russian
  const creatingRussian = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingRussian', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }
  // Spanish
  const creatingSpanish = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingSpanish', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }
  // Swedish
  const creatingSwedish = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingSwedish', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }
  // Turkish
  const creatingTurkish = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/creatingTurkish', {
      method: "POST",
      headers: {"content-Type": "application/json", 'x-access-token' : token},
    })
    const data = await req.json()
    if(data.status != 'ok'){
      alert('Invalid Token');
    }
  }


    useEffect(() => {
      const token = localStorage.getItem("token");
      const isTokenValid = decodeToken(token);
      if(isTokenValid){
        alertName();
      }else{
        alert("Invalid Token")
      }
    })


  return (
    <div className='IntOutside'>
        <div className='IntTop'>
            <h1 className='IntHeading'>hello {nameHere} to fourty four words</h1>
            <ul className='IntList'>
            <li>Ever been stuck for basic words when you are on holiday or travelling?</li>
             <li>Ever wanted to impress your friends and family with your basic language skills?</li>
             <li>Use this website to help you learn the basic words from europes 18 most spoken lanagues exloding englsih</li>
             <li>There's no need to pull out your phone every time - just learn these top words as you travel.</li>
            </ul>  
        </div>
        <div className='IntBottom'>

          <p className='IntSelectText'>select a languge that you want to learn basic words for</p> 

          <div className='IntBottomRight'>
             <select className='IntSelectInput' value={country} onChange={(e) => setCountry(e.target.value)}>
    <option value={"select"}>--select--</option>
    <option value={"bulgarian"}>Bulgarian</option>
    <option value={"croatian"}>Croatian</option>
    <option value={"czech"}>Czech</option>
    <option value={"danish"}>Danish</option>
    <option value={"dutch"}>Dutch</option>
    <option value={"finnish"}>Finnish</option>
    <option value={"french"}>French</option>
    <option value={"german"}>German</option>
    <option value={"greek"}>Greek</option>
    <option value={"hungarian"}>Hungarian</option>
    <option value={"italian"}>Italian</option>
    <option value={"polish"}>Polish</option>
    <option value={"portuguese"}>Portuguese</option>
    <option value={"romanian"}>Romanian</option>
    <option value={"russian"}>Russian</option>
    <option value={"spanish"}>Spanish</option>
    <option value={"swedish"}>Swedish</option>
    <option value={"turkish"}>Turkish</option>
  </select>





  <form onSubmit={addCountry}>
  <input className='IntSelectButton' type="submit"/>
    </form>
    </div>
        </div>
{/* <button onClick={alertSpain}>hi</button> */}
    </div>
    
  )
}

export default FFWIntroduction