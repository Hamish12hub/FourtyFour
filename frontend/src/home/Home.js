import './home.css';
import React from 'react';
import { useState, useEffect } from 'react';
import FFWIntroduction from '../FourtyFourWordsIntroduction/FFWIntroduction';

import FFWbulgarian from '../FourtyFourWordsHome/FFWbulgarian';
import FFWcroatian from '../FourtyFourWordsHome/FFWcroatian';
import FFWczech from '../FourtyFourWordsHome/FFWczech';
import FFWdanish from '../FourtyFourWordsHome/FFWdanish';
import FFWdutch from '../FourtyFourWordsHome/FFWdutch';
import FFWfinnish from '../FourtyFourWordsHome/FFWfinnish';
import FFWfrench from '../FourtyFourWordsHome/FFWfrench';
import FFWgerman from '../FourtyFourWordsHome/FFWgermany';
import FFWgreek from '../FourtyFourWordsHome/FFWgreek';
import FFWhungarian from '../FourtyFourWordsHome/FFWhungarian';
import FFWitalian from '../FourtyFourWordsHome/FFWitalian';
import FFWpolish from '../FourtyFourWordsHome/FFWpolish';
import FFWromanian from '../FourtyFourWordsHome/FFWromanian';
import FFWportuguese from '../FourtyFourWordsHome/FFWportuguese';
import FFWrussian from '../FourtyFourWordsHome/FFWrussian';
import FFWspanish from '../FourtyFourWordsHome/FFWspanish';
import FFWswedish from '../FourtyFourWordsHome/FFWswedish';
import FFWturkish from '../FourtyFourWordsHome/FFWturkish';

import CACHome from '../CACHome/CACHome';
import FHome from '../FlagHome/FHome';

import TopBar from './TopBar';

