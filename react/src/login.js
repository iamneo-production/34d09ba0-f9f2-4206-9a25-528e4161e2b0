import React, { useState } from "react";
import './App.css';
import { Link } from 'react-router-dom';
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  
  const handleChange = (e, setter) => {
      setter(e.target.value);
    };
  
  const handleSubmit = async (e) => {
      e.preventDefault();
    
      const data = {
        email: email,
        password: password
      };
  
    
    
      await axios.post('http://localhost:8181/api/v1/auth/authenticate', data, {
        headers: {
         
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        console.log('Success:', response.data);
        localStorage.setItem('token', response.data.token);
        console.log('Success:', response.data.token);
       alert("Login Successful")
       alert(response.data.token)
     
     
        navigate('/home')
  
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };
  
  

  return (
    
    // <div>
    // <Navbar/>
    // </div>
   
    <div className="contain"
    
    
    
    >
      <div className={`form-container ${isLoginForm ? "active" : ""}`} id="login-form">
        <h1>Login</h1>
        <form  onSubmit={handleSubmit}>
          
          <label for="username">Username:</label>
          <input value={email} onChange={(e)=>{handleChange(e,setEmail)}} className="margin1" type="text" id="username" placeholder="enter your name" name="username" required/>
          <label for="username">Password:</label>
          <input value={password} onChange={(e)=>{handleChange(e,setPassword)}} className="margin1" type="text" id="username" placeholder="enter password" name="username" required/>
          <button  type="submit">
          Login</button>
          </form>
          
        <p>
          Don't have an account?{" "}
          <Link to="/signup"  id="signup-link" >
            New User
          </Link>
        </p>
      </div>
      
    </div>
    
    
  );
}

export default Login;
