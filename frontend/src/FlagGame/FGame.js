import React, { useState, useEffect, useRef } from 'react';
import './FGame.css';
import { useNavigate } from "react-router-dom";
import Fireworks from '../photos/fireworks.jpg'

import Albania from '../photos/flags/Albania.png';import Andorra from '../photos/flags/Andorra.png'
import Armenia from '../photos/flags/Armenia.png';import Austria from '../photos/flags/Austria.png'
import Belarus from '../photos/flags/Belarus.png';import Belgium from '../photos/flags/Belgium.png'
import Bosnia_and_Herzegovina from '../photos/flags/BosniaAndHerzegovina.png';import Bulgaria from '../photos/flags/Bulgaria.png'
import Croatia from '../photos/flags/Croatia.png';import Cyprus from '../photos/flags/Cyprus.png'
import Czechia from '../photos/flags/Czechia.png';import Denmark from '../photos/flags/Denmark.png'
import Estonia from '../photos/flags/Estonia.png';import Finland from '../photos/flags/Finland.png'
import France from '../photos/flags/French.png';import Georgia from '../photos/flags/Georgia.png'
import Germany from '../photos/flags/German.png';import Greece from '../photos/flags/Greece.png'
import Hungary from '../photos/flags/Hungary.png';import Iceland from '../photos/flags/Iceland.png'
import Ireland from '../photos/flags/Ireland.png';import Italy from '../photos/flags/Italian.png'
import Kosovo from '../photos/flags/Kosovo.png';import Latvia from '../photos/flags/Latvia.png'
import Liechtenstein from '../photos/flags/Liechtenstein.png';import Lithuania from '../photos/flags/Lithuania.png';
import Luxembourg from '../photos/flags/Luxembourg.png';import Malta from '../photos/flags/Malta.png';
import Moldova from '../photos/flags/Moldova.png';import Monaco from '../photos/flags/Monaco.png';
import Montenegro from '../photos/flags/Montenegro.png';import Netherlands from '../photos/flags/Netherlands.png';
import North_Macedonia from '../photos/flags/NorthMacedonia.png';import Norway from '../photos/flags/Norway.png'
import Poland from '../photos/flags/Poland.png';import Portugal from '../photos/flags/Portugal.png'
import Romania from '../photos/flags/Romania.png';import Russia from '../photos/flags/Russia.png';
import San_Marino from '../photos/flags/SanMarino.png';import Serbia from '../photos/flags/Serbia.png';
import Slovakia from '../photos/flags/Slovakia.png';import Slovenia from '../photos/flags/Slovenia.png';
import Spain from '../photos/flags/Spain.png';import Sweden from '../photos/flags/Sweden.png'
import Switzerland from '../photos/flags/Switzerland.png';import Turkey from '../photos/flags/Turkey.png';
import Ukraine from '../photos/flags/Ukraine.png';import United_Kingdom from '../photos/flags/UnitedKingdom.png';
import Vatican_City from '../photos/flags/VaticanCity.png';

