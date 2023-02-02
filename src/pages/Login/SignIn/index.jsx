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
const Signin = ({ login, setSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [isAlert, setIsAlert] = useState(false);
  const navigate = useNavigate();
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleClick = () => {
    if (email === "" || password === "") {
      setMessage("Хэрэглэгчийн мэдээлэл хоосон байна");
      setIsAlert(true);
      return;
    }
    login(email, password);
  };
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
                  setSignIn(false);
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
        <Alert severity="success" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Signin;
