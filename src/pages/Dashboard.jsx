import React from 'react'
import { useNavigate } from 'react-router-dom'
import { account } from '../appwrite-config/config'
import { useState } from 'react'
import './dashboard.css'

function Dashboard() {


  const navigate = useNavigate();
  const logoutHandler = ()=>{

    try {
      var x = account.deleteSession("current");
      navigate("/")
      console.log(x);
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    
    <div className='container-dashboard'>
      <button className='logout-btn' onClick={logoutHandler} >log out</button>
      <div className="box-dashboard"> 
        <button onClick={()=>{navigate('plumber')}} >Plumber</button>
        <button onClick={()=>{navigate('electrician')}} >Electrician</button>
        <button onClick={()=>{navigate('carpenter')}} >Carpenter</button>
        <button onClick={()=>{navigate('cleaner')}} >Cleaner</button>
        <button onClick={()=>{navigate('mechanic')}} >Mechanic</button>
        <button onClick={()=>{navigate('tailor')}} >Tailor</button>
        <button onClick={()=>{navigate('barber')}} >Barber</button>
        <button onClick={()=>{navigate('pharmacist')}} >Pharmacist</button>
        <button onClick={()=>{navigate('cook')}} >Cook</button>
       
        </div>
      
      </div>
  )
}

export default Dashboard
