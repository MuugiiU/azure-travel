import "./App.css";
import React from "react";
import { useState } from "react";
import { Route, Routes} from "react-router-dom";
import axios from 'axios';
import Navbar from "./components/Hero/Nav";
import Login from "./pages/Login";
import  Home from "./pages/Home" ;
import Main from "./pages/Main";
import { Category, Email } from "@mui/icons-material";
import BeachDetial from "./pages/Detials/BeachDetial";
import Categories from "./pages/Categories";

function App() {
  const [user,setUser] =useState(localStorage.getItem("user"));
  const [open,setOpen] =useState(false);
  const handleOPen =() => setOpen(true);
  const handleClose =() => setOpen (false);

   const login = async (email, password) => { 
  
   try{ const res= axios.post("http://locolhost:8009/signin",{email,password})
    console.log("Success",res.data.user);
    localStorage.setItem("user".JSON.stringify(res.data.user));
    setUser(res.data.user);
    handleClose();
    }
    catch(error) {
      console.log("ERROR",error);
    }
  }
  
   const logout=()=>{
    localStorage.removeItem("user");
    setUser(null);
   }

  return (
    <>
    <Navbar 
    login ={login}
    logout={logout}
    user={user}
    open={open}
    handleClose={handleClose}
    handleOPen={handleOPen}/>
   
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path="/Categories/:id" element={<Categories/>}/>
          <Route path="/Detials/:id" element={<BeachDetial/>}/>
        </Routes>
       
  
    </>
  );
}

export default App;
