import React from "react";
import { Grid } from "@mui/material";
import Beaches from "./Beaches";
import { useParams } from "react-router-dom";
import datas from "../../data/datas";
const Categories = () => {
  const { id } = useParams();
  console.log(id);
  const filteredData = datas.filter((data) => data.category == id);

  return (
    <Grid sx={{ width: "100%", height: "100vh" }}>
      <Beaches filteredData={filteredData} />
    </Grid>
  );
};

export default Categories;
