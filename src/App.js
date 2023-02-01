import "./App.css";
import { CssBaseline } from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Navbar from "./components/Navbar";
import Login from "./pages/Auth/";
import  Home from "./pages/Home" ;
import Main from "./pages/Main";
import { Category, Email } from "@mui/icons-material";
import BeachDetial from "./pages/Detials/BeachDetial";
import Categories from "./pages/Categories";
import {useState} from "react-router-dom";
function App() {
  const [user,setUser] =useState(null);
   const login=(email, password)=>{ 
    console.log("Login",email);
    console.log("Login",password)
   try{ const res= axios.post("http://locolhost:8009/signin",{email,password})}
   console.log("Success",res);
   setUser();
   }
   catch(error)
   const logout=()=>{};
  return (
    <Router>
       <CssBaseline/>
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path="/Categories/:id" element={<Categories/>}/>
          <Route path="/Detials/:id" element={<BeachDetial/>}/>
        </Routes>
       
    </Router>
  );
}

export default App;
