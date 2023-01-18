import { CssBaseline } from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./pages/Auth/";
import  Home from "./pages/Home" ;
function App() {
  return (
    <Router>
       <CssBaseline/>
      <Routes>
       
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;
