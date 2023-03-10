import React from "react";
import { Grid, Box, Typography } from "@mui/material";
const Plan = () => {
  return (
    <Grid
      xs={12}
      sm={6}
      md={4}
      sx={{ marginTop: "4.5rem", position: "relative" }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),",
        }}
      >
        <img src="../img/plan.png" alt="" />
        <Typography
          xs={12}
          sm={10}
          md={4}
          variant="h2"
          sx={{
            fontSize: "3.5rem",
            position: "absolute",
            marginTop: "-18rem",
            marginLeft: "5rem",
            color: "white",
          }}
        >
          Plan your trip with travel expert
        </Typography>
        <Typography
          xs={12}
          sm={10}
          md={4}
          variant="h4"
          sx={{
            fontSize: "2rem",
            position: "absolute",
            marginTop: "-9.5rem",
            marginLeft: "5rem",
            color: "white",
          }}
        >
          Our professional advisors can craft your perfect itinerary
        </Typography>
      </Box>
    </Grid>
  );
};

export default Plan;
