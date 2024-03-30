
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
// import Lader from "./Lader";
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
   {/* <Lader/> */}
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
