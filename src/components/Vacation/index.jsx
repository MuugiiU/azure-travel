import { Typography, Grid, Box } from "@mui/material";
import React from "react";

import { SwipeableDrawer } from "@mui/material";
import vacationData from "../../data/vacation";
const Vacation = () => {
  return (
    <Grid sx={{ marginTop: "100px", position: "relative" }}>
      <Typography variant="h3" sx={{ color: "white", fontSize: "32px" }}>
        {" "}
        Top Vacation
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 5,
          top: "70px",
          position: "absolute",
        }}
      >
        {vacationData.map((vacationData, index) => {
          return (
            <Box
              sx={{
                top: "170px",
                width: "300px",
                height: "200px",
              }}
              key={index}
            >
              <img width="100%" height="100%" src={vacationData.img} alt="" />
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  fontSize: "24px",
                  position: " absolute",
                  top: "160px",
                }}
              >
                {vacationData.title}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Grid>
  );
};

export default Vacation;
