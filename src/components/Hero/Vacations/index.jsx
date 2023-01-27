import { Typography, Grid, Box } from "@mui/material";
import React from "react";
import vacationData from "../../../data/vacation";
const Vacations = () => {
  return (
    <Grid sx={{ width: "100%", marginTop: "2rem" }}>
      <Typography variant="h3" sx={{ fontSize: "32px", color: "white" }}>
        {" "}
        Top Vacation
      </Typography>

      <Grid
        sx={{
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
                marginTop: "2rem",
                position: "relative",
              }}
            >
              <img src={vacationData.img} alt="" />
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  fontSize: "24px",
                  padding: "10px",
                  position: "absolute",
                  bottom: "0",
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

export default Vacations;
