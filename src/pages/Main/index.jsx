import { Grid } from "@mui/material";
import React from "react";
import Offser from "../../components/Offser";

const Main = () => {
  return (
    <Grid  sx={{
      margin:"10%",
      width: "100%",
      height: "100%",
     
    }}>
      <Offser />
    </Grid>
  );
};

export default Main;
