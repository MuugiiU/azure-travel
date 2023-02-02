import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert, Snackbar } from "@mui/material";
import axios from "axios";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [isAlert, setIsAlert] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState("error");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeRePassword = (e) => {
    setRePassword(e.target.value);
  };

  const signup = async () => {
    console.log("WW");
    if (!email || !name || !password || !rePassword) {
      setMessage("Мэдээллийг бүрэн бөглөнө үү!!!");
      setIsAlert(true);
      return;
    }
    if (password !== rePassword) {
      setMessage("Нууц үг хоорондоо таарахгүй байна. !!!");
      setIsAlert(true);
      return;
    }
    try {
      const res = await axios.post("http://localhost:8010/signup", {
        name,
        email,
        password,
      });
      console.log("res", res);
      setState("success");
      setMessage(res.data.message);
      setIsAlert(true);
      props.setSignIn(true);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ bgcolor: "white" }}>
      <Snackbar
        open={isAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
        onClose={() => {
          setIsAlert(false);
        }}
      >
        <Alert severity={state}>{message}</Alert>
      </Snackbar>
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
          Бүртгүүлэх
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="text"
            label="Хэрэглэгчийн нэр"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={changeName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="И-Мэйл Хаяг"
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Нууц дугаараа дахин хийнэ үү"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={changeRePassword}
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Намайг сана"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={signup}
          >
            Бүртгүүлэх-9
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Нууц үгээ мартсан уу?
              </Link>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                onClick={() => {
                  props.setIsSignIn();
                }}
              >
                Нэвтрэх
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default Signup;
