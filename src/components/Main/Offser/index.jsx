import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import OffserData from "../../../data/Offser";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
});

export default function Offser() {
  return (
    <Grid
      sx={{
        top: "4.6rem",
        overflow: "hidden",
        marginTop: "13rem",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "37px",
        }}
      >
        Offers
      </Typography>
      <Grid
        sx={{
          display: "flex",
          gap: "15px",
          justifyContent: "space-between",
          boxShadow: "0px 5.50776px 22.031px rgba(158, 158, 158, 0.25)",
          overflowX: "auto",
          overflowY: "hidden",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          borderRradius: "22.031px",
          marginTop: "2rem",
          flexWrap: { md: "wrap" },
        }}
      >
        {" "}
        {OffserData.map((OffserData, index) => {
          return (
            <Paper
              key={index}
              sx={{
                height: "20%",
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Grid sx={{ display: "flex", gap: "2rem", padding: "1rem" }}>
                <Grid item>
                  <ButtonBase sx={{ width: 300, height: 150, p: "5px" }}>
                    <Img alt="complex" src={OffserData.imgURL} />
                  </ButtonBase>
                </Grid>
                <Grid
                  item
                  container
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Grid item container direction="column">
                    <Grid item sx={{ width: "16rem", height: "8.75rem" }}>
                      <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        sx={{ fontSize: "1rem" }}
                      >
                        {OffserData.title}
                      </Typography>
                      <Typography
                        variant="h2"
                        gutterBottom
                        sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
                      >
                        {OffserData.about}
                      </Typography>
                      <Typography
                        variant="h3"
                        color="text.secondary"
                        sx={{ fontSize: "1rem" }}
                      >
                        {OffserData.p}
                      </Typography>
                    </Grid>
                    <Button
                      variant="contained"
                      size="medium"
                      sx={{
                        borderRadius: "2rem",
                        width: "7.75rem",
                        height: "4rem",
                        buttom: "0.5rem",
                      }}
                    >
                      {OffserData.buttom}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          );
        })}
      </Grid>
    </Grid>
  );
}
