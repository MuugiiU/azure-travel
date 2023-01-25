import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AuthPage from "../Auth";
import { Grid, imageListClasses } from "@mui/material";
import DrawerAppBar from "../../components/navbar";
import Hero from "../Hero";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
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
    <Grid sx={{ background:"url(./img/bgpic.png)",height: "100vh" , width:"100%"}}>
      <DrawerAppBar />
   
      <Hero />
    </Grid>
  );
};

export default Home;

{
  /* <Button onClick={handleOpen}>Нэвтрэх</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <AuthPage/>
          </Typography>
        </Box>
      </Modal> */
}
