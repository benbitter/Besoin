import React, { useState } from 'react';
import './Form.css'
import { database } from '../appwrite-config/config';

function Form() {
  // State hooks to manage the form values
  const [formData, setFormData] = useState({
    profession: '',
    age: '',
    experience: '',
    phone: '',
    address: '',
    email: '',
    money: ''
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    addformdata();
    alert('Form submitted successfully');
  };



  // sending data to appwrite

  const addformdata = async()=>{

   

      try {
        var x = await database.createDocument(import.meta.env.VITE_APPWRITE_DATABASEID,import.meta.env.VITE_APPWRITE_COLLECTIONID,'unique()',{
          profession:formData.profession,
          age:+formData.age,
          experience:+formData.experience,
          money:+formData.money,
          phone:+formData.phone,
          address:formData.address,
          gmail:formData.email,



        });
        
        console.log("working");
        
      } catch (error) {
        console.log(error)
      }
      
      

    }

  console.log(formData.profession);
  console.log(formData.address)
  console.log(formData.age)
  console.log(formData.email)
  console.log(formData.experience)
  console.log(formData.money)
  console.log(formData.phone)
  return (
    <div className='form-container' >
      {/* <h2>User Registration Form</h2> */}
        <div className="form-box">

        <div className="form-box1">
      <form onSubmit={handleSubmit}>
        
        {/* Profession Selection */}
        <label>Profession:</label>
        <select name="profession" value={formData.profession} onChange={handleChange} required>
          <option value="">--Select a profession--</option>
          <option value="plumber">Plumber</option>
          <option value="electrician">Electrician</option>
          <option value="carpenter">Carpenter</option>
          <option value="cleaner">Cleaner</option>
          <option value="mechanic">Mechanic</option>
          <option value="tailor">Tailor</option>
          <option value="barber">Barber</option>
          <option value="pharmacist">Pharmacist</option>
          <option value="cook">Cook</option>
        </select>
        <br />

        {/* Age Input */}
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Enter your age" required />
        <br />

        {/* Years of Experience */}
        <label>Years of Experience:</label>
        <input type="number" name="experience" value={formData.experience} onChange={handleChange} placeholder="Enter years of experience" required />
        <br />

        {/* Phone Number */}
        <label>Phone Number:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required />
        <br />

        {/* Address */}
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" required />
        <br />

        {/* Email */}
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
        <br />

        {/* Money */}
        <label>Money (Amount):</label>
        <input type="number" name="money" value={formData.money} onChange={handleChange} placeholder="Enter amount of money" required />
        <br />

        {/* Submit Button */}
        <button className='form-submit-btn' type="submit">Submit</button>
      </form>
          </div>        
      </div>
    </div>
  );
}

export default Form;
