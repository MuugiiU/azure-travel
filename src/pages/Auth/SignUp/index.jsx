import React, { Component } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default class Login extends Component {
     handleSubmit = (event) => {
      event.preventDefault();
    //   const data = new FormData(event.currentTarget);
    //   console.log({
    //     email: data.get('email'),
    //     password: data.get('password'),
    //   });
    };
  
render () {
  return (
    <Container component="main" maxWidth="xs">
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
      Бүртгүүлэх
      </Typography>
      <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="И-Мэйл Хаяг"
          name="email"
          autoComplete="email"
          autoFocus
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
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Намайг сана"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
         Бүртгүүлэх
        </Button>
        <Grid container>
          <Grid item xs>
            
          </Grid>
          <Grid item>
          <Button variant="text" onClick={()=>{
            this.props.setIsSignIn(true)
          }}>
              {"Бүртгэлгүй байна? Нэвтрэх"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  
  </Container>
  )
}
}