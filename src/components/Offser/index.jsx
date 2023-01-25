import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import OffserData from "../../data/Offser";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Offser() {
  return (
    <Grid sx={{ position: "relative", width: "100%", height: "100vh" }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "37px",
          position: "absolute",
          top: "80px",
        }}
      >
        Offers
      </Typography>
      <Grid sx={{ display: "flex", gap: "5px" }}>
        {" "}
        {OffserData.map((OffserData, index) => {
          return (
            <Paper
              sx={{
                p: 2,
                margin: "auto",
                maxWidth: 650,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Grid container spacing={2} sx={{ display: "flex", gap: "10px" }}>
                <Grid item>
                  <ButtonBase sx={{ width: 300, height: 200 }}>
                    <Img alt="complex" src={OffserData.imgURL} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        sx={{ fontSize: "16px" }}
                      >
                        {OffserData.title}
                      </Typography>
                      <Typography
                        variant="h2"
                        gutterBottom
                        sx={{ fontSize: "24px", fontStyle: "Bold" }}
                      >
                        {OffserData.about}
                      </Typography>
                      <Typography
                        variant="h3"
                        color="text.secondary"
                        sx={{ fontSize: "16px" }}
                      >
                        {OffserData.p}
                      </Typography>
                    </Grid>
                    <Button
                      variant="contained"
                      size="medium"
                      sx={{
                        borderRadius: "32px",
                        width: "140px",
                        height: "52px",
                        margin: "10px",
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
