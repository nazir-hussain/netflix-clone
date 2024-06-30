// import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif'

function Login() {

  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const user_auth = async (event)=>{
    event.preventDefault();
    setLoading(true);
    if(signState==="Sign In"){
      await login(email, password);
    }else{
      await signup(name, email, password);
    }
    setLoading(false);
  }


  return (
    loading?<div className="login_spiner">
      <img src={'netflix_spinner'} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} className='login_logo' alt="" />
      <div className="login_form">
        <h1>{signState}</h1>
        <form>
          {signState === 'Sign Up'?<input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Your name'/>:<></>}
          
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email'/>
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='password'/>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form_help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Rember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form_switch">
          {signState === "Sign In"?
          <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>
          :<p>Allready Have account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
          
        </div>
      </div>
    </div>
  )
}

export default Login