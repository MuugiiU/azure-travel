import { Grid, Container } from "@mui/material";
import React from "react";
import Offser from "../../components/Main/Offser";
import Browse from "../../components/Main/Browse";
import Plan from "../../components/Main/Plan";
import Connect from "../../components/Main/Connect";

const Main = () => {
  return (
    <Grid sm={12} md={6}>
      <Container>
        <Offser />
        <Browse />
        <Plan />
      </Container>
      <Connect />
    </Grid>
  );
};

export default Main;
