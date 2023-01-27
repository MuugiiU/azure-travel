import React from "react";
import BrowData from "../../../data/Brow";
import {Box,Typography,Grid} from "@mui/material"

const Browse = () => {
  return (
    <Grid >
       <Typography variant="h3" sx={{weight:700,fontSize:"2rem", fontWeight:"bold"}}>Broswe by property type</Typography>
    <Grid sx={{display:"flex", gap:"1.5rem",marginTop:"40px",position:"relative",}}>
     
    {BrowData.map((item)=>(
      <Box>
        
        <img src={item.imgURL} width="310" height="200"/>
        <Box sx={{position:"absolute",marginTop:"-200px",color:"white"}} >
        <Typography variant="h4">{BrowData.title}</Typography>
        </Box>

      </Box>
    ))}
    </Grid>
    </Grid>
  )

};

export default Browse;
