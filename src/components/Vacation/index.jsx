import { Typography, Grid, Box } from "@mui/material";
import React from "react";
import vacationData from "../../data/vacation";
const Vacation = () => {
  return (
    <Grid sx={{ Top: "150px" }}>
      <Typography variant="h3" sx={{ color: "white", fontSize: "32px" }}>
        {" "}
        Top Vacation
      </Typography>
      <Grid sx={{ display: "flex", gap: "40px" }}>
        {vacationData.map((vacationData, index) => {
          return (
            <Box
              sx={{
                Top: "40px",
                width: "200px",
                height: "200px",
              }}
              key={index}
            >
              <img src={vacationData.img} alt="" />
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  fontSize: "16px",
                  position: "absolute",
                  top: "600px",
                }}
              >
                {vacationData.title}
              </Typography>
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Vacation;
