import React from 'react'
import home from './homef.jpg'
import './home.css'
import {useNavigate} from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  return (
    <div className='home-main'>
      <div className="home-box">
      <div className="nav-bar">
        <button onClick={()=>{navigate('/login')}} className='btn3' >Login</button>
        <button onClick={()=>{navigate('/registeration')}} className='btn3' >Sign Up</button>
      </div>
      <div className="home-foot">
        <a href="/About">About us</a>
        <a href="/Contact">Contact Us</a>
        <a href="/FAQ">FAQs</a>
      </div>
      </div>
    </div>
  )
}

export default Home
