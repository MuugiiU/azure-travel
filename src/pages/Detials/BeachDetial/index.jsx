import { Grid } from "@mui/material";
import React from "react";
import DetialCards from "./DetialCards";
import { useParams } from "react-router-dom";
import datas from "../../../data/datas";
const BeachDetial = () => {
  const { id } = useParams();
  const Finddata = datas.find((data) => data.id === id);
  console.log(Finddata);
  return (
    <Grid>
      <DetialCards Finddata={Finddata} />
    </Grid>
  );
};

export default BeachDetial;
