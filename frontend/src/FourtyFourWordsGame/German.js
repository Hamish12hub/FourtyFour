import React, { useState, useEffect } from 'react';
import './AALanguages.css';
import {decodeToken} from 'react-jwt'
import { useNavigate } from "react-router-dom";
import Fireworks from '../photos/fireworks.jpg'
import theFlag from '../photos/flags/German.png';




function German() {

  const TheLanguage = "German"

       const [score, setScore] = useState(-1);
    const [myOtherLanguage, setMyOtherLanguage] = useState([
     //1-10
'Hallo','Hallo','Danke','Bitte','Und','Das','Ja','Nein','Guten Morgen','Guten Nachmittag',
//11-21
'Essen','Eier','Milch','Brot','Chips','Fisch','Schokolade','Pizza','Wasser','Bier','Wein',
// 22-29
'Restaurant','Haus','Strand','Geschaft','Stadt','Schwimmbad','Park','Toilette',
//30-35
'Die Rechnung','Geld','Telefon','Vegetarisch','Zug','Auto',
//36-44
"Einer","Zwei","Drei","Vier","Funf","Sechs","Sieben","Acht","Neun",
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
    const newUrl = currentUrl.replace("/german", "");
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
    const req = await fetch('http://localhost:1337/GermanScore', {
      headers: {'x-access-token': token},
    })
    const data = await req.json()
    if(data.status == "ok"){
      setOldScore(data.german)
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
    const req = await fetch('http://localhost:1337/UpdatingGermanScore', {
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

export default German
















































// import React, { useState, useEffect } from 'react';
// import './AALanguages.css';
// import {decodeToken} from 'react-jwt'
// import { useNavigate } from "react-router-dom";
// import Fireworks from '../photos/fireworks.jpg'

// import Bulgarian from '../photos/flags/Bulgaria.png';import Croatian from '../photos/flags/Croatia.png';
// import Czech from '../photos/flags/Czechia.png';import Danish from '../photos/flags/Denmark.png'
// import Dutch from '../photos/flags/Netherlands.png';import English from '../photos/flags/England.png';
// import Estonian from '../photos/flags/Estonia.png';import Finnish from '../photos/flags/Finland.png'
// import French from '../photos/flags/French.png';
// // import German from '../photos/flags/German.png';
// import Greek from '../photos/flags/Greece.png';
// import Hungarian from '../photos/flags/Hungary.png';
// import Irish from '../photos/flags/Ireland.png';import Italian from '../photos/flags/Italian.png'
// import Latvian from '../photos/flags/Latvia.png';import Lithuanian from '../photos/flags/Lithuania.png';
// import Maltese from '../photos/flags/Malta.png';import Polish from '../photos/flags/Poland.png';
// import Portuguese from '../photos/flags/Portugal.png';import Romanian from '../photos/flags/Romania.png';
// import Slovak from '../photos/flags/Slovakia.png';import Slovenian from '../photos/flags/Slovenia.png';
// // import Spanish from '../photos/flags/Spain.png';
// import Swedish from '../photos/flags/Sweden.png';



















// import Albania from '../photos/flags/Albania.png';import Andorra from '../photos/flags/Andorra.png'
// import Armenia from '../photos/flags/Armenia.png';import Austria from '../photos/flags/Austria.png'
// import Belarus from '../photos/flags/Belarus.png';import Belgium from '../photos/flags/Belgium.png'
// import Bosnia_and_Herzegovina from '../photos/flags/BosniaAndHerzegovina.png';import Bulgaria from '../photos/flags/Bulgaria.png'
// import Croatia from '../photos/flags/Croatia.png';import Cyprus from '../photos/flags/Cyprus.png'
// import Czechia from '../photos/flags/Czechia.png';import Denmark from '../photos/flags/Denmark.png'
// import Estonia from '../photos/flags/Estonia.png';import Finland from '../photos/flags/Finland.png'
// import France from '../photos/flags/French.png';import Georgia from '../photos/flags/Georgia.png'
// import Germany from '../photos/flags/German.png';import Greece from '../photos/flags/Greece.png'
// import Hungary from '../photos/flags/Hungary.png';import Iceland from '../photos/flags/Iceland.png'
// import Ireland from '../photos/flags/Ireland.png';import Italy from '../photos/flags/Italian.png'
// import Kosovo from '../photos/flags/Kosovo.png';import Latvia from '../photos/flags/Latvia.png'
// import Liechtenstein from '../photos/flags/Liechtenstein.png';import Lithuania from '../photos/flags/Lithuania.png';
// import Luxembourg from '../photos/flags/Luxembourg.png';import Malta from '../photos/flags/Malta.png';
// import Moldova from '../photos/flags/Moldova.png';import Monaco from '../photos/flags/Monaco.png';
// import Montenegro from '../photos/flags/Montenegro.png';import Netherlands from '../photos/flags/Netherlands.png';
// import North_Macedonia from '../photos/flags/NorthMacedonia.png';import Norway from '../photos/flags/Norway.png'
// import Poland from '../photos/flags/Poland.png';import Portugal from '../photos/flags/Portugal.png'
// import Romania from '../photos/flags/Romania.png';import Russia from '../photos/flags/Russia.png';
// import San_Marino from '../photos/flags/SanMarino.png';import Serbia from '../photos/flags/Serbia.png';
// import Slovakia from '../photos/flags/Slovakia.png';import Slovenia from '../photos/flags/Slovenia.png';
// import Spain from '../photos/flags/Spain.png';import Sweden from '../photos/flags/Sweden.png'
// import Switzerland from '../photos/flags/Switzerland.png';import Turkey from '../photos/flags/Turkey.png';
// import Ukraine from '../photos/flags/Ukraine.png';import United_Kingdom from '../photos/flags/UnitedKingdom.png';
// import Vatican_City from '../photos/flags/VaticanCity.png';





// function German() {

//        const [score, setScore] = useState(-1);

//     const [myGerman, setmyGerman] = useState([
//       //1-8
//       "Hallo","Hi","Dankeschön","Bitte","Und","Die","Guten Morgen","Guten Nachmittag",
//       //9-19
//       "Essen","Eier","Milch","Brot","Chips","Fisch","Schokolade","Pizza","Wasser","Bier","Wein",
//       // 20-28
//       "Restaurant","Haus","Strand","Markt","Einkaufen","Stadt","Schwimmbad","Park","Toilette",
//       //29-35
//       "Die Rechnung","Geld","Telefon","Vegetarier","Reisepass","Bahn","Auto",
//       //36-44
//       "Einer","Zwei","Drei","Vier","Fünf","Sechs","Sieben","Acht","Neun",
//     ]);

//     const [mySpainish, setMySpainish] = useState([
//       //1-8
//       "Hola","Hola","Gracias","Por favor","Y","El","Buenos días","Buenas tardes",
//       //9 - 19
//       "Comida","Huevos","Leche","Pan de molde","Papas fritas","Pez","Chocolate","Pizza","Agua","Cerveza","Vino",
//       // 20 - 28
//       "Restaurante","casa","playa","Mercado","Tienda","ciudad","Piscina","parque","Inodoro",
//       //29-35
//       "La factura","Dinero","Teléfono","Vegetariano","Pasaporte","Tren","Coche",
//       //36-44
//        "Uno","Dos","Tres","Cuatro","Cinco","Seis","Siete","Ocho","Nueve"
//     ]);

//     const [myEnglishWords, setMyEnglishWords] = useState([
//     //1-8
//     "Hello","Hi","Thank you","Please","And","The","Good Morning","Good Afternoon",
//     //9 - 19
//     "Food","Eggs","Milk","Bread","Chips","Fish","Chocolate","Pizza","Water","Beer","Wine",
//     //20-28
//     "Restaurant","House","Beach","Market","Shop","City","Swimming pool","Park","Toilet",
//     //29-35
//     "The bill","Money","Phone","Vegetarian","Passport","Train","Car",
//     //36-44
//     "One","Two","Three","Four","Five","Six","Seven","Eight","Nine"
//     ]);

//     const [removedElement, setRemovedElement] = useState('');
//      const [removedElementTwo, setRemovedElementTwo] = useState('');


//           const removeElement = () => {
//         // Generate a random index
//         const index = Math.floor(Math.random() * mySpainish.length);
//         // Remove the element at the random index
//         const updatedCapitals = mySpainish.slice();
//         const updatedCountries = myEnglishWords.slice();
//         const [removedCapital] = updatedCapitals.splice(index, 1);
//         const [removedCountry] = updatedCountries.splice(index, 1);
//         setMySpainish(updatedCapitals);
//         setMyEnglishWords(updatedCountries);
//         setRemovedElement(removedCapital);
//         setRemovedElementTwo(removedCountry);
//         setScore(score + 1);
//       }

//   const [inputValue, setInputValue] = useState('');

//   const handleGuessTwo = () =>{
//     if(inputValue.toUpperCase() == removedElement.toUpperCase()){
//       setInputValue('');
//       checkFunction()
//     }else{
//       Lost()
//     }
//   }


//   const Lost = () =>{
//     document.getElementsByClassName("CACGrightbox")[0].style.display = "none";
//     document.getElementsByClassName("CACGrightboxLose")[0].style.display = "block";
//   }

//   const Win = () =>{
//     document.getElementsByClassName("CACGrightbox")[0].style.display = "none";
//     document.getElementsByClassName("CACGrightboxWin")[0].style.display = "block";
//   }

//         const checkFunction = () => {
//         if(score == 44){
//           Win()
//         }
//         removeElement();
//       }






//         const playAgain = () =>{
//     window.location.reload(false);
//   }

//   const navigateBackHome = () => {
//     window.location.href = 'http://localhost:3000/home';
//   }

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       handleGuessTwo();
//     }
//   };
    
//     const [newStr, setNewStr] = useState("");
//     useEffect(() => {
//       const str = window.location.href;
//       setNewStr(str.replace('http://localhost:3000/home/FFWGame?', ''));
//     })
  
// const [theFlag, setTheFlag] = useState('');
//   useEffect(() => {
//     switch (newStr) {
//       case 'bulgarian': setTheFlag(Bulgarian); break;
//       case 'croatian': setTheFlag(Croatian); break;
//       case 'czech': setTheFlag(Czech); break;
//       case 'danish': setTheFlag(Danish); break;
//       case 'dutch': setTheFlag(Dutch); break;
//       case 'estonian': setTheFlag(Estonian); break;
//       case 'english': setTheFlag(English); break;
//       case 'finnish': setTheFlag(Finnish); break;
//       case 'french': setTheFlag(French); break;
//       case 'english': setTheFlag(English); break;
//     //   case 'german': setTheFlag(German); break;
//       case 'greek': setTheFlag(Greek); break;
//       case 'hungarian': setTheFlag(Hungarian); break;
//       case 'irish': setTheFlag(Irish); break;
//       case 'italian': setTheFlag(Italian); break;
//       case 'latvian': setTheFlag(Latvian); break;
//       case 'lithuanian': setTheFlag(Lithuanian); break;
//       case 'maltese': setTheFlag(Maltese); break;
//       case 'polish': setTheFlag(Polish); break;
//       case 'portuguese': setTheFlag(Portuguese); break;
//       case 'romanian': setTheFlag(Romanian); break;
//       case 'slovak': setTheFlag(Slovak); break;
//       case 'slovenian': setTheFlag(Slovenian); break;
//     //   case 'spanish': setTheFlag(Spanish); break;
//       case 'swedish': setTheFlag(Swedish); break;    
//       default:
//     }
// })


//   useEffect(() => {
//     checkFunction();
//   }, []);



//   return (
//         <div className="CACGoutsideFront">
//       <div className="CACGmainBox">
        
//         <div className='CACGrightbox'>
//         <div className='CACGbottomBox'>
//           <div className='CACGTitle'>Learn {newStr}</div>
//           <div className='CACGTitleFlag'>
//           <img className="CACGPhoto" src={theFlag} alt="logo"></img>
//           </div>
//           <div>what is this english word in {newStr} </div>
//           <div className='CACGTitleCountry'>
//              {removedElementTwo} ? 
//           </div>
//           <div className='CACGTitleInput'>
//             <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleKeyPress} id="CACGInputBox"/>
//     <button  id="CACGInputButton" onClick={handleGuessTwo}>Guess</button>
//       </div>
//           <div className='CACGTitleScore'>Your score is {score} / 44</div>
//         </div>
//         </div>

// <div className='CACGrightboxWin'>
//         <div className='CACGbottomBoxWin'>
//           <img className="CACGBoxWinCanvas" src={Fireworks} alt="fireworks"></img>
//           <div className='CACGBoxWinTop'>
//           you win
//           <h6>44 / 44</h6>
//           <button className='CACGBoxWinButton' onClick={navigateBackHome }>return home</button>
//           </div>
//       </div>
//       </div>


//       <div className='CACGrightboxLose'>
//         <div className='CACGbottomBoxLose'>
//           <p>you lose</p>
//           <p>false you lose your score was {score}</p>
//           <p>
//           the answer was {removedElement}
//           </p>
//           <button onClick={playAgain }>play again</button>
//           <button onClick={navigateBackHome}>return home</button>
//       </div>
//       </div>

//       </div>  
//     </div>
//   )
// }

// export default German