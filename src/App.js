import "./App.css";
import React,{ useState } from "react";
import { Route, Routes} from "react-router-dom";
import axios from 'axios';
import Navbar from "./components/Hero/Nav";
import Login from "./pages/Login";
import  Home from "./pages/Home" ;
import Main from "./pages/Main";
import { Category, Email } from "@mui/icons-material";
import BeachDetial from "./pages/Detials/BeachDetial";
import Categories from "./pages/Categories";
import Admin from "./pages/Admin";
import { UserContext } from "./context";
import CategoryTable from "./pages/Admin/component/cattable";


function App() {
  const [user,setUser] =useState(localStorage.getItem("user"));
  const [open,setOpen] =useState(false);
  const handleOpen =() =>{
     setOpen(true);
    console.log("modal")}
  const handleClose =() => setOpen (false);

   
  
   const logout=()=>{
    localStorage.removeItem("user");
    setUser(null);
   }

  return (
    <UserContext.Provider>
    <Navbar  sm="12" md="6"
    logout={logout}
    user={user}
    setUser={setUser}
    open={open}
    handleClose={handleClose}
    handleOpen={handleOpen}/>
   
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path="/Categories/:id" element={<Categories/>}/>
          <Route path="/Detials/:id" element={<BeachDetial/>}/>
          <Route path="/admin" element={<Admin/>}>
            <Route path="/admin/:id" element={<CategoryTable/>}/>
          </Route>
   
        </Routes>
       
  
    </UserContext.Provider>
  );
}

export default App;
