import { CssBaseline } from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Navbar from "./components/Navbar";
import Login from "./pages/Auth/";
import  Home from "./pages/Home" ;
import Hero from "./pages/Hero";
function App() {
  return (
    <Router>
      
       <CssBaseline/>
      
       <Hero/>
      <Routes>
       
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        {/* <Route path="/Hero" element={<Hero/>}/> */}
        </Routes>
    </Router>
  );
}

export default App;
