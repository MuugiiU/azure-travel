import React from "react";

import { Grid, imageListClasses } from "@mui/material";
import DrawerAppBar from "../../components/Hero/Nav";
import Hero from "../Hero";
import Main from "../Main";
import Modal from "@mui/material/Modal";
import AuthPage from "../Auth";
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
        <DrawerAppBar
          handleOpen={handleOpen}
          handleClose={handleClose}
          style={style}
          open={open}
        />
        <Container>
          <Hero />
          <Main />
        </Container>
        <Reclam />
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description">
            <AuthPage />
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Home;
