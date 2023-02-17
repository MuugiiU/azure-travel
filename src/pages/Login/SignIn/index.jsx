import React, { Component } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Typography, Snackbar, Alert } from "@mui/material";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../../App";

const Signin = ({ setIsSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("error");
  const [isAlert, setIsAlert] = useState(false);
  const [message, setMessage] = useState("");
  const { handleClose, setUser } = useContext(UserContext);

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const login = async (email, password) => {
    console.log("een");
    try {
      const res = await axios.post("http://localhost:8010/users/signin", {
        email,
        password,
      });
      console.log("Success", res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setStatus("success");
      setMessage(res.data.message);
      setIsAlert(true);
      setUser(res.data.user);
      // handleClose();
    } catch (error) {
      console.log("ERROR: ", error);
      setStatus("error");
      setMessage(error.response.data.message);
      setIsAlert(true);
    }
  };
  const handleClick = () => {
    if (email === "" || password === "") {
      setMessage("Хэрэглэгчийн мэдээлэл хоосон байна");
      return;
    }
    login(email, password);
    handleClose();
  };
  return (
    <Container component="main" maxWidth="xs" sx={{ bgcolor: "white" }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Нэвтрэх
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="И-Майл Хаяг"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={changeEmail}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Нууц дугаар"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={changePassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Намайг сана"
          />
          <Button
            onClick={handleClick}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Нэвтрэх
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Пасспортоо мартсан уу?
              </Link>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                onClick={() => {
                  console.log("jj");
                  setIsSignIn(false);
                }}
              >
                Бүртгүүлэх
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Snackbar
        open={isAlert}
        onClose={() => {
          setIsAlert(false);
        }}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={status} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Signin;
