import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Grid , Button}from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import OffserData from "../../data/Offser"
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Offser() {
  return (
   
    OffserData.map((OffserData,index)=>{
        return(
            <Paper
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="complex" src={OffserData.imgURL} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="p" component="div">
                    {OffserData.title}
                  </Typography>
                  <Typography variant="h2" gutterBottom>
                    {OffserData.about}
                  </Typography>
                  <Typography variant="h3" color="text.secondary">
                    {OffserData.p}
                  </Typography>
                </Grid>
                <Button variant="outlined" size="medium">
          {OffserData.buttom}
        </Button>
              </Grid>
              
            </Grid>
          </Grid>
           </Paper>)
        
        }) 
     
  )
  
}