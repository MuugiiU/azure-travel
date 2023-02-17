import React from "react";
import { Grid } from "@mui/material";
import Beaches from "./Beaches";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Categories = () => {
  const { id } = useParams();
  const [travel, setTravel] = useState([]);

  const GetDatas = async () => {
    try {
      const res = await axios.get("http://localhost:8010/travels");
      setTravel(res.data.travels);
      console.log(setTravel);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetDatas();
  }, []);
  console.log(id);

  const filteredData = travel.filter((travel) => travel.category === id);

  return (
    <Grid sx={{ width: "100%", height: "60vh" }}>
      <Beaches filteredData={filteredData} />
    </Grid>
  );
};

export default Categories;
