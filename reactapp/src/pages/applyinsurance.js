import React from 'react'
import Navbar from '../navbar'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Apply() {
    const navigate = useNavigate();
   
    const [vechile_Number,setVechile_Number]=useState('');
    const [license_Number,setlicense_Number]=useState('');
  
  
    const [policy_type,setPolicy]=useState('');
  
    const [renew_type,setPayment]=useState('');
  
    
  
    let id = localStorage.getItem('id');
  
  
  
    const handleChange = (e, setter) => {
      setter(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const data = {

        vechile_Number:vechile_Number,
        policy_type:policy_type,
        renew_type:renew_type,
        license_Number:license_Number,
        ins_Id:id,
        renew_amount:2000
       
      };
  
      let token = localStorage.getItem('token')
      console.log("token value",token)
      
      try {
        const response = await axios.post(' http://localhost:8181/api/v1/demo/postinsurance', data, {
          headers: {
              "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        })
        
        .then((response)=>{
            console.log('Success:', response.data);
            alert('Insurance Applied sucessfully');
            navigate('/insurance'); 
  
        }
        )
  
     
      } catch (error) {
        console.error('Error:', error);
      }
    };




  return (
    <>
    <div>
    <Navbar/>
    </div>
    <div style={{backgroundColor:'black',height:'92vh'}}>

    <div>

    <h1 style={{paddingTop:50}}>Apply Your Insurance
    </h1>


    <form style={{color:'white',marginLeft:500,marginTop:50,padding:30}}   onSubmit={handleSubmit}> 
    <label htmlFor="new-username">Insurance_ID</label>
   
   
    <h3  style={{backgroundColor:'#D9D9D9',width:350,marginLeft:40,height:33,borderRadius:15,color:'black',padding:5,paddingLeft:50,fontSize:25,marginBottom:15}}>{id}</h3>
    <label htmlFor="new-email">vechile_Number</label>
    <input  value={vechile_Number} onChange={(e)=>{handleChange(e,setVechile_Number)}} className="margin" type="text" id="new-email" name="new-email" required placeholder="Enter your email" />
    
    
    <label htmlFor="new-vechile"> Vehicle Type</label>
    <select value={license_Number
} onChange={(e)=>{handleChange(e,setlicense_Number)}} className="margin1" id="new-vechile" name="new-vechile">
    <option value="">Select an option</option>
    <option value="two-wheeler">Two-Wheeler</option>
    <option value="four-wheeler">Four-Wheeler</option>
    <option value="other">Other</option>
    </select>

    <label htmlFor="new-vechile">Select policy Type</label>
    <select value={policy_type} onChange={(e)=>{handleChange(e,setPolicy)}} className="margin1" id="new-vechile" name="new-vechile">
        <option >select a policy</option>  
       <option >Car Insurance</option>
      <option >Zero Deeperative Insurance</option>
      <option >Two-Wheeler Insurance</option>
      <option >Travel Insurance</option>
      <option >Third Party Insurance</option>

    </select>   
    <label htmlFor="new-vechile">Select payment Type</label>
    <select  value={renew_type} onChange={(e) => handleChange(e, setPayment)} className="margin1" id="new-vechile" name="new-vechile">
    <option >Select an option</option>
    <option >Monthly</option>
    <option>Yearly</option>
    <option >Other</option>
    </select>

   

    <button className="submit" type="submit">Apply</button>
  </form>
    </div>





    </div>
    </>
  )
}
