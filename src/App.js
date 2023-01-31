import "./App.css";
import { CssBaseline } from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Navbar from "./components/Navbar";
import Login from "./pages/Auth/";
import  Home from "./pages/Home" ;
import Main from "./pages/Main";
import { Category } from "@mui/icons-material";
import BeachDetial from "./pages/Detials/BeachDetial";
import Categories from "./pages/Categories";
function App() {
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
