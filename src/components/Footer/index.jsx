import React from "react";
import footerData from "../../data/footer";
import { Grid, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Grid
      sx={{
        width: "100%",
        background: "#141414",
        color: "white",
        position: "relative",
      }}
    >
      {footerData.map((footerData) => (
        <Grid sx={{ display: "flex", position: "absolute" }}>
          <Typography>{footerData.title}</Typography>
          <Typography>{footerData.text1}</Typography>
          <Typography>{footerData.text2}</Typography>
          <Typography>{footerData.text3}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Footer;
