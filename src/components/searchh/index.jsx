import * as React from "react";
import { Paper, Grid, Box, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export default function Searchh() {
  return (
    <Grid
      sx={{
        position: "absolute",
        width: "80%",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <Paper
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: "0.4",
          borderRadius: "16px",
          color: "transparent",
          opacity: "0.7",
          order: "1",
        }}
      >
        <Box sx={{ ml: 1, width: "40%" }}>
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, width: "60%" }}
            placeholder="Search destinations, hotels"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Box>
        <Button variant="text" sx={{ opacity: "0.7", color: "gray" }}>
          {" "}
          <CalendarTodayIcon /> Check in
        </Button>
        <Button variant="text" sx={{ color: "gray", opacity: "0.7" }}>
          <CalendarTodayIcon />
          Check out
        </Button>
        <Box sx={{ display: "flex" }}>
          <PermIdentityIcon sx={{ color: "gray" }} />
          <Typography sx={{ color: "gray" }}>1 room, 2 adults</Typography>
        </Box>
        <Button
          variant="contained"
          disabled
          sx={{ borderRadius: "32px", color: "white", opacity: "0.7" }}
        >
          Search
        </Button>
      </Paper>
    </Grid>
  );
}
