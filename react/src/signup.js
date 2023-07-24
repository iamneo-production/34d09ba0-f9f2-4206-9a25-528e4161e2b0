
import React, { useState } from "react";
import './App.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import axios from "axios";



function Signup({logstate,login}) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
    };
   
    localStorage.setItem('email',email)
    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/register', data, {
        headers: {
          'Content-Type': 'application/json'
        },
      });

      console.log('Success:', response.data);
      alert('Registration successful! Please login to continue.');
      navigate('/login'); // Replace '/next-page' with the path to your next page

      // Automatically navigate to the next page after 3 seconds (adjust the time as needed)
   
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="container">
    <div className="form-container-sign">
      <h1>New User</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-username">Username</label>
        <input value={name} onChange={(e) => handleChange(e, setName)} className="margin" type="text" id="new-username" name="new-username" required placeholder="Enter your firstname" />
        <label htmlFor="new-email">Email Id</label>
        <input value={email} onChange={(e) => handleChange(e, setEmail)} className="margin" type="email" id="new-email" name="new-email" required placeholder="Enter your email" />
        <label htmlFor="new-vechile">Password</label>
        <input value={password} onChange={(e) => handleChange(e, setPassword)} className="margin" type="text" id="new-vechile" name="new-vechile" placeholder="Enter password" required />
      
        <button className="submit" type="submit">Sign Up</button>
      </form>
      
      <p>
        Already have an account?{" "}
        <Link to='/login
        
        
        
        
        '  id="login-link">
          Login
        </Link>
      </p>
    </div>
  </div>
);
}

export default Signup;
