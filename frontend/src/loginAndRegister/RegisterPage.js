import './registerPage.css';
import * as React from 'react';
import { useEffect } from 'react';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

import myImageTwo from './../photos/googleplaystore.png'
import myImageThree from './../photos/applestore.png'

import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";


function RegisterPage() {

  const navigate = useNavigate();

  const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [secondPassword, setSecondPassword] = useState('')
    
    const [nameTest, setNameTest] = useState('')
    const [nameTestText, setNameTestText] = useState('')
    const [emailTest, setEmailTest] = useState('')
    const [emailTestText, setEmailTestText] = useState('')
    const [passwordTest, setPasswordTest] = useState('')
    const [passwordTestText, setPasswordTestText] = useState('')
    
    const [secondPasswordTest, setSecondPasswordTest] = useState('')
    const [secondPasswordTestText, setSecondPasswordTestText] = useState('')

    const [keepSignIn, setkeepSignIn] = useState(true)

  const handleRegister = async (e) => {
    var nameValue = document.getElementById("RPname").value;
        var emailValue = document.getElementById("RPemail").value;
        var passwordValue = document.getElementById("RPpassword").value;
        var secondPasswordValue = document.getElementById("RPsecondPassword").value;
        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
        const regexExpTwo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
        if((nameValue.length <= 1) || (/[^a-zA-Z]/.test(nameValue))){
          setNameTest('false');setNameTestText('that is not a real name');
        }else{setNameTest('');setNameTestText('');
        }
        if(!(regexExp.test(emailValue))){
            setEmailTest('false');setEmailTestText('not a real email or email is taken');
        }else{setEmailTest('');setEmailTestText('');
        }
        if(passwordValue.length <= 7){
            setPasswordTest('false');setPasswordTestText('password must be 8 characters long');
        }else{setPasswordTest('');setPasswordTestText('');
        }
        if(!(passwordValue === secondPasswordValue)){
            setSecondPasswordTest('false');setSecondPasswordTestText('the passwords do not match');
        }else{setSecondPasswordTest('');setSecondPasswordTestText('');
        }
        if(!(nameValue.length <= 1) && !(/[^a-zA-Z]/.test(nameValue)) 
        && (regexExpTwo.test(emailValue)) && !(passwordValue.length <= 1) 
        && (passwordValue === secondPasswordValue)){
          e.preventDefault();
          const req = await fetch("http://localhost:1337/register", {
          method: "POST",
         headers: {'Content-Type': 'application/json'},
         body: await JSON.stringify({
          name,
          email,
          password,
      }),
      });
       const data = await req.json()
    if(data.status == 'ok1'){
      localStorage.setItem("token", data.token)
      navigate("/home");
    }else{
      setEmailTest('false');setEmailTestText('not a real email or email is taken');
    }
    }
};
  
  return (
    <div className="RPoutside">


<TextField id="RPname" label="Name" variant="outlined" type="text" 
    error={nameTest} helperText={nameTestText}
    onChange={(event) => {setName(event.target.value);}}/>

    <TextField id="RPemail" label="Email" variant="outlined" type="text" 
    error={emailTest} helperText={emailTestText}
    onChange={(event) => {setEmail(event.target.value);}}/>

    <TextField id="RPpassword" label="Password" variant="outlined" type="password" 
    error={passwordTest} helperText={passwordTestText}
    onChange={(event) => {setPassword(event.target.value);}}/>

    <TextField id="RPsecondPassword" label="Second Password" variant="outlined" type="password" 
    error={secondPasswordTest} helperText={secondPasswordTestText}
    onChange={(event) => {setPassword(event.target.value);}}/>

<Button variant="contained" onClick={handleRegister}>Sign up</Button>
    

       <div className="RPgetTheApp">
        <h4>Get the App.</h4>
        <hr/>
       </div>

       <div className="RPTheApp">
        <button className='RPplaystoreButton'>
          <img className="RPplaystoreButtonPhoto" src={myImageTwo} alt="play store"></img>
          </button>
        <button className='RPappstoreButton'>
          <img className="RPappstoreButtonPhoto" src={myImageThree} alt="app store"></img>
          </button>
       </div>
       


    </div>
  );
}

export default RegisterPage;