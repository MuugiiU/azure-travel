import { Typography, Grid, Box } from "@mui/material";
import React from "react";
import Categories from "../../data/Categories";
const Category_component = () => {
  return (
    <Grid sx={{ marginTop: "120px" }}>
      <Typography variant="h3" sx={{ color: "white", fontSize: "32px" }}>
        {" "}
        Top categories
      </Typography>
      <Grid sx={{ display: "flex", gap: "40px" }}>
        {Categories.map((category, index) => {
          return (
            <Box sx={{ marginTop: "30px" }}>
              <img src={category.imgURL} alt="" />
              <Typography
                variant="h2"
                sx={{ color: "white", fontSize: "16px", opacity: "0.4" }}
              >
                {category.title}
              </Typography>
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Category_component;
