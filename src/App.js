import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Forget from "./components/Forget";
import SignUp from "./components/SignUp";
import ResetPassword from "./components/ResetPassword";
import Update from "./components/Update";
import UserDetail from "./components/UserDetail";
import Logout from "./components/Logout";
import {NAVIGATION_ROUTES} from "./components/appConstants";
import { Snackbar } from "@mui/material";


// import Budget from "./components/Budget";

// *New_code**********************

// import AddExpenseForm from './components/AddExpenseForm';
// import Content from './Content';
// import Report from './components/Report';
// import Transactions from './components/Transactions';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Remaining from './components/Remaining';

// ______________________________           NEW CODE_____________________________*//////
// import UserDetails from "./userDetails";
import CustomSnackbar from "./Snackbar/Snackbar";
// import Loader from "./Loader/Loader";
import { saveUserDetails, showLoader, showSnackbar } from "./slices/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const App = () => {
  const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(saveUserDetails("E Srinivas"));
        }, 1000)
    }, [dispatch]);

    useEffect(() => {
        dispatch(showSnackbar({ visible: true, message: 'Item Deleted' }))
        setTimeout(() => {
            dispatch(showSnackbar({ visible: false, message: '' }))
        }, 3000)
    }, [dispatch])

    useEffect(()=>{
        dispatch(showLoader({visible:true}))
        setTimeout(()=>{
            dispatch(showLoader({visible:false}))
        },3000)
    },[dispatch])

  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route exact path={`${NAVIGATION_ROUTES.USER_HOME}`} element={<Home/>} />
          <Route path={`${NAVIGATION_ROUTES.USER_FORGETPASSWORD}/:userId`} element={<Forget/>} />
          <Route path={`${NAVIGATION_ROUTES.USER_RESETPASSWORD}`} element={<ResetPassword/>} />
          <Route path= {`${NAVIGATION_ROUTES.USER_LOGIN}/:userId`}element={<Login/>} />
          <Route path={`${NAVIGATION_ROUTES.USER_SIGNUP}`} element={<SignUp/>} />
          <Route path="/Login/Update" element={<Update/>}/>
          <Route path={`${NAVIGATION_ROUTES.UserDetail}/:userId`} element={<UserDetail/>}/>
          <Route path="/Logout" element={<Logout/>}/>
          <Route exact path="/Snackbar" element={<Snackbar/>} />
         

          {/* /* Updtaed Changes */}

          {/* <Route exact path="/Dashboard" element={<Content />} />
          <Route exact path="/Budgets" element={<AddExpenseForm />} />
          <Route exact path="/Reports" element={<Report />} /> */}
          {/* <Route exact path="/Transactions" element={<Transactions />} /> */}
           {/* <Route path="/Remaining" element={<Remaining/>} /> */}
        </Routes>
      </BrowserRouter>
     
      {/* <UserDetails /> */}
      <CustomSnackbar/>
      
    </div>
  )
}
export default App;