function FlagGame() {
  const ButtonWrong = () => {
    alert("you lose")
    window.location.reload(false);
  }

  const [score, setScore] = useState(-1);
  const [myCountries, setMyCountries] = useState([
    //    1-6	
   "Albania"	,"Andorra","Armenia","Austria","Belarus","Belgium",
   //7-11
    "Bosnia and Herzegovina","Bulgaria",	"Croatia",	"Cyprus",	"Czech Republic",
    //12-18
    "Denmark", "Estonia",	"Finland",	"France",	"Georgia",	"Germany",	"Greece",	
    //19-25 
    "Hungary",	"Iceland","Ireland","Italy","Kosovo",	"Latvia",	"Liechtenstein",	
    //26-31  
    "Lithuania",	"Luxembourg",	"Malta","Moldova",	"Monaco",	"Montenegro",	
    //32-36  
    "Netherlands",	"North Macedonia",	"Norway"	,"Poland"	,"Portugal",	
    //37-42  
    "Romania"	,"Russia"	,"San Marino",	"Serbia"	,"Slovakia",	"Slovenia",	
    //43-49  
    "Spain",	"Sweden",	"Switzerland"	,"Turkey" , "Ukraine" ,"United Kingdom", "Vatican City"
      ]);

      const checkTheFlag = (removedElement) => {
        switch (removedElement) {
          case 'Albani': setTheFlag(Albania); break;case 'Andorra': setTheFlag(Andorra); break;
          case 'Armenia': setTheFlag(Armenia); break;case 'Austria': setTheFlag(Austria); break;
          case 'Belarus': setTheFlag(Belarus); break;case 'Belgium': setTheFlag(Belgium); break;
          case 'Bosnia and Herzegovina': setTheFlag(Bosnia_and_Herzegovina); break;case 'Bulgaria': setTheFlag(Bulgaria); break;
          case 'Croatia': setTheFlag(Croatia); break;case 'Cyprus': setTheFlag(Cyprus); break;
          case 'Czech Republic': setTheFlag(Czechia); break;case 'Denmark': setTheFlag(Denmark); break;
          case 'Estonia': setTheFlag(Estonia); break; case 'Finland': setTheFlag(Finland); break;
          case 'France': setTheFlag(France); break;case 'Georgia': setTheFlag(Georgia); break;
          case 'Germany': setTheFlag(Germany); break;case 'Greece': setTheFlag(Greece); break;
          case 'Hungary': setTheFlag(Hungary); break;case 'Iceland': setTheFlag(Iceland); break;
          case 'Ireland': setTheFlag(Ireland); break;case 'Italy': setTheFlag(Italy); break;
          case 'Kosovo': setTheFlag(Kosovo); break;case 'Latvia': setTheFlag(Latvia); break;
          case 'Liechtenstein': setTheFlag(Liechtenstein); break;case 'Lithuania': setTheFlag(Lithuania); break;
          case 'Luxembourg': setTheFlag(Luxembourg); break;case 'Malta': setTheFlag(Malta); break;
          case 'Moldova': setTheFlag(Moldova); break;case 'Monaco': setTheFlag(Monaco); break;
          case 'Montenegr': setTheFlag(Montenegro); break;case 'Netherlands': setTheFlag(Netherlands); break;
          case 'North Macedonia': setTheFlag(North_Macedonia); break;case 'Norway': setTheFlag(Norway); break;
          case 'Poland': setTheFlag(Poland); break;case 'Portugal': setTheFlag(Portugal); break;
          case 'Romania': setTheFlag(Romania); break;case 'Russia': setTheFlag(Russia); break;
          case 'San Marino': setTheFlag(San_Marino); break;case 'Serbia': setTheFlag(Serbia); break;
          case 'Slovakia': setTheFlag(Slovakia); break;case 'Slovenia': setTheFlag(Slovenia); break;
          case 'Spain': setTheFlag(Spain); break;case 'Sweden': setTheFlag(Sweden); break;
          case 'Switzerland': setTheFlag(Switzerland); break;case 'Turkey': setTheFlag(Turkey); break;
          case 'Ukraine': setTheFlag(Ukraine); break;case 'United Kingdom': setTheFlag(United_Kingdom); break;
          case 'Vatican City': setTheFlag(Vatican_City); break;
          default:
        }
      }

  function swapDivs() {
  const numbers = [1, 2, 3, 4, 5, 6];
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
    const div1 = document.querySelector(`#myDiv${numbers[0]}`);
    const div2 = document.querySelector(`#myDiv${numbers[1]}`);
    const div3 = document.querySelector(`#myDiv${numbers[2]}`);
    const div4 = document.querySelector(`#myDiv${numbers[3]}`);
    const div5 = document.querySelector(`#myDiv${numbers[4]}`);
    const div6 = document.querySelector(`#myDiv${numbers[5]}`);
    const div1Col = window.getComputedStyle(div1).getPropertyValue('grid-column');
    const div1Row = window.getComputedStyle(div1).getPropertyValue('grid-row');
    const div2Col = window.getComputedStyle(div2).getPropertyValue('grid-column');
    const div2Row = window.getComputedStyle(div2).getPropertyValue('grid-row');
    const div3Col = window.getComputedStyle(div3).getPropertyValue('grid-column');
    const div3Row = window.getComputedStyle(div3).getPropertyValue('grid-row');
    const div4Col = window.getComputedStyle(div4).getPropertyValue('grid-column');
    const div4Row = window.getComputedStyle(div4).getPropertyValue('grid-row');
    const div5Col = window.getComputedStyle(div5).getPropertyValue('grid-column');
    const div5Row = window.getComputedStyle(div5).getPropertyValue('grid-row');
    const div6Col = window.getComputedStyle(div6).getPropertyValue('grid-column');
    const div6Row = window.getComputedStyle(div6).getPropertyValue('grid-row');
    div1.style.gridColumn = div2Col;
    div1.style.gridRow = div2Row;
    div2.style.gridColumn = div1Col;
    div2.style.gridRow = div1Row;
    div3.style.gridColumn = div4Col;
    div3.style.gridRow = div4Row;
    div4.style.gridColumn = div3Col;
    div4.style.gridRow = div3Row;
    div5.style.gridColumn = div6Col;
    div5.style.gridRow = div6Row;
    div6.style.gridColumn = div5Col;
    div6.style.gridRow = div5Row;
  }

  const [removedElement, setRemovedElement] = useState('');
    const [theFlag, setTheFlag] = useState('');
  
    const removeElement = () => {
        const index = Math.floor(Math.random() * myCountries.length);
        const updatedCountries = myCountries.slice();
        const [removedCountry] = updatedCountries.splice(index, 1);
        setMyCountries(updatedCountries);
        setRemovedElement(removedCountry);
        setScore(score + 1);
      }


      const [theFlagOne, setTheFlagOne] = useState('');
      const [theFlagTwo, setTheFlagTwo] = useState('');
      const [theFlagThree, setTheFlagThree] = useState('');
      const [theFlagFour, setTheFlagFour] = useState('');
      const [theFlagFive, setTheFlagFive] = useState('');
      function selectRandomCountries() {
        const countries = [
          "Albania", "Andorra", "Armenia", "Austria", "Belarus", "Belgium",
          "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czechia",
          "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece",
          "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein",
          "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro",
          "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal",
          "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia",
          "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"
        ];
     
        const countriesWithoutCyprus = countries.filter((country) => country !== removedElement);
  const randomCountries = countriesWithoutCyprus.sort(() => Math.random() - 0.5).slice(0, 5);
switch (randomCountries[0]) {
  case 'Albani': setTheFlagOne(Albania); break;case 'Andorra': setTheFlagOne(Andorra); break;
  case 'Armenia': setTheFlagOne(Armenia); break;case 'Austria': setTheFlagOne(Austria); break;
  case 'Belarus': setTheFlagOne(Belarus); break;case 'Belgium': setTheFlagOne(Belgium); break;
  case 'Bosnia and Herzegovina': setTheFlagOne(Bosnia_and_Herzegovina); break;case 'Bulgaria': setTheFlagOne(Bulgaria); break;
  case 'Croatia': setTheFlagOne(Croatia); break;case 'Cyprus': setTheFlagOne(Cyprus); break;
  case 'Czechia': setTheFlagOne(Czechia); break;case 'Denmark': setTheFlagOne(Denmark); break;
  case 'Estonia': setTheFlagOne(Estonia); break; case 'Finland': setTheFlagOne(Finland); break;
  case 'France': setTheFlagOne(France); break;case 'Georgia': setTheFlagOne(Georgia); break;
  case 'Germany': setTheFlagOne(Germany); break;case 'Greece': setTheFlagOne(Greece); break;
  case 'Hungary': setTheFlagOne(Hungary); break;case 'Iceland': setTheFlagOne(Iceland); break;
  case 'Ireland': setTheFlagOne(Ireland); break;case 'Italy': setTheFlagOne(Italy); break;
  case 'Kosovo': setTheFlagOne(Kosovo); break;case 'Latvia': setTheFlagOne(Latvia); break;
  case 'Liechtenstein': setTheFlagOne(Liechtenstein); break;case 'Lithuania': setTheFlagOne(Lithuania); break;
  case 'Luxembourg': setTheFlagOne(Luxembourg); break;case 'Malta': setTheFlagOne(Malta); break;
  case 'Moldova': setTheFlagOne(Moldova); break;case 'Monaco': setTheFlagOne(Monaco); break;
  case 'Montenegr': setTheFlagOne(Montenegro); break;case 'Netherlands': setTheFlagOne(Netherlands); break;
  case 'North Macedonia': setTheFlagOne(North_Macedonia); break;case 'Norway': setTheFlagOne(Norway); break;
  case 'Poland': setTheFlagOne(Poland); break;case 'Portugal': setTheFlagOne(Portugal); break;
  case 'Romania': setTheFlagOne(Romania); break;case 'Russia': setTheFlagOne(Russia); break;
  case 'San Marino': setTheFlagOne(San_Marino); break;case 'Serbia': setTheFlagOne(Serbia); break;
  case 'Slovakia': setTheFlagOne(Slovakia); break;case 'Slovenia': setTheFlagOne(Slovenia); break;
  case 'Spain': setTheFlagOne(Spain); break;case 'Sweden': setTheFlagOne(Sweden); break;
  case 'Switzerland': setTheFlagOne(Switzerland); break;case 'Turkey': setTheFlagOne(Turkey); break;
  case 'Ukraine': setTheFlagOne(Ukraine); break;case 'United Kingdom': setTheFlagOne(United_Kingdom); break;
  case 'Vatican City': setTheFlagOne(Vatican_City); break;
  default:
}
switch (randomCountries[1]) {
  case 'Albani': setTheFlagTwo(Albania); break;case 'Andorra': setTheFlagTwo(Andorra); break;
  case 'Armenia': setTheFlagTwo(Armenia); break;case 'Austria': setTheFlagTwo(Austria); break;
  case 'Belarus': setTheFlagTwo(Belarus); break;case 'Belgium': setTheFlagTwo(Belgium); break;
  case 'Bosnia and Herzegovina': setTheFlagTwo(Bosnia_and_Herzegovina); break;case 'Bulgaria': setTheFlagTwo(Bulgaria); break;
  case 'Croatia': setTheFlagTwo(Croatia); break;case 'Cyprus': setTheFlagTwo(Cyprus); break;
  case 'Czechia': setTheFlagTwo(Czechia); break;case 'Denmark': setTheFlagTwo(Denmark); break;
  case 'Estonia': setTheFlagTwo(Estonia); break; case 'Finland': setTheFlagTwo(Finland); break;
  case 'France': setTheFlagTwo(France); break;case 'Georgia': setTheFlagTwo(Georgia); break;
  case 'Germany': setTheFlagTwo(Germany); break;case 'Greece': setTheFlagTwo(Greece); break;
  case 'Hungary': setTheFlagTwo(Hungary); break;case 'Iceland': setTheFlagTwo(Iceland); break;
  case 'Ireland': setTheFlagTwo(Ireland); break;case 'Italy': setTheFlagTwo(Italy); break;
  case 'Kosovo': setTheFlagTwo(Kosovo); break;case 'Latvia': setTheFlagTwo(Latvia); break;
  case 'Liechtenstein': setTheFlagTwo(Liechtenstein); break;case 'Lithuania': setTheFlagTwo(Lithuania); break;
  case 'Luxembourg': setTheFlagTwo(Luxembourg); break;case 'Malta': setTheFlagTwo(Malta); break;
  case 'Moldova': setTheFlagTwo(Moldova); break;case 'Monaco': setTheFlagTwo(Monaco); break;
  case 'Montenegr': setTheFlagTwo(Montenegro); break;case 'Netherlands': setTheFlagTwo(Netherlands); break;
  case 'North Macedonia': setTheFlagTwo(North_Macedonia); break;case 'Norway': setTheFlagTwo(Norway); break;
  case 'Poland': setTheFlagTwo(Poland); break;case 'Portugal': setTheFlagTwo(Portugal); break;
  case 'Romania': setTheFlagTwo(Romania); break;case 'Russia': setTheFlagTwo(Russia); break;
  case 'San Marino': setTheFlagTwo(San_Marino); break;case 'Serbia': setTheFlagTwo(Serbia); break;
  case 'Slovakia': setTheFlagTwo(Slovakia); break;case 'Slovenia': setTheFlagTwo(Slovenia); break;
  case 'Spain': setTheFlagTwo(Spain); break;case 'Sweden': setTheFlagTwo(Sweden); break;
  case 'Switzerland': setTheFlagTwo(Switzerland); break;case 'Turkey': setTheFlagTwo(Turkey); break;
  case 'Ukraine': setTheFlagTwo(Ukraine); break;case 'United Kingdom': setTheFlagTwo(United_Kingdom); break;
  case 'Vatican City': setTheFlagTwo(Vatican_City); break;
  default:
}
switch (randomCountries[2]) {
  case 'Albani': setTheFlagThree(Albania); break;case 'Andorra': setTheFlagThree(Andorra); break;
  case 'Armenia': setTheFlagThree(Armenia); break;case 'Austria': setTheFlagThree(Austria); break;
  case 'Belarus': setTheFlagThree(Belarus); break;case 'Belgium': setTheFlagThree(Belgium); break;
  case 'Bosnia and Herzegovina': setTheFlagThree(Bosnia_and_Herzegovina); break;case 'Bulgaria': setTheFlagThree(Bulgaria); break;
  case 'Croatia': setTheFlagThree(Croatia); break;case 'Cyprus': setTheFlagThree(Cyprus); break;
  case 'Czechia': setTheFlagThree(Czechia); break;case 'Denmark': setTheFlagThree(Denmark); break;
  case 'Estonia': setTheFlagThree(Estonia); break; case 'Finland': setTheFlagThree(Finland); break;
  case 'France': setTheFlagThree(France); break;case 'Georgia': setTheFlagThree(Georgia); break;
  case 'Germany': setTheFlagThree(Germany); break;case 'Greece': setTheFlagThree(Greece); break;
  case 'Hungary': setTheFlagThree(Hungary); break;case 'Iceland': setTheFlagThree(Iceland); break;
  case 'Ireland': setTheFlagThree(Ireland); break;case 'Italy': setTheFlagThree(Italy); break;
  case 'Kosovo': setTheFlagThree(Kosovo); break;case 'Latvia': setTheFlagThree(Latvia); break;
  case 'Liechtenstein': setTheFlagThree(Liechtenstein); break;case 'Lithuania': setTheFlagThree(Lithuania); break;
  case 'Luxembourg': setTheFlagThree(Luxembourg); break;case 'Malta': setTheFlagThree(Malta); break;
  case 'Moldova': setTheFlagThree(Moldova); break;case 'Monaco': setTheFlagThree(Monaco); break;
  case 'Montenegr': setTheFlagThree(Montenegro); break;case 'Netherlands': setTheFlagThree(Netherlands); break;
  case 'North Macedonia': setTheFlagThree(North_Macedonia); break;case 'Norway': setTheFlagThree(Norway); break;
  case 'Poland': setTheFlagThree(Poland); break;case 'Portugal': setTheFlagThree(Portugal); break;
  case 'Romania': setTheFlagThree(Romania); break;case 'Russia': setTheFlagThree(Russia); break;
  case 'San Marino': setTheFlagThree(San_Marino); break;case 'Serbia': setTheFlagThree(Serbia); break;
  case 'Slovakia': setTheFlagThree(Slovakia); break;case 'Slovenia': setTheFlagThree(Slovenia); break;
  case 'Spain': setTheFlagThree(Spain); break;case 'Sweden': setTheFlagThree(Sweden); break;
  case 'Switzerland': setTheFlagThree(Switzerland); break;case 'Turkey': setTheFlagThree(Turkey); break;
  case 'Ukraine': setTheFlagThree(Ukraine); break;case 'United Kingdom': setTheFlagThree(United_Kingdom); break;
  case 'Vatican City': setTheFlagThree(Vatican_City); break;
  default:
}
switch (randomCountries[3]) {
  case 'Albani': setTheFlagFour(Albania); break;case 'Andorra': setTheFlagFour(Andorra); break;
  case 'Armenia': setTheFlagFour(Armenia); break;case 'Austria': setTheFlagFour(Austria); break;
  case 'Belarus': setTheFlagFour(Belarus); break;case 'Belgium': setTheFlagFour(Belgium); break;
  case 'Bosnia and Herzegovina': setTheFlagFour(Bosnia_and_Herzegovina); break;case 'Bulgaria': setTheFlagFour(Bulgaria); break;
  case 'Croatia': setTheFlagFour(Croatia); break;case 'Cyprus': setTheFlagFour(Cyprus); break;
  case 'Czechia': setTheFlagFour(Czechia); break;case 'Denmark': setTheFlagFour(Denmark); break;
  case 'Estonia': setTheFlagFour(Estonia); break; case 'Finland': setTheFlagFour(Finland); break;
  case 'France': setTheFlagFour(France); break;case 'Georgia': setTheFlagFour(Georgia); break;
  case 'Germany': setTheFlagFour(Germany); break;case 'Greece': setTheFlagFour(Greece); break;
  case 'Hungary': setTheFlagFour(Hungary); break;case 'Iceland': setTheFlagFour(Iceland); break;
  case 'Ireland': setTheFlagFour(Ireland); break;case 'Italy': setTheFlagFour(Italy); break;
  case 'Kosovo': setTheFlagFour(Kosovo); break;case 'Latvia': setTheFlagFour(Latvia); break;
  case 'Liechtenstein': setTheFlagFour(Liechtenstein); break;case 'Lithuania': setTheFlagFour(Lithuania); break;
  case 'Luxembourg': setTheFlagFour(Luxembourg); break;case 'Malta': setTheFlagFour(Malta); break;
  case 'Moldova': setTheFlagFour(Moldova); break;case 'Monaco': setTheFlagFour(Monaco); break;
  case 'Montenegr': setTheFlagFour(Montenegro); break;case 'Netherlands': setTheFlagFour(Netherlands); break;
  case 'North Macedonia': setTheFlagFour(North_Macedonia); break;case 'Norway': setTheFlagFour(Norway); break;
  case 'Poland': setTheFlagFour(Poland); break;case 'Portugal': setTheFlagFour(Portugal); break;
  case 'Romania': setTheFlagFour(Romania); break;case 'Russia': setTheFlagFour(Russia); break;
  case 'San Marino': setTheFlagFour(San_Marino); break;case 'Serbia': setTheFlagFour(Serbia); break;
  case 'Slovakia': setTheFlagFour(Slovakia); break;case 'Slovenia': setTheFlagFour(Slovenia); break;
  case 'Spain': setTheFlagFour(Spain); break;case 'Sweden': setTheFlagFour(Sweden); break;
  case 'Switzerland': setTheFlagFour(Switzerland); break;case 'Turkey': setTheFlagFour(Turkey); break;
  case 'Ukraine': setTheFlagFour(Ukraine); break;case 'United Kingdom': setTheFlagFour(United_Kingdom); break;
  case 'Vatican City': setTheFlagFour(Vatican_City); break;
  default:
}
switch (randomCountries[4]) {
  case 'Albani': setTheFlagFive(Albania); break;case 'Andorra': setTheFlagFive(Andorra); break;
  case 'Armenia': setTheFlagFive(Armenia); break;case 'Austria': setTheFlagFive(Austria); break;
  case 'Belarus': setTheFlagFive(Belarus); break;case 'Belgium': setTheFlagFive(Belgium); break;
  case 'Bosnia and Herzegovina': setTheFlagFive(Bosnia_and_Herzegovina); break;case 'Bulgaria': setTheFlagFive(Bulgaria); break;
  case 'Croatia': setTheFlagFive(Croatia); break;case 'Cyprus': setTheFlagFive(Cyprus); break;
  case 'Czechia': setTheFlagFive(Czechia); break;case 'Denmark': setTheFlagFive(Denmark); break;
  case 'Estonia': setTheFlagFive(Estonia); break; case 'Finland': setTheFlagFive(Finland); break;
  case 'France': setTheFlagFive(France); break;case 'Georgia': setTheFlagFive(Georgia); break;
  case 'Germany': setTheFlagFive(Germany); break;case 'Greece': setTheFlagFive(Greece); break;
  case 'Hungary': setTheFlagFive(Hungary); break;case 'Iceland': setTheFlagFive(Iceland); break;
  case 'Ireland': setTheFlagFive(Ireland); break;case 'Italy': setTheFlagFive(Italy); break;
  case 'Kosovo': setTheFlagFive(Kosovo); break;case 'Latvia': setTheFlagFive(Latvia); break;
  case 'Liechtenstein': setTheFlagFive(Liechtenstein); break;case 'Lithuania': setTheFlagFive(Lithuania); break;
  case 'Luxembourg': setTheFlagFive(Luxembourg); break;case 'Malta': setTheFlagFive(Malta); break;
  case 'Moldova': setTheFlagFive(Moldova); break;case 'Monaco': setTheFlagFive(Monaco); break;
  case 'Montenegr': setTheFlagFive(Montenegro); break;case 'Netherlands': setTheFlagFive(Netherlands); break;
  case 'North Macedonia': setTheFlagFive(North_Macedonia); break;case 'Norway': setTheFlagFive(Norway); break;
  case 'Poland': setTheFlagFive(Poland); break;case 'Portugal': setTheFlagFive(Portugal); break;
  case 'Romania': setTheFlagFive(Romania); break;case 'Russia': setTheFlagFive(Russia); break;
  case 'San Marino': setTheFlagFive(San_Marino); break;case 'Serbia': setTheFlagFive(Serbia); break;
  case 'Slovakia': setTheFlagFive(Slovakia); break;case 'Slovenia': setTheFlagFive(Slovenia); break;
  case 'Spain': setTheFlagFive(Spain); break;case 'Sweden': setTheFlagFive(Sweden); break;
  case 'Switzerland': setTheFlagFive(Switzerland); break;case 'Turkey': setTheFlagFive(Turkey); break;
  case 'Ukraine': setTheFlagFive(Ukraine); break;case 'United Kingdom': setTheFlagFive(United_Kingdom); break;
  case 'Vatican City': setTheFlagFive(Vatican_City); break;
  default:
}

// setTheFlagOne(randomCountries[0])
// alert(theFlagOne)
// setTheFlagTwo(randomCountries[1])
// alert(theFlagTwo)
// setTheFlagThree(randomCountries[2])
// alert(theFlagThree)
// setTheFlagFour(randomCountries[3])
// alert(theFlagFour)
// setTheFlagFive(randomCountries[4])
// alert(theFlagFive)
// alert(randomCountries[0])
// alert(randomCountries[1])
// alert(randomCountries[2])
// alert(randomCountries[3])
// alert(randomCountries[4])
      }
      


  const checkFunction = () => {
    if(score == 48){
      alert("you win")
      window.location.reload(false);
    }
    removeElement()
    checkTheFlag();
    swapDivs();
    selectRandomCountries()
  }

  useEffect(() => {
    removeElement();
    checkTheFlag();
    swapDivs();
    selectRandomCountries();
  }, []);

  const navigate = useNavigate();

  const navigateBackHome = () => {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace("/FGame", "");
    window.history.pushState({}, "", newUrl);
    window.location.reload(false);
  }

  const refresh = () =>{
    window.location.reload(false);
  }

    return (
    <div className="FGoutsideFront">
      <div className="FGmainBox">
        
        <div className='FGrightbox'>
        <div className='FGbottomBox'>

          <div className='FGTitle'>What is the capial of</div>
          <div className='FGTitleCountry'>{removedElement} ?</div>
          <div className='FGTitleFlags'>
            
            <div className='FGFlagOne' id="myDiv1">
            <button className='FGFlagButton' onClick={checkFunction}>
            <img className="FGFlagImage" src={theFlag} alt="logo"></img>
            </button>
            </div>
            
            <div className='FGFlagTwo' id="myDiv2">
            <button className='FGFlagButton' onClick={ButtonWrong}>
            <img className="FGFlagImage" src={theFlagOne} alt="logo"></img>
            </button>
            </div>
            
            <div className='FGFlagThree' id="myDiv3">
            <button className='FGFlagButton' onClick={ButtonWrong}>
            <img className="FGFlagImage" src={theFlagTwo} alt="logo"></img>
            </button>
            </div>
            
            <div className='FGFlagFour' id="myDiv4">
            <button className='FGFlagButton' onClick={ButtonWrong}>
            <img className="FGFlagImage" src={theFlagThree} alt="logo"></img>
            </button>
            </div>
            
            <div className='FGFlagFive' id="myDiv5">
            <button className='FGFlagButton' onClick={ButtonWrong}>
            <img className="FGFlagImage" src={theFlagFour} alt="logo"></img>
            </button>
            </div>
            
            <div className='FGFlagSix' id="myDiv6">
            <button className='FGFlagButton' onClick={ButtonWrong}>
            <img className="FGFlagImage" src={theFlagFive} alt="logo"></img>
            </button>
            </div>
          
          </div>
      <div className='FGTitleScore'>Your score is {score} / 49</div>
          <div className='FGTitleInfo'>Countrys and Capital game enter the
           capital of the listed country if
          you beat your prevoius record it will update it on the home page.</div>
          </div>
        </div>
          
          <div className='FGrightboxWin'>
        <div className='FGbottomBoxWin'>
          <img className="FGBoxWinCanvas" src={Fireworks} alt="fireworks"></img>
          <div className='FGBoxWinTop'>
          you win
          <h6>49 / 49</h6>
          <button className='FGBoxWinButton' onClick={navigateBackHome }>return home</button>
          </div>
      </div>
      </div>


      <div className='FGrightboxLose'>
        <div className='FGbottomBoxLose'>
          <p>you lose</p>
          <p>false you lose your score was {score}</p>
          <p>
          the answer was {removedElement}
          </p>
          <button onClick={refresh }>play again</button>
          <button onClick={navigateBackHome}>return home</button>
      </div>
      </div>


      </div>  
    </div>
  )
}

