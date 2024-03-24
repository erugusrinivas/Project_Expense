// import {useState}from "react";
// // import Header from "./Header";
// import Profile from "./Profile";
// import Lader from "./Lader";
// const App=()=>{
//   const [user,setUser]=useState(null);
  
//   const getApiData=async()=>{
//     let data=await fetch('https://fakestoreapi.com/users/1');
//     data = await data.json();
//     setUser(data);
//     setTimeout(()=>{
//       console.log(user);
//     },1000)
//     console.log(user);
//     console.log("data:",data);
//   }
//   if(user===null){
//     getApiData();
//   }
//   return(
//     <div>
     
//       {
//         user ? <Profile info={user}/>:<Lader></Lader>
//       }
//     </div>
//   )
// }
// export default App;



// import React, { useState } from 'react';
// import ChildComponent from './ChildComponent';
// import Lader from './Lader';
// // import Profile from './Profile';

// function ParentComponent() {
//   const [dataFromChild, setDataFromChild] = useState(null);

//   // Your other code...

//   return (
//     <div>
     
//        {
//         dataFromChild ? <data info={dataFromChild}/>:""
//       }
//       {/* Render ChildComponent and pass necessary props */}
//       <ChildComponent onDataReceived={setDataFromChild} />:<Lader></Lader>
//       {/* Display data received from the child */}
//       {dataFromChild && <p>Data from Child: {dataFromChild}</p>}
//       {/* Your other code... */}
//     </div>
//   );
// }
// export default ParentComponent;


// Parent.js
// import React, { useState } from 'react';
// import ChildComponent from './ChildComponent'; // Assuming you have a Child component

// const App = () => {
//   const [fetchedData, setFetchedData] = useState(null);

//   // Callback function to handle fetched data
//   const handleDataReceived = (data) => {
//     setFetchedData(data);
//   };
//   return (
    
//     <div>
      
//       {/* Pass the callback function to the child */}
//       <ChildComponent onDataReceived={handleDataReceived} />
//       {/* Display the fetched data */}
//       {fetchedData && <p>Fetched data: {JSON.stringify(fetchedData)}</p>}
//     </div>
//   );
// };

import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import { BrowserRouter,Routes,Route} from "react-router-dom";
// import Nav from "./Nav";

import Login from "./Login";
import Forget from "./Forget";
// import  NotFound from "./NotFound";
import SignUp from "./SignUp";
// import ImgeUpload from "./ImgeUpload";
import ResetPassword from "./ResetPassword";
import Update from "./Update";
// import Google from "./Google";
import Lader from "./Lader";
import UserDetail from "./UserDetail";
import AdminHome from "./AdminHome";
// import {useState} from 'react';
// import Aexampl from"./Aexmpl";
const App=()=>{
  // const isLoggedIn = window.localStorage.getItem("loggedIn");
  return(
    <div>
     
   <BrowserRouter>
   {/* <Nav></Nav> */}
   <Lader/>
   <Routes>
    {/* <Route exact path="/" element={isLoggedIn === "true" ? <UserDetail/>:<Login/>} /> */}
   {/* <Route exact path="ImgeUpload"element={<ImgeUpload></ImgeUpload>}/> */}
    <Route exact path="/"element={<Home></Home>}/>
    <Route path="/About"element={<About></About>}/>
  
     <Route path="/Forget"element={<Forget></Forget>}/>
     <Route path="/reset_password/:id/:token" element={<ResetPassword></ResetPassword>}/>
    <Route  path="/Login"element={<Login></Login>}/>
    <Route  path="/SignUp"element={<SignUp></SignUp>}/>
    <Route path="/Contact"element={<Contact></Contact>}/>
    <Route path="/Login/Update"element={<Update></Update>}/>
    <Route path="/UserDetail"element={<UserDetail></UserDetail>}/>
    <Route path="/AdminHome"element={<AdminHome></AdminHome>}/>
    {/* <Route path="/Home"element={<Home></Home>}/> */}
   
   </Routes>
   {/* <Footer/> */}
   </BrowserRouter>
   
   </div>
  )
}
export default App;
