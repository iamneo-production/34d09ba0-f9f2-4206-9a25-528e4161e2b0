// import React from 'react'
// import Navbar from '../navbar'
// import '../style.css'
// import { useEffect,useState } from 'react';
// import { connect, useSelector } from 'react-redux';
// import { UseSelector } from 'react-redux/es/hooks/useSelector';
// export default function Profile() {
//     const id=useSelector(state=>state.insid)

//   const [userdetails,setUserDetails]=useState('')

// useEffect(()=>{
//   fetch('http://localhost:8080/api/get/4', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })

//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error('Error while getting value');
//       }
//     })

    
//     .then((responseData) => {
//       setUserDetails(responseData);
//       console.log('Success:', responseData);
//       // Perform any necessary actions after successful signup
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });


// },[])


//   return (
//     <div>
//       <>
//       <div>
//       <Navbar/>
//       </div>

//       <div className="policy" style={{ width: '100vw', height: '704px' }}>
//       {userdetails.map((details,index)=>
//         <div key={index}> {/* Add a unique key for each mapped element */}
//           <h1>User Details</h1>
//           <p>Insurance Id: {details.ins_Id}</p>
//           <p>UserName: {details.name}</p>
//           <p>Contact: 637966791</p>
//           <p>Email ID: 727721euai055@skcet.ac.in</p>
//         </div>
//       )}
//     </div>
//       </>
//     </div>
//   );
// };



import React, { useEffect, useState } from 'react';
import Navbar from '../navbar';
import '../style.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Profile() {
  const [userData, setUserData] = useState({}); // Initialize with an empty object
  const [Data, setData] = useState({}); 

  let id = localStorage.getItem('id');
  useEffect(() => {
    const fetchUserData = async () => {
      let token = localStorage.getItem('token');
      // alert(id)
      
      try {
        const response = await axios.get(`http://localhost:8181/api/v1/demo/get/${id}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        setUserData(response.data); // Update the state with the response data
        console.log('Success:', response.data);


        //second response
        const response1 = await axios.get(` http://localhost:8181/api/v1/demo/get/policy/${id}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        setData(response1.data); // Update the state with the response data
        console.log('Success:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="policy" style={{ width: '100vw', height: '704px',display:'flex',flexDirection:'row'}}>
      
      {userData ? (
        <div style={{justifyContent:'left',display:'flex',flexDirection:'column',marginLeft:400,marginTop:100,fontSize:25,padding:10,wordSpacing:8,alignItems:'flex-start'}}>
            <h1 >User Details</h1>
            <p style={{ color: 'white' }}>Insurance Id: {userData.ins_Id}</p>
            <p>UserName: {userData.name}</p>
            <p>Email ID: {userData.email}</p>
            <p>Contact: {userData.mobile}</p>
            <p>dob: {userData.dob}</p>
            <p>Age: {userData.age}</p>
            <p>Licence_Number: {userData.vehicle_Number}</p>
          

          </div>
        ) : (
          <p>No user details found.</p>

          
        )}
        <div  style={{marginLeft:100,marginTop:120,justifyContent:'left',display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
        <h1 style={{color:'#B388FF',marginLeft:0}}> Policy details</h1>
        <p style={{fontSize:20}}> policy Number - 1</p> 
        <p>Vechile_Number: {Data.vechile_Number}</p>
        <p>Policy_type: {Data.policy_type}</p>
        <p>Renew_type: {Data.renew_type}</p>
        <p>Renew_Amount: {Data.renew_amount}</p>
        </div>
      </div>
    </div>
  );
}
