import React from 'react'
import Navbar from '../navbar'
import '../style.css'
import  { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <>
    <div>
    <Navbar/>
    </div>
    
    <div  style={{width:'100vw',height:'92vh',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
    <div className="home" style={{height:718,width:1463,paddingTop:'5em'}}>
    <div className='igae'></div>
    <div>
    <p className='fomme'>
    Start Saving Money on Two Wheeler Insurance Policy<br></br>
      Compare Two wheeler Insurance rates from top Insurance companies for free.
      <p className='fo'>
      
 "Unlock peace of mind on the road with our <br></br>automobile insurance portal, where protection meets convenience<br></br> and drives you towards a worry-free journey."  
      </p>
     
      </p>
     </div>
<Link to='/policy'>
     <button className='explore'>Explore Policy</button></Link>
    </div>
    

    </div>
    </>
  )
}
