import { Container, Grid, Typography } from "@mui/material";

import React from "react";
import DrawerAppBar from "../../components/Hero/Nav";
import Searchh from "../../components/Hero/Searchh";
import Category from "../../components/Hero/Category";
import Vacation from "../../components/Hero/Vacations";
import Vacations from "../../components/Hero/Vacations";
const Hero = () => {
  return (
    <Grid
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "90vh",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontSize: "72px",
            lineHeight: "83px",
            marginTop: "3rem",
          }}
        >
          The whole world <br />
          awaits.
        </Typography>
        <Searchh />
        <Category />
        <Vacations />
      </Container>
    </Grid>
  );
};

export default Hero;
