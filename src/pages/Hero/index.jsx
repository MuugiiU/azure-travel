import { Container, Grid, Typography } from "@mui/material";

import React from "react";
import DrawerAppBar from "../../components/Hero/Nav";
import Searchh from "../../components/Hero/Searchh";
import Category from "../../components/Hero/Category";
import Vacation from "../../components/Hero/Vacations";
import Vacations from "../../components/Hero/Vacations";
import { useState } from "react";
import datas from "../../data/datas";
const Hero = () => {
  const [cardList, setCardList] = useState(datas);
  const handlechange = (e) => {
    const change = datas.filter((data) =>
      data.category.toLowerCase().includes(e.target.value)
    );
    setCardList(change);
  };

  return (
    <Grid
      sm={12}
      md={6}
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "90vh",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontSize: "72px",
            lineHeight: "83px",
            marginTop: "3rem",
          }}
        >
          The whole world <br />
          awaits.
        </Typography>
        <Searchh handlechange={handlechange} />
        <Category datas={cardList} />
        <Vacations />
      </Container>
    </Grid>
  );
};

export default Hero;
