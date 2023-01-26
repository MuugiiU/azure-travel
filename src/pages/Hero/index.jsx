import { Grid, Typography } from "@mui/material";

import React from "react";
import DrawerAppBar from "../../components/navbar";
import Searchh from "../../components/searchh";
import Category_component from "../../components/Category";
import Vacation from "../../components/Vacation";
const Hero = () => {
  return (
    <Grid
      sx={{
        width: "100%",
        height: "100%",
       
      }}
    >
      <Grid sx={{ margin: "10%", display:"flex", flexDirection:"column",justifyContent:"space-between",  height:"90vh" }}>
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontSize: "72px",
            lineHeight: "83px",
         
          }}
        >
          The whole world <br />
          awaits.
        </Typography>
        <Searchh />
        <Category_component />
        <Vacation />
       
      </Grid>
     
    </Grid>
  );
};

export default Hero;
