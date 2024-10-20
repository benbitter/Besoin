import React from 'react'
import {useParams} from 'react-router-dom'
import { database } from '../appwrite-config/config';
import { Query } from 'appwrite';
import { useEffect } from 'react';
import { useState } from 'react';
import './Profession.css'

function Profession() {

    const { profession} = useParams();
    const [professions,setprofessions] = useState([])

    const viewProfessions = async()=>{

        try {
        
          var x = await database.listDocuments(import.meta.env.VITE_APPWRITE_DATABASEID,import.meta.env.VITE_APPWRITE_COLLECTIONID,[
            Query.equal("profession",profession)  // To retrive and filter data create indexes
          ])
    
          console.log(x.documents);
          setprofessions(x.documents);
          
        } catch (error) {
          console.log(error)
        }
       
      }
    
    
      
      
    useEffect(() => {
        if (professions) {
            viewProfessions(); // Call viewTodo only after email is set
        }
      }, []);

  return (
    <div className='profession-container'>
        <div className="profession-box">
          <div className="card-box">

          {professions.map((e)=>(
            <div key={e.$id} className="card">
              <p>email: {e.gmail}</p>
              <p>phone number :{e.phone}</p>
              <p>Address :{e.address}</p>
              <p></p>
            </div>
          ))}
          </div>
        </div>
    </div>
  )
}

export default Profession
