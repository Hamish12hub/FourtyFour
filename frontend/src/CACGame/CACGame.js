import React, { useState, useEffect, useRef } from 'react';
import './CACGame.css';
import { useNavigate } from "react-router-dom";
import {decodeToken} from 'react-jwt'
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



function CACGame() {

    const [score, setScore] = useState(-1);

    const [myCapitals, setMyCapitals] = useState([
        //1-6
        "Tirana","Andorra la Vella","Yerevan","Vienna","Minsk","Brussels",
        //7-11
        "Sarajevo","Sofia","Zagreb","Nicosia","Prague",
        //12-18
        "Copenhagen","Tallinn","Helsinki","Paris","Tbilisi","Berlin","Athens",
        //19-25
        "Budapest","Reykjavik","Dublin","Rome","Pristina","Riga","Vaduz",
        //26-31
        "Vilnius","Luxembourg City","Valletta","Chisinau","Monaco","Podgorica",
        //32-36
        "Amsterdam","Skopje","Oslo","Warsaw","Lisbon",
        //37-42 
        "Bucharest","Moscow","San Marino","Belgrade","Bratislava","Ljubljana",
         // 43-49
        "Madrid","Stockholm","Bern","Ankara","Kyiv","London","Vatican City",
    ]);

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

    const [removedElement, setRemovedElement] = useState('');
    


    const [removedElementTwo, setRemovedElementTwo] = useState('');
    const [theFlag, setTheFlag] = useState('');
  
  

    const removeElement = () => {
        // Generate a random index
        const index = Math.floor(Math.random() * myCapitals.length);
        // Remove the element at the random index
        const updatedCapitals = myCapitals.slice();
        const updatedCountries = myCountries.slice();
        const [removedCapital] = updatedCapitals.splice(index, 1);
        const [removedCountry] = updatedCountries.splice(index, 1);
        setMyCapitals(updatedCapitals);
        setMyCountries(updatedCountries);
        setRemovedElement(removedCapital);
        setRemovedElementTwo(removedCountry);
        setScore(score + 1);
        myFlag();
      }

      const checkFunction = () => {
        if(score == 48){
          Win()
        }
        removeElement()
      }


  const [inputValue, setInputValue] = useState('');

  const handleGuessTwo = () =>{
    if(inputValue.toUpperCase() == removedElement.toUpperCase()){
      checkFunction()
      setInputValue('');
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
  
  const playAgain = () =>{
    updateScore();
    window.location.reload(false);
  }


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleGuessTwo();
    }
  };
  
  const navigate = useNavigate();

  const navigateBackHome = () => {
    updateScore();
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace("/CACGame", "");
    window.history.pushState({}, "", newUrl);
    window.location.reload(false);
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


  const updateScore = async () => {
    if(CACScore < score){
      UpdatingCACScore();
    }
  }
  const UpdatingCACScore = async (e) => {
    const token = localStorage.getItem('token');
    const req = await fetch('http://localhost:1337/UpdatingCACScore', {
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






  const myFlag = () => {
      switch (removedElement) {
          case 'Tirana': setTheFlag(Albania); break;case 'Andorra la Vella': setTheFlag(Andorra); break;
          case 'Yerevan': setTheFlag(Armenia); break;case 'Vienna': setTheFlag(Austria); break;
          case 'Minsk': setTheFlag(Belarus); break;case 'Brussels': setTheFlag(Belgium); break;
          case 'Sarajevo': setTheFlag(Bosnia_and_Herzegovina); break;case 'Sofia': setTheFlag(Bulgaria); break;
          case 'Zagreb': setTheFlag(Croatia); break;case 'Nicosia': setTheFlag(Cyprus); break;
          case 'Prague': setTheFlag(Czechia); break;case 'Copenhagen': setTheFlag(Denmark); break;
          case 'Tallinn': setTheFlag(Estonia); break; case 'Helsinki': setTheFlag(Finland); break;
          case 'Paris': setTheFlag(France); break;case 'Tbilisi': setTheFlag(Georgia); break;
          case 'Berlin': setTheFlag(Germany); break;case 'Athens': setTheFlag(Greece); break;
          case 'Budapest': setTheFlag(Hungary); break;case 'Reykjavik': setTheFlag(Iceland); break;
          case 'Dublin': setTheFlag(Ireland); break;case 'Rome': setTheFlag(Italy); break;
          case 'Pristina': setTheFlag(Kosovo); break;case 'Riga': setTheFlag(Latvia); break;
          case 'Vaduz': setTheFlag(Liechtenstein); break;case 'Vilnius': setTheFlag(Lithuania); break;
          case 'Luxembourg City': setTheFlag(Luxembourg); break;case 'Valletta': setTheFlag(Malta); break;
          case 'Chisinau': setTheFlag(Moldova); break;case 'Monaco': setTheFlag(Monaco); break;
          case 'Podgorica': setTheFlag(Montenegro); break;case 'Amsterdam': setTheFlag(Netherlands); break;
          case 'Skopje': setTheFlag(North_Macedonia); break;case 'Oslo': setTheFlag(Norway); break;
          case 'Warsaw': setTheFlag(Poland); break;case 'Lisbon': setTheFlag(Portugal); break;
          case 'Bucharest': setTheFlag(Romania); break;case 'Moscow': setTheFlag(Russia); break;
          case 'San Marino': setTheFlag(San_Marino); break;case 'Belgrade': setTheFlag(Serbia); break;
          case 'Bratislava': setTheFlag(Slovakia); break;case 'Ljubljana': setTheFlag(Slovenia); break;
          case 'Madrid': setTheFlag(Spain); break;case 'Stockholm': setTheFlag(Sweden); break;
          case 'Bern': setTheFlag(Switzerland); break;case 'Ankara': setTheFlag(Turkey); break;
          case 'Kyiv': setTheFlag(Ukraine); break;case 'London': setTheFlag(United_Kingdom); break;
          case 'Vatican City': setTheFlag(Vatican_City); break;
          default:
        }
  }

  useEffect(() => {
    removeElement();
  }, []);
  

    return (
    <div className="CACGoutsideFront">
      <div className="CACGmainBox">
        
        <div className='CACGrightbox'>
        <div className='CACGbottomBox'>
          <div className='CACGTitle'>What is the capial of</div>
          <div className='CACGTitleCountry'>{removedElementTwo} ?</div>
          <div className='CACGTitleFlag'>
          <img className="CACGPhoto" src={theFlag} alt="logo"></img>
          </div>
          <div className='CACGTitleInput'>
            <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyPress={handleKeyPress}
      id="CACGInputBox"
    />
    <button  id="CACGInputButton"
    onClick={handleGuessTwo}
    >
      Guess</button>
      </div>
          <div className='CACGTitleScore'>Your score is {score} / 49</div>
          <div className='CACGTitleInfo'>Countrys and Capital game enter the
           capital of the listed country if
          you beat your prevoius record it will update it on the home page.
          <button onClick={myFlag}>show flag</button>
          <br/>
          <br/>
          <button onClick={navigateBackHome}>return home</button>
          <br/>
          {/* <button onClick={updateScore}>return too home</button> */}
          </div>
          <p>your best is {CACScore}</p>
        </div>
        </div>

<div className='CACGrightboxWin'>
        <div className='CACGbottomBoxWin'>
          <img className="CACGBoxWinCanvas" src={Fireworks} alt="fireworks"></img>
          <div className='CACGBoxWinTop'>
          you win
          <h6>49 / 49</h6>
          <button className='CACGBoxWinButton' onClick={navigateBackHome }>return home</button>
          </div>
      </div>
      </div>


      <div className='CACGrightboxLose'>
        <div className='CACGbottomBoxLose'>
          <p>you lose</p>
          <p>false you lose your score was {score}</p>
          <p>
          the answer was {removedElement}
          </p>
          <button onClick={playAgain }>play again</button>
          <button onClick={navigateBackHome}>return home</button>
      </div>
      </div>

      </div>  
    </div>
  )
}

export default CACGame











































































































































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




































































































// <div className="CACGoutsideFront">
//       <div className="CACGmainBox">
//         <div className='CACGrightbox'>
          
//           <div className='CACGTitle'>What is the capital of ? </div>

//           <div>What is the capital of ? </div>

//           <div>What is the capital of ? </div>

//           <div>What is the capital of ? </div>

//         </div>
//       </div>  
//     </div>





// const [seconds, setSeconds] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds(seconds => seconds + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);
//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = seconds % 60;
//   useEffect(() => {
//     if (seconds === 600) {
//       window.alert('You lose!');
//       window.location.reload(false);
//     }
//   }, [seconds]);
//   const handleClickTime = () => {
//     window.alert(`${minutes} minutes ${remainingSeconds} seconds`);
//     window.location.reload(false);
//   };
{/* <br/>Timer: 
    {minutes < 10 ? '0' : ''}
      {minutes}:
    {remainingSeconds < 10 ? '0' : ''}
    {remainingSeconds}
    <br/>
    <br/>
    <button onClick={handleClickTime}>Show Time</button> */}












// if (text.includes(Enter)) {
    //   alert("'The lette");
    // }
    // if (event.key === 'Enter') {
    //   alert('The "enter" key was pressed.');
    // }


  //  const handleGuess = () =>{
  //   if(Guess.toUpperCase() == randomCapitals.toUpperCase()){
  //     getRandomNumber();
  //     setCount(count + 1);
  //   }else{
  //     alert("false you lose your score was" + count)
  //     setCount(0);
  //     window.location.reload(false);
  //   }
  // }

// const handleKeyDown = (event) => {
    //   if (event.key === 'Enter') {
    //     handleGuess()
    //   }
    // }
    // useEffect(() => {
    //   window.addEventListener('keydown', handleKeyDown);
    //   return () => {
    //     window.removeEventListener('keydown', handleKeyDown);
    //   };
    // }, []);

    {/* <form>
      <label>Enter your name:
        <br/>
        <input className="CACGinputBoxTwo" type="text" />
      </label>
    </form> */}

    //   useEffect(() => {
    //    if(Guess.toUpperCase() == randomCapitals.toUpperCase()){
    //   getRandomNumber();
    //   setCount(count + 1);
    // }else{
    //   alert("false you lose your score was" + count)
    // }
    // }, []);


 // var inputBox = document.getElementById('input-box');
    {/* <input type="text"  onKeyDown={this.handleKeyDown} id="input-box"></input> */}






//     import React, { useState } from 'react';

// function MyInput() {
//   const [inputValue, setInputValue] = useState('');

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       prompt('Enter a value:', inputValue);
//     }
//   };

//   return (
//     <input
//       type="text"
//       value={inputValue}
//       onChange={(event) => setInputValue(event.target.value)}
//       onKeyDown={handleKeyDown}
//     />
//   );
// }


// inputBox.addEventListener('keydown', function(event) {
  //   if (event.key === 't') {
  //     alert(inputBox.value);
  //   }
  // });

  // document.getElementById('input-box').addEventListener('keydown', function(event) {
  //   if (event.key === 'Enter') {
  //     alert(event.target.value);
  //     event.target.value = '';
  //   }
  // });
  // class InputField extends React.Component {
    
  // handleKeyDown = (event) => {
    //   if (event.key === 'Enter') {
    //     alert(event.target.value);
    //   }
    // }










    // const newArray = this.state.myCountrys.slice();
        // newArray.splice(4, 1);
        // this.setState({stringArray: newArray});

        // myCountrys.splice(randomNumber);
        // myCapitals.splice(randomNumber);


























































// import React, { useState, useEffect } from 'react';
// import TopBar from '../home/TopBar';
// import './CACGame.css';

// import {
//   TextField,
//   Button,
// } from "@mui/material";

// function CACGame() {
//   const [randomNumber, setrandomNumber] = useState(Math.round(Math.random() * 30));
//   const [randomCountry, setRandomCountry] = useState("");
//   const [randomCapitals, setRandomCapitals] = useState("");
//   // const [Guess, setGuess] = useState("");

//   const [count, setCount] = useState(0);

  

//   function getRandomNumber() {
//     setrandomNumber(Math.round(Math.random() * 30));
//     const myCountrys = [
//       // 1-6	
//      "Albania"	,"Andorra","Armenia","Austria","Belarus","Belgium",
//      //7-11
//       "Bosnia and Herzegovina","Bulgaria",	"Croatia",	"Cyprus",	"Czechia",
//       //12-18
//       "Denmark", "Estonia",	"Finland",	"France",	"Georgia",	"Germany",	"Greece",	
//       //19-25 
//       "Hungary",	"Iceland","Ireland","Italy","Kosovo",	"Latvia",	"Liechtenstein",	
//       //26-31  
//       "Lithuania",	"Luxembourg",	"Malta","Moldova",	"Monaco",	"Montenegro",	
//       //32-36  
//       "Netherlands",	"North Macedonia",	"Norway"	,"Poland"	,"Portugal",	
//       //37-42  
//       "Romania"	,"Russia"	,"San Marino",	"Serbia"	,"Slovakia",	"Slovenia",	
//       //43-49  
//       "Spain",	"Sweden",	"Switzerland"	,"Turkey" , "Ukraine" ,"United Kingdom", "Vatican City"
//         ];
//     const myCapitals = [	
//           //1-6
//           "Tirana","Andorra la Vella","Yerevan","Vienna","Minsk","Brussels",
//           //7-11
//           "Sarajevo","Sofia","Zagreb","Nicosia","Prague",
//           //12-18
//           "Copenhagen","Tallinn","Helsinki","Paris","Tbilisi","Berlin","Athens",
//           //19-25
//           "Budapest","Reykjavik","Dublin","Rome","Pristina","Riga","Vaduz",
//           //26-31
//           "Vilnius","Luxembourg City","Valletta","Chisinau","Monaco","Podgorica",
//           //32-36
//           "Amsterdam","Skopje","Oslo","Warsaw","Lisbon",
//           //37-42 
//           "Bucharest","Moscow","San Marino","Belgrade","Bratislava","Ljubljana",
//            // 43-49
//           "Madrid","Stockholm","Bern","Ankara","Kyiv","London","Vatican City",
//         ];
//         setRandomCountry(myCountrys[randomNumber])
//         setRandomCapitals(myCapitals[randomNumber])
//   }
 
//  const handleStart = () => {
//     getRandomNumber()
//   }

//   const [value, setValue] = useState('');

//   const handleGuessTwo = () =>{
//     if(value.toUpperCase() == randomCapitals.toUpperCase()){
//       // myCountrys.splice(randomNumber);
//       // myCapitals.splice(randomNumber);
//       getRandomNumber();
//       setCount(count + 1);
//       clearText()
//     }else{
//       alert("false you lose your score was" + count)
//       setCount(0);
//       window.location.reload(false);
//     }
//   }

//   function handleChange(event) {
//     const text = event.target.value
//     setValue(text);
//     // setValue(event.target.value);
//   }

//   function clearText() {
//     setValue('');
//   }

//   // Get a reference to the text field
// // const textField = document.querySelector('#text-field');

// // // Add an event listener to the text field
// // textField.addEventListener('keydown', function(event) {
// //   // Check if the key that was pressed is the Enter key
// //   if (event.key === 'Enter') {
// //     // Display the alert message
// //     alert('Hi!');
// //   }
// // });


// // const [inputValue, setInputValue] = useState('');

// //   const handleKeyDown = (event) => {
// //     if (event.key === 'Enter') {
// //       alert('Enter a value:', inputValue);
// //     }
// //   };

//   //

//   document.getElementById('input-box').addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//       // alert(event.target.value);
//       event.target.value = '';
//     }
//   });

//   return (
//     <div>
//       <TopBar />
//          <div className="CACGBackground">
//          <div className="CACGBackgroundTwo">
//            <div className="CACGLanguagesExplain">
//               <br/><br/>
//               the country<br/>{randomCountry}<br/><br/>
//               the capital<br/>{randomCapitals}<br/><br/>
//               the score<br/>{count} / 49<br/><br/>

//              <Button variant="contained" onClick={handleStart}>start</Button>
//              <br/><br/><br/>

//        <form>
//       <TextField id="text-field" label="Enter the capital" value={value} onChange={handleChange}/>
//       <Button variant="contained" onClick={handleGuessTwo}>check</Button>
//     </form>

//        <br/>
//        <br/>
//        <br/>
//        {/* <input
//       type="text"
//       value={inputValue}
//       onChange={(event) => setInputValue(event.target.value)}
//       onKeyDown={handleKeyDown}
//     /> */}

//     <br></br>
//     <input type="text" id="input-box"></input>
//            </div>
//          </div>
//        </div>
     
//     </div>
//   )
// }

// export default CACGame





































// import React, { useState, useEffect } from 'react';
// import TopBar from '../home/TopBar';
// import './CACGame.css';

// function CACGame() {
//   const [listLength, setListLength] = React.useState(49);
//   const [randomNumber, setrandomNumber] = useState(Math.round(Math.random() * listLength));
//   const [randomCountry, setRandomCountry] = useState("");
//   const [randomCapitals, setRandomCapitals] = useState("");
//   // const [Guess, setGuess] = useState("");

//   const [count, setCount] = useState(0);

//   function getRandomNumber() {
//     setrandomNumber(Math.round(Math.random() * listLength));
//     // setrandomNumber(Math.round(Math.random() * myCountrys.length));
//     const myCountrys = [
//       // 1-6	
//      "Albania"	,"Andorra","Armenia","Austria","Belarus","Belgium",
//      //7-11
//       "Bosnia and Herzegovina","Bulgaria",	"Croatia",	"Cyprus",	"Czechia",
//       //12-18
//       "Denmark", "Estonia",	"Finland",	"France",	"Georgia",	"Germany",	"Greece",	
//       //19-25 
//       "Hungary",	"Iceland","Ireland","Italy","Kosovo",	"Latvia",	"Liechtenstein",	
//       //26-31  
//       "Lithuania",	"Luxembourg",	"Malta","Moldova",	"Monaco",	"Montenegro",	
//       //32-36  
//       "Netherlands",	"North Macedonia",	"Norway"	,"Poland"	,"Portugal",	
//       //37-42  
//       "Romania"	,"Russia"	,"San Marino",	"Serbia"	,"Slovakia",	"Slovenia",	
//       //43-49  
//       "Spain",	"Sweden",	"Switzerland"	,"Turkey" , "Ukraine" ,"United Kingdom", "Vatican City"
//         ];
//     const myCapitals = [	
//           //1-6
//           "Tirana","Andorra la Vella","Yerevan","Vienna","Minsk","Brussels",
//           //7-11
//           "Sarajevo","Sofia","Zagreb","Nicosia","Prague",
//           //12-18
//           "Copenhagen","Tallinn","Helsinki","Paris","Tbilisi","Berlin","Athens",
//           //19-25
//           "Budapest","Reykjavik","Dublin","Rome","Pristina","Riga","Vaduz",
//           //26-31
//           "Vilnius","Luxembourg City","Valletta","Chisinau","Monaco","Podgorica",
//           //32-36
//           "Amsterdam","Skopje","Oslo","Warsaw","Lisbon",
//           //37-42 
//           "Bucharest","Moscow","San Marino","Belgrade","Bratislava","Ljubljana",
//            // 43-49
//           "Madrid","Stockholm","Bern","Ankara","Kyiv","London","Vatican City",
//         ];
//         setRandomCountry(myCountrys[randomNumber])
//         setRandomCapitals(myCapitals[randomNumber])

//         // myCountrys.splice(randomNumber, 1);
//         // myCapitals.splice(randomNumber, 1);

//         // myCountrys.splice(randomNumber, 1)[0];
//         // myCapitals.splice(randomNumber, 1)[0];

//         setListLength(listLength - 1);
//   }

//   useEffect(() => {
//     getRandomNumber();
//   }, []);

//   const [inputValue, setInputValue] = useState('');

//   const handleGuessTwo = () =>{
//     if(inputValue.toUpperCase() == randomCapitals.toUpperCase()){
//       getRandomNumber();
//       setCount(count + 1);
//       setInputValue('');
//     }else{
//       alert("false you lose your score was " + count)
//       setCount(0);
//       window.location.reload(false);
//     }
//   }

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       handleGuessTwo();
//     }
//   };

//   useEffect(() => {
//     if (count === 49) {
//       window.alert('You win!');
//       window.location.reload(false);
//     }
//   }, [count]);


//   return (
//     <div>
//       <TopBar />
//          <div className="CACGBackground">
//          <div className="CACGBackgroundTwo">
//            <div className="CACGLanguagesExplain">
//     <br></br><br/><p>{count} / 49</p>
//     <br/><br/><p>{randomCountry}</p>
//     <br/><br/><p>{randomCapitals}</p>
//     <br/><br/>list length {listLength + 1}
//     <br/><br/>
//     <input
//       type="text"
//       value={inputValue}
//       onChange={(e) => setInputValue(e.target.value)}
//       onKeyPress={handleKeyPress}
//       id="CACGInputBox"
//     />
//     <br/>
//     <br/>
//     <button onClick={handleGuessTwo}>Guess</button>
//            </div>
//          </div>
//        </div>
     
//     </div>
//   )
// }

// export default CACGame