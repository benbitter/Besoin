import React from 'react'
import './choice.css'
import { useNavigate } from 'react-router-dom'

function Choice() {

    const navigate = useNavigate();
  return (
    <div>
      <div className="choice-container">
        <div className="choice-box">
            <button onClick={()=>navigate('/login1')} className='btn-provideservice' >Provide Service</button>
            <button onClick={()=>navigate('/login')} className='btn-takeservice'>Take service</button>
        </div>
      </div>
    </div>
  )
}

export default Choice
