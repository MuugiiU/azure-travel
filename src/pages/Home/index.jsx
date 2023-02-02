import React from "react";

import { Grid, imageListClasses } from "@mui/material";
import Navbar from "../../components/Hero/Nav";
import Hero from "../Hero";
import Main from "../Main";
import { Typography, Box } from "@mui/material";
import { Container } from "@mui/system";
import Reclam from "../Reclam";
import { AirlineSeatReclineNormal } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "calc(50% - 280px)",
  left: "calc(50% - 200px)",
  width: "400px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid
        sx={{
          background: "url(./img/bgpic.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
      >
        {/* <Navbar
          handleOpen={handleOpen}
          handleClose={handleClose}
          style={style}
          open={open}
        /> */}
        <Container>
          <Hero />
          <Main />
        </Container>
        <Reclam />
      </Grid>
    </>
  );
};

export default Home;
