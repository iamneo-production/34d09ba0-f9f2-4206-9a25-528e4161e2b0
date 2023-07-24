import React from 'react'
import Navbar from './navbar'
import './style.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Insurance() {


  return (
    <>
    <div>
    <Navbar/>
    </div>
    <div style={{backgroundColor:'black',height:'694px'}}>
    <div style={{display:'flex',flexDirection:'row'}}>
    <Link  to='/newregister' >
     <div className="card">
     <img   style={{width:'370px',height:'170px',marginLeft:'-40px',marginTop:'-25px'}} src="https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689248946/down-r_cyndk8.png" alt='image'/>
      <h2 className='name'>Car Insurance</h2>
      <p className='pp'>A car insurance policy is mandatory in India for all four-wheelers as per the Motor Vehicles Act, of 1988.</p>
    </div>
    </Link>

    <Link to='/apply'>
    <div className="card"> 
    <img  style={{width:'370px',height:'170px',marginLeft:'10px',marginTop:'-25px'}} src="https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689257193/bike1-removebg-preview_lcbktx.png" alt='image'/>
      <h2 className='bike'>Bike Insurance</h2>
      <p className='pp'>bike insurance, covers the damages motorcycle or scooter due to accidents, theft, fire, natural calamities, man-made disasters, & total loss</p>
    </div> 
    </Link> 

    <Link to='/apply'>
    <div className="card">
    <img style={{width:'370px',height:'170px',marginLeft:'-15px',marginTop:'-25px'}} src="https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689259347/commercial-vehicle-insurance_pmtc8s.png" alt='image'/>
      <h2>Commercial Vehicle Insurance</h2>
      <p className='pp' >Commercial vehicle insurance is a tailored insurance plan that provides coverage for the damage caused by or to the commercial vehicle</p>
    </div> 
    </Link>
    </div>

    <div style={{display:'flex',flexDirection:'row'}}>
    <Link  to='/apply'>
    <div className="card">
    <img style={{width:'300px',height:'170px',marginLeft:'15px',marginTop:'-25px'}} src="https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689259598/travel-removebg-preview_dqokis.png" alt='image'/>
     <h2>Travel Insurance</h2>
     <p className='pp'>Travel insurance is a unique product meant also known as travel health insurance, it can be bought for foreign and domestic travel.</p>
   </div>
   </Link>

   <Link to='/apply'>
   <div className="card"> 
   <img style={{width:'350px',height:'270px',marginLeft:'-15px',marginTop:'-20px'}} src="https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689261655/motor-third-party-removebg_jwrmel.png" alt='image'/>
     <h2 className='third'>Third party Insurance</h2>
     <p className='pp'>Third-party insurance offers protection against damages to the third-party by the insured vehicle.</p>
   </div>  
   </Link>

   <Link  to='/apply'>
   <div className="card">
   <img style={{width:'210px',height:'110px',marginLeft:'-15px',marginTop:'50px'}} src="https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689264571/sddefault__1_y6ny1k.png" alt='image'/>
   
     <h2 style={{marginTop:-15}}>Zero dep Insurance</h2>
     <p className='zero'>Zero Deeperative</p>
     <p className='wal'>Insurance</p>
     <p style={{marginTop:115}}> Third-party insurance offers protection against damages to the third-party by the insured vehicle</p>
   </div> 
   </Link>
   </div>

  </div>
    
    </>
  )
}
