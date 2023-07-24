
    import React, { Component } from 'react'
    import { useState, useRef } from 'react';

import { Link } from 'react-router-dom'
import Navbar from '../navbar'
import '../style.css'
import Insurance from './../insurance';


const Policy = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [showDivs, setShowDivs] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);
    const [showDiv4, setShowDiv4] = useState(false);
  const divRef = useRef(null);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };
  const handleClicks = () => {
    setShowDivs(!showDivs);
  };
  const handleClicks3 = () => {
    setShowDiv3(!showDiv3);
  };
  const handleClicks4 = () => {
    setShowDiv4(!showDiv4);
  };

    return (
        <>
       <div>
       <Navbar/>
       </div>

        <div className="policy" style={{width:'100vw',height:'704px'}}>

        <div style={{width:700,marginLeft:400}}>

        <h1  style={{color:'white',paddingTop:60,marginLeft:-800}}>Automobile Insurance Policies</h1>
        <ul>
        <p style={{fontSize:19,wordSpacing:6,marginLeft:-200,textAlign:'justify'}}>
        <li>
        An automobile insurance policy, also known as auto insurance or car insurance, is a 
        contract between an individual and an insurance company. It provides financial protection in the event of accidents,
         theft, or damage to the insured vehicle, as well as liability coverage for injuries or damages caused to others.</li> <br></br><br></br><li>It is type of insurance policy that provides financial protection against 
         losses or damages that may occur to your vehicle or others involved in an accident. It is a legal requirement in most countries to have at least a minimum level 
         of automobile insurance coverage to drive on public roads.
         </li></p>
         </ul>
         <h1  style={{color:'white',paddingTop:40,marginLeft:-700}}>Types of Automobile Insurance Polices</h1>
         <div>
         <li>

        <p style={{paddingTop:30,marginLeft:-900,fontSize:20}} className="div1">1) Car Insurance</p>
        <br></br>
          <p style={{paddingTop:0,marginLeft:-100,fontSize:20,textAlign:'justify',width:1000}}>Car insurance provides financial protection to policyholders against accidents, theft, total loss, natural calamities, man-made disasters, fire, and third-party death or property damage. A car insurance policy is mandatory in India for all four-wheelers as per the Motor Vehicles Act, of 1988.</p></li>
        <p className="clickme" onClick={handleClick}>Click for More</p>
        {showDiv &&( <div  className={showDiv ? 'visible' : 'hidden'} style={{width:800,fontSize:15,paddingLeft:-100,wordSpacing:6}}>
        In India, there are three types of car insurance policies offered by 
        the general insurance companies i.e. third-party car insurance, comprehensive 
        insurance, and stand-alone insurance. You can choose a car insurance plan according 
        to your budget and need.
        
        </div>
        
        )}

          <li>
        <p style={{paddingTop:-30,marginLeft:-900,fontSize:20}} className="div1">2) Bike Insurance</p>
        <br></br>
          <p style={{paddingTop:10,marginLeft:-100,fontSize:20,textAlign:'justify',width:1000}}>A two-wheeler insurance policy, commonly known as bike insurance, covers the damages that may occur to the insured motorcycle or scooter due to accidents, theft, fire, natural calamities, man-made disasters, & total loss. According to the Motor Vehicles Act 1988, third-party 2-wheeler insurance is mandatory for all two-wheeler owners.</p></li>
        <p className="clickme" onClick={handleClicks}>Click for More</p>
        {showDivs &&( <div  className={showDivs ? 'visible' : 'hidden'} style={{width:800,fontSize:15,paddingLeft:-100,wordSpacing:6}}>
        In India, there are three types of car insurance policies offered by 
        the general insurance companies i.e. third-party car insurance, comprehensive 
        insurance, and stand-alone insurance. You can choose a car insurance plan according 
        to your budget and need.
        
        </div>
        
        )}
        <li>
        <p style={{paddingTop:-30,marginLeft:-850,fontSize:20}} className="div1">3) Third Party Insurance</p>
        <br></br>
          <p style={{paddingTop:-30,marginLeft:-100,fontSize:20,textAlign:'justify',width:1000}}>Third-party insurance offers protection against damages to the third-party by the insured vehicle. It covers physical injuries, damages to the vehicle, damage to the property, and death. Third-party insurance does not provide any compensation, if: The accident was caused due to drunken driving.</p></li>
        <p className="clickme" onClick={handleClicks3}>Click for More</p>
        {showDiv3 &&( <div  className={showDiv3 ? 'visible' : 'hidden'} style={{width:800,fontSize:15,paddingLeft:-100,wordSpacing:6}}>
        In India, there are three types of car insurance policies offered by 
        the general insurance companies i.e. third-party car insurance, comprehensive 
        insurance, and stand-alone insurance. You can choose a car insurance plan according 
        to your budget and need.
        
        </div>
        
        )}
        <li>
        <p style={{paddingTop:-30,marginLeft:-800,fontSize:20}} className="div1">4) Zero depreciation Insurance</p>
        <br></br>
          <p style={{paddingTop:0,marginLeft:-100,fontSize:20,textAlign:'justify',width:1000}}>Zero depreciation cover is also known as bumper-to-bumper or nil depreciation cover. With zero depreciation coverage, the policyholder does not have to pay the depreciation value of the damaged or replaced parts and can claim the full amount under their comprehensive car insurance</p></li>
        <p className="clickme" onClick={handleClicks4}>Click for More</p>
        {showDiv4 &&( <div  className={showDiv4 ? 'visible' : 'hidden'} style={{width:800,fontSize:15,paddingLeft:-100,wordSpacing:6}}>
        In India, there are three types of car insurance policies offered by 
        the general insurance companies i.e. third-party car insurance, comprehensive 
        insurance, and stand-alone insurance. You can choose a car insurance plan according 
        to your budget and need.
        
        </div>
        
        )}
        
        
        </div>
      
        
        </div>
        
      </div>
    
    </>
    )
  }
  export default Policy;