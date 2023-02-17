import { Grid } from "@mui/material";
import React from "react";
import DetialCards from "./DetialCards";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const BeachDetial = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  const GetDatas = async () => {
    try {
      const res = await axios.get("http://localhost:8010/travels");
      const beachData = res.data?.travels?.find((data) => data.id === id);
      setDetail(beachData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetDatas();
  }, []);

  return (
    <Grid>
      <DetialCards Finddata={detail} />
    </Grid>
  );
};

export default BeachDetial;
