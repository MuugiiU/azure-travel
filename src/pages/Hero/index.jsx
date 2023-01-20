import { Category, Search } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import DrawerAppBar from "../../components/navbar";
import Searchh from "../../components/searchh";
import Category_component from "../../components/Category";
const Hero = () => {
  return (
    <Grid
      sx={{
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
        top: "20%",
        left: "10%",
        bottom: "40px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "white",
          fontSize: "72px",
          lineHeight: "83px",
          top: "15%",
        }}
      >
        The whole world <br />
        awaits.
      </Typography>
      <Searchh />
      <Category_component />
    </Grid>
  );
};

export default Hero;
