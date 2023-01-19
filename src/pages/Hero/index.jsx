import { Container,Grid } from '@mui/material';
import React from 'react'
import DrawerAppBar from '../../components/navbar';

const Hero = () => {
  return (
    <Grid sx={{ width:'100%', position:"relative"}} >
       <img src="/img/bgpic.png" width="100%" alt="" />
        <DrawerAppBar/>
       <Grid xs={12} lg={6} sx={{position:'absolute',top:"125px",color:'white',fontSize:'72px',left:'120px'}} >
        <h1 style={{width: "1200px "}}>The whole world <span>awaits.</span></h1>
       </Grid>
    </Grid>
  )
}

export default Hero