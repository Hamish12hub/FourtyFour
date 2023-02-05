import './LoginRegister.css';
import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"
import myImage from './../photos/iphone.jpg'

function LoginRegister() {

    const LoginButton = () =>{
        document.getElementsByClassName("LRbottomBoxLogin")[0].style.zIndex = 10;
        document.getElementsByClassName("LRbottomBoxRegister")[0].style.zIndex = 1;
        document.getElementsByClassName("LRloginButton")[0].style.backgroundColor = "white";
        document.getElementsByClassName("LRregisterButton")[0].style.backgroundColor = "grey";
    }
    
    const RegisterButton = () =>{
        document.getElementsByClassName("LRbottomBoxRegister")[0].style.zIndex = 10;
        document.getElementsByClassName("LRbottomBoxLogin")[0].style.zIndex = 1;
        document.getElementsByClassName("LRloginButton")[0].style.backgroundColor = "grey";
        document.getElementsByClassName("LRregisterButton")[0].style.backgroundColor = "white";
    }

  return (
    <div className="LRoutsideFront">
      <div className="LRmainBox">
        <div className='LRleftbox'>
        <img className="LRiphonePhoto" src={myImage} alt="iphone"></img>
        </div>
        <div className='LRrightbox'>
        <div className='LRtopBox'>
        <div className='LRtopLeft'>
            <button onClick={LoginButton} className="LRloginButton">
            <h1>Login</h1>
            </button>
        </div>
        <div className='LRtopRight'>
        <button onClick={RegisterButton} className="LRregisterButton">
                <h1>Register</h1>
            </button>
        </div>
        </div>
        <div className="LRbottomBox">
        <div className='LRbottomBoxLogin'>
        <LoginPage/>
        </div>
        <div className='LRbottomBoxRegister'>
        <RegisterPage/>
        </div>
        </div>
        </div>
      </div>  
    </div>
  );
}
export default LoginRegister;