export default FlagGame












// for (let i = 0; i < 5; i++) {
  //   const randomIndex = Math.floor(Math.random() * countriesWithoutCyprus.length);
  //   chosenCountries.push(countriesWithoutCyprus[randomIndex]);
  // }
  // Alert each of the chosen countries
  // chosenCountries.forEach((country) => alert(country));
  // alert(chosenCountries[0]);
  // alert(chosenCountries[1]);
  // alert(chosenCountries[2]);
  // alert(chosenCountries[3]);
  // alert(chosenCountries[4]);
  // alert(chosenCountries[5]);






// const randomCountries = new Set();
        // while (randomCountries.size < 5) {
        //   const randomIndex = Math.floor(Math.random() * countries.length);
        //   randomCountries.add(countries[randomIndex]);
        // }
        // alert(`${[...randomCountries].join(', ')}`);
        //
        // const secondCountry = [...randomCountries][1];
  // alert(`${[...randomCountries][1]}`);
  //
        // setTheFlagOne([...randomCountries][1])
        // alert(theFlagOne)

        // for (const country of randomCountries) {
        //   alert(country);
        // }
        // alert(theFlagTwo)
        // alert(theFlagThree)
        // alert(theFlagFour)
        // alert(theFlagFive)

        // Copy the countries array and remove "Cyprus"



















