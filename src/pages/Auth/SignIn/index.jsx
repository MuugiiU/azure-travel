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
const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const onClose = () => {
    setOpen(false);
  };
  const login = () => {
    if (email === "" || password === "") {
      console.log("login");
      setOpen(true);
    } else {
      console.log(email, password);
      localStorage.setItem("isLogged", true); //local storage deer ochij ugugdul hadgaldag function -ene ni key , value gsn utga abna
      navigate("/");
    }
  };
  const changeEmail = (e) => {
    console.log("Email", e.target.value);
    setEmail(e.target.value);
    // setEmail();
  };
  const changePassword = (e) => {
    console.log("Password", e.target.value);
    setPassword(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //   const data = new FormData(event.currentTarget);
    //   console.log({
    //     email: data.get('email'),
    //     password: data.get('password'),
    //   });
  };

  {
    return (
      <Container component="main" maxWidth="xs">
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
          <Box onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
              onClick={login}
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
                    props.setIsSignIn(false);
                  }}
                >
                  {"Бүртгэлгүй байна? Бүртгүүлэх"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Snackbar
          open={open}
          onClose={onClose}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={onClose} severity="success" sx={{ width: "100%" }}>
            хэрэглэгчийн нэвтрэх нэр эсвэл нууц үг буруу байна
          </Alert>
        </Snackbar>
      </Container>
    );
  }
};
export default Signin;
