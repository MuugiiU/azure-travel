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
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export default function Searchh() {
  return (
    <Grid
      sx={{
        height: "10vh",
        width: "100%",
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <Paper
        xs={12}
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
        <Grid sm={12} md={6}>
          <Box sx={{ ml: 1, width: "40%" }}>
            <IconButton
              sm={12}
              md={8}
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              sm={12}
              md={6}
              sx={{ ml: 1, width: "60%" }}
              placeholder="Search destinations, hotels"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Box>
        </Grid>
        <Grid sm={12} md={6}>
          <Button variant="text" sx={{ opacity: "0.7", color: "gray" }}>
            {" "}
            <CalendarTodayIcon /> Check in
          </Button>
        </Grid>
        <Grid sm={12} md={6}>
          <Button variant="text" sx={{ color: "gray", opacity: "0.7" }}>
            <CalendarTodayIcon />
            Check out
          </Button>
        </Grid>
        <Grid sm={12} md={6}>
          <Box sx={{ display: "flex" }}>
            <PermIdentityIcon sx={{ color: "gray" }} />
            <Typography sm={12} md={6} sx={{ color: "gray" }}>
              1 room, 2 adults
            </Typography>
          </Box>
        </Grid>
        <Grid sm={12} md={6}>
          <Button
            variant="contained"
            disabled
            sx={{ borderRadius: "32px", color: "white", opacity: "0.7" }}
          >
            Search
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}
