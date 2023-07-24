import React, { useState } from 'react'
import axios from 'axios';

export default function Form() {
    const [name,setName] = useState('');

const handleChange=(e)=>{
    setName(e.target.value);
}

const handleSubmit=(e)=>{
    e.preventdefault();
    const Token={
        name:localStorage.getItem('token')
      }
  
   axios.post('http://localhost:8081/post',Token,{
    headers: {
      // "Authorization": `Bearer ${token}`,
      'Content-Type': 'application/json',
      "Authorization":`Bearer ${localStorage.getItem('token')}`
    },
   })
   .then((res)=>{
      console.log(res.data)
      alert("suv")
     })
}
  return (
    <div>
      <form onSubmit={handleSubmit}>

      <label htmlFor="new-username">Username</label>
        <input value={name} onChange={(e)=>handleChange(e)} className="margin" type="text" id="new-username" name="new-username" required placeholder="Enter your firstname" />
        <label htmlFor="new-email">Email Id</label>
   
    <button type='submit'>submit</button>
      </form>
    </div>
  )
}
