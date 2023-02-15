import "./App.css";
import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Hero/Nav";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Main from "./pages/Main";
import { Category, Email } from "@mui/icons-material";
import BeachDetial from "./pages/Detials/BeachDetial";
import Categories from "./pages/Categories";
import Admin from "./pages/Admin";
// import { UserContext, UserProvider } from "./context";
import CategoryTable from "./pages/Admin/component/cattable";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    console.log("modal");
  };
  const handleClose = () => setOpen(false);

  return (
    // <UserProvider>
    <UserContext.Provider
      value={{ user, setUser, open, handleClose, handleOpen }}
    >
      <Navbar sm="12" md="6" />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Categories/:id" element={<Categories />} />
        <Route path="/Detials/:id" element={<BeachDetial />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/:id" element={<CategoryTable />} />
        </Route>
      </Routes>
    </UserContext.Provider>

    // </UserProvider>
  );
}

export default App;
