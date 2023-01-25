import { Typography, Grid, Box } from "@mui/material";
import React from "react";

import { SwipeableDrawer } from "@mui/material";
import vacationData from "../../data/vacation";
const Vacation = () => {
  return (
    <Grid sx={{ marginTop: "10%" }}>
      <Typography variant="h3" sx={{ fontSize: "32px", color: "white" }}>
        {" "}
        Top Vacation
      </Typography>

      <Grid
        sx={{
          position: "relative",
          overflowX: "auto",
          overflowY: "hidden",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box
          sx={{
            gap: "40px",
            display: "flex",
          }}
        >
          {vacationData.map((vacationData, index) => (
            <Box
              key={index}
              sx={{
                width: "300px",
                height: "200px",
                marginTop: "20px",
              }}
            >
              <img src={vacationData.img} alt="" />
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  fontSize: "24px",
                  position: " absolute",
                  top: "160px",
                  padding: "10px",
                }}
              >
                {vacationData.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Vacation;
