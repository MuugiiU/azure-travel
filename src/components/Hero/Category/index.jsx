import { Typography, Grid, Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";

const Category = (filterData) => {
  const [categories, setCategories] = useState([]);
  const GetCategory = async () => {
    try {
      const res = await axios.get("http://localhost:8010/category");
      setCategories(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetCategory();
  }, []);

  return (
    <Grid sx={{ marginTop: "3rem" }}>
      <Typography variant="h3" sx={{ color: "white", fontSize: "32px" }}>
        {" "}
        Top categories
      </Typography>
      <Grid xs={12} sm={8} md={6} sx={{ display: "flex", gap: "40px" }}>
        {categories.map((category, index) => {
          return (
            <NavLink
              xs={12}
              sm={8}
              md={6}
              key={index}
              to={"/category/" + category.title}
              style={{ marginTop: "2rem", textDecoration: "none" }}
            >
              <img src={category.image} alt="" />
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

export default Category;
