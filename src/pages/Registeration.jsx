import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { account } from '../appwrite-config/config';
import { useNavigate } from 'react-router-dom';
import './Registeration.css'

function Registeration() {

  const [name,setname] = useState();
  const[passowrd,setpassowrd] = useState("")
  const[email,setemail] = useState();

  const navigate = useNavigate();

  const registerHandler = (e)=>{
    e.preventDefault();

    

    const register = async()=>{

      try {

        var user = await account.create('unique()',email,passowrd,name);
        navigate('/choice');
        console.log(user);
        
      } catch (error) {
          alert(error)
          console.log(error);
      }
        setemail("");
        setname("");
        setpassowrd("");

    }

    if (name==="" || passowrd==="" || email==="") {
      alert("enter all field");
    }else{
      register();
    }
    
  }

  return (
    <div>
      <div className="container-register">
        <div className="box-register">
          <form onSubmit={registerHandler}>
            <label>Name</label>
            <input className='register-input' type="text" placeholder='Enter your name' onChange={(e)=>{setname(e.target.value)}} value={name}/>
            <label >Email</label>
            <input className='register-input' onChange={(e)=>{setemail(e.target.value)}} value={email} type="email" placeholder='enter your email'/>
            <label>Password</label>
            <input className='register-input' onChange={(e)=>{setpassowrd(e.target.value)}} value={passowrd} type="password" placeholder='Enter your password' />
            <input className='register-submit-btn' type="submit" placeholder='create'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registeration
