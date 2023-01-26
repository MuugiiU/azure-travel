import { Grid,Container } from "@mui/material";
import React from "react";
import Offser from "../../components/Main/Offser";
import Browse from "../../components/Main/Browse";
import Plan from "../../components/Main/Plan";

const Main = () => {
  return (
    <Grid>
      <Container>
      <Offser />
      <Browse/>
      <Plan/>
      </Container>
    </Grid>
  );
};

export default Main;
