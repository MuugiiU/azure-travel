import React from "react";
import BrowData from "../../../data/Brow";
import { Box, Typography, Grid } from "@mui/material";

const Browse = () => {
  return (
    <Grid>
      <Typography
        variant="h3"
        sx={{ weight: 700, fontSize: "2rem", fontWeight: "bold" }}
      >
        Broswe by property type
      </Typography>
      <Grid
        sx={{
          display: "flex",
          gap: "1.5rem",
          marginTop: "40px",
        }}
      >
        {BrowData.map((item, index) => (
          <Box sx={{ position: "relative" }} key={index}>
            <img src={item.imgURL} width="310" height="200" />
            <Typography
              variant="h4"
              sx={{
                position: "absolute",
                marginTop: "-200px",
                color: "white",
                bottom: "0",
                marginLeft: "1.5rem",
                marginBottom: "1.5rem",
                fontSize: "1.5rem",
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default Browse;
