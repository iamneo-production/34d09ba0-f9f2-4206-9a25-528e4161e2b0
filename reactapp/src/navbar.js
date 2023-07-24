import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };


 
   const navigate=useNavigate('');

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    let token=localStorage.getItem('token')
    let email=localStorage.getItem('email')
    try {
      const response = await axios.delete(`http://localhost:8181/api/v1/auth/${email}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      console.log('Success:', response.data);
      const pr = prompt("To Confirm please type DELETE in the box ");
      if(pr === "delete" &&"DELETE" )
      {
        alert('Account Deleted successfully');
        // alert(pr);
        navigate('/'); // Replace '/next-page' with the path to your next page
      }
      
      // Automatically navigate to the next page after 3 seconds (adjust the time as needed)
   
    } catch (error) {
      console.error('Error:', error);
    }

 
  };


  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <button  className="navbar-togle" onClick={toggleSidePanel}>
          <span className="navbar-toggle-icon" />
        </button>
        <Link className="navbar-logo" to="/home">Insurance Policy Co</Link>
      </div>


      <div className={`navbar-links ${isSidePanelOpen ? 'open' : ''}`}>
       
        
        <Link className="navbar-lik" to="/insurance">Apply Insurance</Link>
        <Link className="navbar-link" to="/policy">Explore Policy</Link>
        <Link  className="navbar-link" to="/claim">Claim Insurance</Link>
        <Link className="navbar-link" to="/renew">Renew</Link>
       
        <Link className="navbar-si" to="/profile">Profile</Link>
      </div>

      <div className={`side-panel ${isSidePanelOpen ? 'open' : ''}`}>
        <a style={{textDecoration:'none'}} className="side-panel-link" >Home</a>
        <a className="side-panel-link" href="/about">About</a>
        <a className="side-panel-link" href="/services">Services</a>
        <a className="side-panel-link" href="/contact">Contact</a>
        <button className="side-panel-butt"><Link to='/login' onClick={handleSubmit}>Delete My account</Link></button>
        <button className="side-panel-but"><Link to='/login'>Logout</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;


// import React, { useState } from 'react';
// import './App.css';
// import { Link, BrowserRouter as Router } from 'react-router-dom';

// const Navbar = () => {
//   const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

//   const toggleSidePanel = () => {
//     setIsSidePanelOpen(!isSidePanelOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <button className="navbar-toggle" onClick={toggleSidePanel}>
//           <span className="navbar-toggle-icon" />
//         </button>
//         <Link className="navbar-logo" to="/">Insurance Policy Co</Link>
//       </div>

//       <div className={`navbar-links ${isSidePanelOpen ? 'open' : ''}`}>
//         <Link className="navbar-link" to="/">Home</Link>
//         <Link className="navbar-link" to="/about">About</Link>
//         <Link className="navbar-link" to="/services">Services</Link>
//         <Link className="navbar-link" to="/contact">Contact</Link>
//         <a style={{ marginLeft: '32em' }} className="navbar-lo" href="/contact">Login</a>
//         <a className="navbar-si" href="/contact">Signup</a>
//       </div>

//       <div className={`side-panel ${isSidePanelOpen ? 'open' : ''}`}>
//         <Link className="side-panel-link" to="/">Home</Link>
//         <Link className="side-panel-link" to="/about">About</Link>
//         <Link className="side-panel-link" to="/services">Services</Link>
//         <Link className="side-panel-link" to="/contact">Contact</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;