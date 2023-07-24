
import React, { useState } from "react";
import './App.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import axios from "axios";



function Newregister({logstate,login}) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vehicle_Number,setVechile_Number]=useState('');
  const [dob,setDateofBirth]=useState('');
  const [age,setage]=useState('');
  const [mobile,setMobile]=useState('');
  const [vechile,setVechile]=useState('');
  const [policy_type,setPolicy]=useState('');

  const [renew_type,setPayment]=useState('');
  const [ins_Id,setins_Id]=useState('');
  const [payment_type,setpayment_type]=useState('');





  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const generatedInsId = `AMI-${randomNumber}-${randomNumber}`;
    setins_Id(generatedInsId);
     localStorage.setItem('id',generatedInsId);
    const data = {
      name: name,
      email: email,
      dob:dob,
      vehicle_Number:vehicle_Number,
      age:age,
      mobile:mobile,
     
      ins_Id:generatedInsId
    };

    let token = localStorage.getItem('token')
    console.log("token value",token)
  
    try {
      const response = await axios.post('http://localhost:8181/api/v1/demo/post', data, {
        headers: {
            "Authorization": `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      })
      
      .then((response)=>{
          console.log('Success:', response.data);
          alert("Profile Updated sucessfully")
          navigate('/apply'); 

      }
      )

   
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="container" >
    <div className="form-container-sign"  style={{height:600}}>
      <h1>Pls Update UserDetails</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-username">Username</label>
        <input value={name} onChange={(e) => handleChange(e, setName)} className="margin" type="text" id="new-username" name="new-username" required placeholder="Enter your firstname" />
        <label htmlFor="new-email">Email Id</label>
        <input value={email} onChange={(e) => handleChange(e, setEmail)} className="margin" type="email" id="new-email" name="new-email" required placeholder="Enter your email" />
        <label htmlFor="new-vechile">Password</label>
        <input value={password} onChange={(e) => handleChange(e, setPassword)} className="margin" type="text" id="new-vechile" name="new-vechile" placeholder="Enter password" required />
      
        <label htmlFor="new-email">Licence_Number</label>
        <input value={vehicle_Number} onChange={(e) => handleChange(e,setVechile_Number)} className="margin" type="text" id="new-email" name="new-email" required placeholder="Enter your licence_number" />
      

        <label htmlFor="new-email">mobile no</label>
        <input value={mobile} onChange={(e) => handleChange(e,setMobile)} className="margin" type="number" id="new-email" name="new-email" required placeholder="Enter your mobile no" />
      
        <label htmlFor="new-email">Date of birth</label>
        <input value={dob} onChange={(e) => handleChange(e,setDateofBirth)} className="margin" type="text" id="new-email" name="new-email" required placeholder="Enter date of birth" />

        <label htmlFor="new-email">age</label>
        <input value={age} onChange={(e) => handleChange(e,setage)} className="margin" type="number" id="new-email" name="new-email" required placeholder="Enter age" />

        
      
      
      
      
      
      
      
        <button className="submit" type="submit">Update details</button>   
      </form>
      
    
    </div>
  </div>
);
}

export default Newregister;