function Home() {

  const [bulgarianHere, setBulgarianHere] = useState("");
    const alertBulgarian = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/BulgarianEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setBulgarianHere(data.bulgarianScore)
      }else{
        alert('Invalid Token');
      }
    };

  const [croatianHere, setCroatianHere] = useState("");
    const alertCroatian = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/CroatianEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setCroatianHere(data.croatianScore)
      }else{
        alert('Invalid Token');
      }
    };


    const [czechHere, setCzechHere] = useState("");
    const alertCzech = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/CzechEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setCzechHere(data.czechScore)
      }else{
        alert('Invalid Token');
      }
    };


    const [danishHere, setDanishHere] = useState("");
    const alertDanish = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/DanishEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setDanishHere(data.danishScore)
      }else{
        alert('Invalid Token');
      }
    };


    const [dutchHere, setDutchHere] = useState("");
    const alertDutch = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/DutchEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setDutchHere(data.dutchScore)
      }else{
        alert('Invalid Token');
      }
    };

    const [finnishHere, setFinnishHere] = useState("");
    const alertFinnish = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/FinnishEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setFinnishHere(data.finnishScore)
      }else{
        alert('Invalid Token');
      }
    };

    const [frenchHere, setFrenchHere] = useState("");
    const alertFrench = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/frenchEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setFrenchHere(data.frenchScore)
      }else{
        alert('Invalid Token');
      }
    };

  const [germanHere, setGermanHere] = useState("");
    const alertGerman = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/GermanEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setGermanHere(data.germanScore)
      }else{
        alert('Invalid Token');
      }
    };

    const [greekHere, setGreekHere] = useState("");
    const alertGreek = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/GreekEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setGreekHere(data.greekScore)
      }else{
        alert('Invalid Token');
      }
    };


    const [hungarianHere, setHungarianHere] = useState("");
    const alertHungarian = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/HungarianEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setHungarianHere(data.hungarianScore)
      }else{
        alert('Invalid Token');
      }
    };


    const [italianHere, setItalianHere] = useState("");
    const alertItalian = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/ItalianEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setItalianHere(data.italianScore)
      }else{
        alert('Invalid Token');
      }
    };

    const [ polishHere, setPolishHere] = useState("");
    const alertPolish = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/PolishEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setPolishHere(data.polishScore)
      }else{
        alert('Invalid Token');
      }
    };
    
    const [ portugueseHere, setPortugueseHere] = useState("");
    const alertPortuguese = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/PortugueseEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setPortugueseHere(data.portugueseScore)
      }else{
        alert('Invalid Token');
      }
    };
    const [ romanianHere, setRomanianHere] = useState("");
    const alertRomanian = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/RomanianEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setRomanianHere(data.romanianScore)
      }else{
        alert('Invalid Token');
      }
    };
    const [ russianHere, setRussianHere] = useState("");
    const alertRussian = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/RussianEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setRussianHere(data.russianScore)
      }else{
        alert('Invalid Token');
      }
    };

    const [ spanishHere, setSpanishHere] = useState("");
    const alertSpanish = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/SpanishEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setSpanishHere(data.spanishScore)
      }else{
        alert('Invalid Token');
      }
    };

    const [ swedishHere, setSwedishHere] = useState("");
    const alertSwedish = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/SwedishEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setSwedishHere(data.swedishScore)
      }else{
        alert('Invalid Token');
      }
    };

    const [ turkishHere, setTurkishHere] = useState("");
    const alertTurkish = async () => {
      const token = localStorage.getItem("token");
      const req = await fetch('http://localhost:1337/TurkishEnquiry', {
        headers: {'x-access-token': token},
      })
      const data = await req.json()
      if(data.status == "ok"){
        setTurkishHere(data.turkishScore)
      }else{
        alert('Invalid Token');
      }
    };


    useEffect(() => {
      alertBulgarian();
      alertCroatian();
      alertCzech();
      alertDanish();
      alertDutch();
      alertFinnish();
      alertFrench();
      alertGerman();
      alertGreek();
      alertHungarian();
      alertItalian();
      alertPolish();
      alertRomanian();
      alertPortuguese();
      alertRussian();
      alertSpanish();
      alertSwedish();
      alertTurkish();
    })
        
  useEffect(() => {
    if(bulgarianHere == 0){
      document.getElementsByClassName("HomeBulgarianExists")[0].style.display = "block";
    }else{document.getElementsByClassName("HomeBulgarianExists")[0].style.display = "none";}
  
    if(croatianHere == 0){
    document.getElementsByClassName("HomeCroatianExists")[0].style.display = "block";
  }else{document.getElementsByClassName("HomeCroatianExists")[0].style.display = "none";
}
if(czechHere == 0){
  document.getElementsByClassName("HomeCzechExists")[0].style.display = "block";
}else{document.getElementsByClassName("HomeCzechExists")[0].style.display = "none";
}
if(danishHere == 0){
  document.getElementsByClassName("HomeDanishExists")[0].style.display = "block";
}else{document.getElementsByClassName("HomeDanishExists")[0].style.display = "none";
} 
if(dutchHere == 0){
  document.getElementsByClassName("HomeDutchExists")[0].style.display = "block";
}else{document.getElementsByClassName("HomeDutchExists")[0].style.display = "none";
} 
if(finnishHere == 0){
  document.getElementsByClassName("HomeFinnishExists")[0].style.display = "block";
}else{document.getElementsByClassName("HomeFinnishExists")[0].style.display = "none";
} 
if(frenchHere == 0){
  document.getElementsByClassName("HomeFrenchExists")[0].style.display = "block";
}else{document.getElementsByClassName("HomeFrenchExists")[0].style.display = "none";
} 
if(germanHere == 0){
        document.getElementsByClassName("HomeGermanExists")[0].style.display = "block";
      }else{document.getElementsByClassName("HomeGermanExists")[0].style.display = "none";
    }
    if(greekHere == 0){
      document.getElementsByClassName("HomeGreekExists")[0].style.display = "block";
    }else{document.getElementsByClassName("HomeGreekExists")[0].style.display = "none";
  }
  if(hungarianHere == 0){
    document.getElementsByClassName("HomeHungarianExists")[0].style.display = "block";
  }else{document.getElementsByClassName("HomeHungarianExists")[0].style.display = "none";
}
if(italianHere == 0){
  document.getElementsByClassName("HomeItalianExists")[0].style.display = "block";
}else{document.getElementsByClassName("HomeItalianExists")[0].style.display = "none";
}
if(polishHere == 0){
  document.getElementsByClassName("HomePolishExists")[0].style.display = "block";
}else{document.getElementsByClassName("HomePolishExists")[0].style.display = "none";
}
if(portugueseHere == 0){
  document.getElementsByClassName("HomePortugueseExists")[0].style.display = "block";
}else{document.getElementsByClassName("HomePortugueseExists")[0].style.display = "none";
}
if(romanianHere == 0){
  document.getElementsByClassName("HomeRomanianExists")[0].style.display = "block";
}else{document.getElementsByClassName("HomeRomanianExists")[0].style.display = "none";
}
if(russianHere == 0){
  document.getElementsByClassName("HomeRussianExists")[0].style.display = "block";
}else{document.getElementsByClassName("HomeRussianExists")[0].style.display = "none";
}
if(spanishHere == 0){
  document.getElementsByClassName("HomeSpanishExists")[0].style.display = "block";
}else{document.getElementsByClassName("HomeSpanishExists")[0].style.display = "none";
}
if(swedishHere == 0){
  document.getElementsByClassName("HomeSwedishExists")[0].style.display = "block";
}else{document.getElementsByClassName("HomeSwedishExists")[0].style.display = "none";
}
if(turkishHere == 0){
  document.getElementsByClassName("HomeTurkishExists")[0].style.display = "block";
}else{document.getElementsByClassName("HomeTurkishExists")[0].style.display = "none";
}
  })


  return (
    <div>
      {/* <TopBar /> */}
      <div className="HomeBackground">
        <div className="HomeBackgroundTwo">
          <div className="HomeLanguagesExplain">
            <FFWIntroduction />
          </div>

          <div className="HomeLanguages">

          <div className='HomeBulgarianExists'>
            <FFWbulgarian />
            </div>
          <div className='HomeCroatianExists'>
            <FFWcroatian />
            </div>
            <div className='HomeCzechExists'>
            <FFWczech />
            </div>
            <div className='HomeDanishExists'>
            <FFWdanish />
            </div>
            <div className='HomeDutchExists'>
            <FFWdutch />
            </div>
            <div className='HomeFinnishExists'>
            <FFWfinnish />
            </div>
            <div className='HomeFrenchExists'>
            <FFWfrench />
            </div>
            <div className='HomeGermanExists'>
            <FFWgerman />
            </div>
            <div className='HomeGreekExists'>
            <FFWgreek />
            </div>
            <div className='HomeHungarianExists'>
            <FFWhungarian />
            </div>
            <div className='HomeItalianExists'>
            <FFWitalian />
            </div>
            <div className='HomePolishExists'>
            <FFWpolish />
            </div>
            <div className='HomePortugueseExists'>
            <FFWportuguese />
            </div>
            <div className='HomeRomanianExists'>
            <FFWromanian />
            </div>
            <div className='HomeRussianExists'>
            <FFWrussian />
            </div>
            <div className='HomeSpanishExists'>
            <FFWspanish />
            </div>
            <div className='HomeSwedishExists'>
            <FFWswedish />
            </div>
            <div className='HomeTurkishExists'>
            <FFWturkish />
            </div>
            
          </div>

          <div className="HomeWorldCAC">
          <CACHome />
          </div>

          <div className="HomeWorldFlag">
          <FHome />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;