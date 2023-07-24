import React from 'react'
import Navbar from '../navbar'
import '../style.css'
import { connect, useSelector } from 'react-redux';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Renew() {
   
    const [userData, setUserData] = useState({}); // Initialize with an empty object
    const [amnnt,setAmnt] = useState('');
   
  
    let id = localStorage.getItem('id');
    useEffect(() => {
      const fetchUserData = async () => {
        let token = localStorage.getItem('token');
        // alert(id)
          
      try {
        const response = await axios.get(` http://localhost:8181/api/v1/demo/get/policy/${id}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        setAmnt(response.data.renew_amount)
        setUserData(response.data); // Update the state with the response data
        console.log('Success:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUserData();
  }, []);

const clear=()=>{
  const num = prompt("Enter amount to renew :");
  const dif = amnnt-num;
  if(dif>=0)
  {
    setAmnt(dif)
  }
  else
  {
    alert("Currently you have No due")
  }
  fetch(`http://localhost:8181/api/v1/demo/renew/policy/${id}/${dif}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('GET request failed');
        }
      })
      .then((data) => {
        // Store the data received from the GET method in the userData state variable
        // setUserData(data);
        console.log(data)
        alert("Your Current Renew Amount : "+data.renew_amount)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
}


  return (
    <>
    <div>
    <Navbar/>
    </div>
    <div className='policy' style={{width:'100vw',height:'704px'}}>
      <h1 style={{marginLeft:-900,marginTop:50}}>Insurance Renewal Online</h1>
      <p style={{width:1100,marginLeft:200,fontSize:17,wordSpacing:3}}>Indeed! A car is not just an asset, but a marvel in its true sense. The satisfaction drawn from owning 
      and driving your own car is beyond words. While you’ve taken every effort to protect it from mishaps and secure 
      yourself from the financial implications arising due to its theft or accident through car insurance , 
      renewing your policy every year ensures you remain protected.</p>
   
      
      <p style={{color:'white',marginLeft:-1050,fontSize:30,marginTop:50}}>Renew Details</p>
      <div style={{justifyContent:'left',display:'flex',flexDirection:'column',alignItems:'flex-start',marginTop:50,marginLeft:200,wordSpacing:8}}>
      <p>Insurance ID :{id}</p>
      <p>Vechile_Number: {userData.vechile_Number}</p>
        <p>Policy_type: {userData.policy_type}</p>
        <p>Renew_type: {userData.renew_type}</p>
      <p>Insurance Start Date :18/04/2022</p>
      <p>Total Due Amount:Rs.{amnnt}</p>
      <button onClick={clear} style={{marginTop:10}}> clear due</button>
      </div>
    </div>
    </>
  )
}
