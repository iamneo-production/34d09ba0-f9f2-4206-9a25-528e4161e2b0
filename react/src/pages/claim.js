import React from 'react'
import Navbar from '../navbar'
import '../style.css'
import { useState,useRef } from 'react';
import { connect, useSelector } from 'react-redux';
import { UseSelector } from 'react-redux/es/hooks/useSelector';


export default function Claim() {

  const id=useSelector(state=>state.insid)
  let inid=localStorage.getItem('id');

  const [showDiv, setShowDiv] = useState(false);
  const divRef = useRef(null);
  const handleClick = () => {
    setShowDiv(!showDiv);
  };
  return (
    <>
    <div>
    <Navbar/>
    </div>
    <div className="policy" style={{width:'100vw',height:'704px'}}>
    <div>

    
      <h1 style={{marginLeft:-700,color:'white',marginTop:40}}> AutoMobile Insurance Claim Process</h1>
      <p style={{width:1200,marginLeft:150,fontSize:18,justifyContent:'inherit',marginBottom:50}}>In our endeavour to provide you the best coverage along with a host of other value 
      added services, our online General Insurance claims system has been designed keeping your ease
       in mind. With a convenient insurance claim process, you can now register your claim, upload the 
       necessary documents and know the status of your motor insurance online!</p>
       <ul style={{color:'white',marginLeft:'100px',width:1200,wordSpacing:2,padding:10,marginLeft:250,marginTop:10}}>
       <li >
        <h3> Report the incident </h3> 
       <p className='words' style={{width:950,justifyContent:'inherit'}}>Contact your insurance company as soon as possible to report 
       the incident and initiate the claim process. Provide them with all the necessary details
        such as policy number, date, time, and location of the incident, description of the damage or loss, and any other relevant information.</p>
       </li>
       <li >
       <h3>Claim documentation</h3>
       <p className='words' style={{width:950,justifyContent:'inherit'}}>The insurance company will guide you on the required 
       documentation for your claim. This may include a completed claim form, copies of your driving 
       license and vehicle registration certificate, photographs of the damage, police report (if applicable), 
       and any other supporting documents they may require.</p>
       </li>

       <li>
       <h3>Survey and assessment </h3>
       <p className='words' style={{width:950,justifyContent:'inherit'}}>Depending on the nature and extent of the damage, 
       the insurance company may appoint a surveyor to assess the loss. The surveyor will 
       examine the vehicle, evaluate the damage, and prepare a report. This report helps the insurance company determine the claim amount.</p>
       </li>
       <li>
       <h3>Claim processing </h3>
       <p className='words' style={{width:950,justifyContent:'inherit'}}>Once the necessary documentation and assessment report are submitted, the insurance company will review 
       the information and process your claim. They will verify the coverage under your policy, assess the liability, 
       and calculate the claim amount.</p>
       </li>

       <li>
       <h3>Claim settlement </h3>
       <p className='words' style={{width:950,justifyContent:'inherit'}}>After the claim is processed and approved, the insurance company will inform you of the settlement amount. 
       This can be in the form of repairs, replacement of damaged parts, or a monetary payout. You may need to pay 
       any deductible or excess amount as per your policy terms.</p>
       </li>
       <li>
       <h3>Repair and settlement </h3>
       <p  className='words' style={{width:950,justifyContent:'inherit'}}>If repairs are required, you can choose an authorized workshop or garage affiliated with your
        insurance company. The repairs will be carried out as per the agreed settlement. Ensure you follow the insurer's 
        instructions and provide any necessary documents to the workshop.</p>
       </li>
       </ul>
       </div>
       <div>
    
    

    
    <br></br>
     
    <buttoon  className="regme" onClick={handleClick}>Register a Claim</buttoon>
    {showDiv &&( <div  className={showDiv ? 'visible' : 'hidden'} style={{width:800,height:100,fontSize:15,wordSpacing:6}}>
    <form onSubmit={()=>{alert("Register")}} style={{marginLeft:550}}>

    <label style={{fontSize:20,marginTop:40}}>Insurance Id</label>    
    <h5 style={{padding:7,fontSize:20,marginTop:15,marginBottom:15,marginLeft:20,paddingLeft:60,backgroundColor:'#D9D9D9',color:'black',width:250,borderRadius:15}}>{inid}</h5>
    
    <label style={{fontSize:20,marginTop:0,marginBottom:10}}>Policy Name</label>    

<select style={{padding:7,marginLeft:10,borderRadius:10,width:250,marginLeft:20}} placeholder='select a policy' name="cars" id="cars">
<option value="volvo">select a policy</option>  
<option value="volvo">Car Insurance</option>
  <option value="saab">Zero Deeperative Insurance</option>
  <option value="mercedes">Two-Wheeler Insurance</option>
  <option value="audi">Travel Insurance</option>
  <option value="audi">Third Party Insurance</option>
</select>
<label required style={{fontSize:20,marginTop:20}}>Vechile Proof</label>
<input required style={{backgroundColor:'black',fontSize:15,color:'white'}} type='file'/>
<button  style ={{marginLeft:90}}type='submit'>Register</button>
    </form>
    
    </div>
    
    )}


    </div>
    </div>
    
    </>
  )
}
