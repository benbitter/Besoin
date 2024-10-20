import React from 'react'
import { useState } from 'react';
import { account } from '../appwrite-config/config'
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login1() {

  const navigate = useNavigate();
  const[email,setemail] =useState("");
  const[passowrd,setpassowrd] =useState("");

  const LoginHandler = (e)=>{
    e.preventDefault();
    
    const login = async()=>{
      try {
        const user = await account.createEmailPasswordSession(email,passowrd)
        console.log(user);
        console.log(email)
        navigate('/form') // always use " / " while using navigate
        
      } catch (error) {
        alert(error);
        console.log(error)
      }
      
    }

    if (passowrd==="" || email==="") {
      alert("email or password is incorrect");
    }else{
      login();
    }
    
    setemail("");
    setpassowrd("");

  }


  return (
    <div>
      <div className="container-login">
        <div className="box-login">
          <form className='login-form' onSubmit={LoginHandler}>
            <label >Email</label>
            <input className='login-input' onChange={(e)=>{setemail(e.target.value)}} value={email} type="email" placeholder='enter your email'/>
            <label>Password</label>
            <input className='login-input' onChange={(e)=>{setpassowrd(e.target.value)}} value={passowrd} type="password" placeholder='Enter your password' />
            <input  className='btn-login-submit' type="submit" placeholder='create'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login1
