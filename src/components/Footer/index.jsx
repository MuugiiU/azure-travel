import React from "react";
import footerData from "../../data/footer";
import { Grid, Typography, Container, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <Grid
      sx={{
        width: "100%",
        top: "20px",
        background: "#141414",
        color: "white",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        {" "}
        <Typography
          variant="h2"
          sx={{ fontSize: "2rem", lineHeight: "2.3rem" }}
        >
          Trxvl.
        </Typography>
        {footerData.map((footerData) => (
          <Grid sx={{ color: "#808080" }}>
            <Typography>{footerData.title}</Typography>
            <br></br>
            <Typography>{footerData.text1}</Typography>
            <br />
            <Typography>{footerData.text2}</Typography>
            <br></br>

            <Typography>{footerData.text3}</Typography>
          </Grid>
        ))}
      </Container>
      <Grid>
        <Box
          sx={{
            padding: "10px, 15px, 10px, 15px",
            color: "gray",
            height: "2.3rem",
            marginLeft: "20rem",
            width: "6.5rem",
            height: "2.3rem",
            border: "1px solid gray",
            textAlign: "center",
          }}
        >
          Helmet KOD
        </Box>

        <Typography sx={{ color: "gray", marginLeft: "20rem" }}>
          {" "}
          <CopyrightIcon />
          1997-2021 Netflix, Inc.i-062d573a0ee099242
        </Typography>
      </Grid>
      <Grid
        sx={{
          color: "#808080",
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "7.5rem",
          gap: "1.25rem",
          marginBottom: "5rem",
        }}
      >
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </Grid>
    </Grid>
  );
};

export default Footer;