{/* <div className='CACGrightboxWin'>
        <div className='CACGbottomBoxWin'>
          <div className='CACGBoxWinTop'>
          you win
          <h6>49 / 49</h6>
          <button className='CACGBoxWinButton' onClick={navigateBackHome }>return home</button>
          </div>
      </div>
      </div> */}


      {/* <div className='CACGrightboxLose'>
        <div className='CACGbottomBoxLose'>
          <p>you lose</p>
          <p>false you lose your score was {score}</p>
          <p>
          the answer was {removedElement}
          </p>
          <button onClick={refresh }>play again</button>
          <button onClick={navigateBackHome}>return home</button>
      </div>
      </div> */}











































































// function CACGame() {
//   return (
//     <div className="CACGoutsideFront">
//       <div className="CACGmainBox">
        
//         <div className='CACGrightbox'>
//         <div className='CACGbottomBox'>

//           <div className='CACGTitle'>What is the capial of</div>

//           <div className='CACGTitleCountry'>Spain ?</div>

//           <div className='CACGTitleFlag'>
//           <img className="CACGPhoto" src={Albania} alt="logo"></img>
//           </div>

//           <div className='CACGTitleInput'>
//             <input
//       type="text"
//       // value={inputValue}
//       // onChange={(e) => setInputValue(e.target.value)}
//       // onKeyPress={handleKeyPress}
//       id="CACGInputBox"
//     />
//     <button  id="CACGInputButton"
//     // onClick={handleGuessTwo}
//     >
//       Guess</button>
//       </div>

//           <div className='CACGTitleScore'>Your score is 5 / 49</div>

//           <div className='CACGTitleInfo'>Countrys and Capital game enter the
//            capital of the listed country if
//           you beat your prevoius record it will update it on the home page.</div>
          
//         </div>
//         </div>
//       </div>  
//     </div>
//   )
// }

// export default CACGame







