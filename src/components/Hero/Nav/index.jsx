import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { navItems } from "../../../data/navItems";
import Modal from "@mui/material/Modal";
import Login from "../../../pages/Login";
import { useAuth } from "../../../context";

const drawerWidth = 240;
const settings = ["Profile", "Account", "Dashboard", "Logout"];
function Navbar({ window, logout, open, handleClose, handleOpen }) {
  const { user, setUser } = useAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Grid xs={12} sm={10} md={6}>
      <Box
        onClick={handleDrawerToggle}
        sx={{ textAlign: "center", color: { sm: "black" } }}
      >
        <Typography variant="h6" sx={{ my: 2 }}>
          trxvl.
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center", fontSize: "16px" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Grid>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid xs={12} sm={10} md={6}>
      <Box sx={{ display: "flex", color: { sm: "black" } }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            background: "transparent",
            boxShadow: "none",
            color: { sm: "black" },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              xs={12}
              sm={10}
              md={6}
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                width: "77px",
                height: "37px",
                fontSize: "32px",
                fontFamily: "Helvetica",
              }}
            >
              trxvl.
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                color: "transparent",
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "white",
                    fontSize: "16px",
                    fontFamily: "Helvetica",
                  }}
                >
                  {item}
                </Button>
              ))}
              {user ? (
                <Button
                  onClick={() => {
                    logout();
                  }}
                  sx={{ color: "white" }}
                >
                  Sign Out
                </Button>
              ) : (
                <Button
                  onClick={handleOpen}
                  sx={{
                    padding: "0",
                    fontWeight: "700",
                    fontSize: "16px",
                    color: "#fff",
                    textTransform: "none",
                    marginLeft: "2vw",
                    opacity: "0.8",
                  }}
                >
                  Sign In
                </Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav" sm="12" md="6">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                color: "transparent",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Modal open={open} onClose={handleClose}>
          <Login handleClose={handleClose} setUser={setUser} />
        </Modal>
      </Box>
    </Grid>
  );
}

export default Navbar;
