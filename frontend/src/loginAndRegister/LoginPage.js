import './loginPage.css';

import * as React from 'react';
import { useEffect } from 'react';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";


import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";


import myImage from './../photos/googlelogo.jpg'
import myImageTwo from './../photos/googleplaystore.png'
import myImageThree from './../photos/applestore.png'

function LoginPage() {

  const navigate = useNavigate();

  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')
  const [LPwarning, setLPwarning] = useState(false)
  const [keepSignIn, setkeepSignIn] = useState(true)


  const [emailTest, setEmailTest] = useState('')
  const [emailTestText, setEmailTestText] = useState('')

  const handleLogin = async (e) => {  
    e.preventDefault();
    const req = await fetch("http://localhost:1337/login", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: await JSON.stringify({
            emailLogin,
            passwordLogin,
        }),
    }); 
    const data = await req.json();
    if(data.status == 'ok'){
      localStorage.setItem("token", data.token)
        navigate("/home");
    }else{
        setEmailTest('false');setEmailTestText('email or password is wrong');
    }
  };

  return (
    <div className="LPoutside">

      <div className="LPlogo"><img className="LPlogoPhoto" src={myImage} alt="logo"></img></div>

       <div className="LPemail">
        <TextField id="LPemail" label="Email" variant="outlined" type="text" 
        error={emailTest} helperText={emailTestText}
        onChange={(event) => {setEmailLogin(event.target.value);}}/>
        </div>

       <div className="LPpassword">
        <TextField id='LPfirstPassword' label="Password" variant="outlined" type="password" onChange={(event) => {setPasswordLogin(event.target.value);}}/>
        <p className={LPwarning ? 'LPwarningRed' : 'LPwarningWhite'}>username and password do not match</p>
        </div>
       
       <div className="LPbutton"><Button variant="contained" onClick={handleLogin}>Sign up</Button></div>

       <div className="LPgetTheApp">
        <h4>Get the App.</h4>
        <hr/>
       </div>

       <div className="LPTheApp">
        <button className='LPplaystoreButton'>
          <img className="LPplaystoreButtonPhoto" src={myImageTwo} alt=" store"></img>
          </button>
        <button className='LPappstoreButton'>
          <img className="LPapplestoreButtonPhoto" src={myImageThree} alt="app store"></img>
          </button>
       </div>

    </div>
  );
}

export default LoginPage;
