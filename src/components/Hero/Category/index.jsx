import { Typography, Grid, Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Categories from "../../../data/Categories";
import datas from "../../../data/datas";
const Category_component = (filterData) => {
  return (
    <Grid sx={{ marginTop: "3rem" }}>
      <Typography variant="h3" sx={{ color: "white", fontSize: "32px" }}>
        {" "}
        Top categories
      </Typography>
      <Grid sx={{ display: "flex", gap: "40px" }}>
        {Categories.map((category, index) => {
          return (
            <NavLink
              key={index}
              to={"/Categories/" + category.title}
              style={{ marginTop: "2rem", textDecoration: "none" }}
            >
              <img src={category.imgURL} alt="" />
              <Typography
                variant="h2"
                sx={{ color: "white", fontSize: "16px", opacity: "0.4" }}
              >
                {category.title}
              </Typography>
            </NavLink>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Category_component;
