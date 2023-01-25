import "./App.css";
import { CssBaseline } from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Navbar from "./components/Navbar";
import Login from "./pages/Auth/";
import  Home from "./pages/Home" ;
import Main from "./pages/Main";
function App() {
  return (
    <Router>
       <CssBaseline/>
      <Routes>
       
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="/Main" element={<Main/>}/>
        </Routes>
    </Router>
  );
}

export default App;
