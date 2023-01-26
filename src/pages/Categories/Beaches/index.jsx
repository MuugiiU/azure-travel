import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import BeachData from "../../../data/Catalog/Beach";
import { Link } from "react-router-dom";

const Beach = () => {
  return (
    <Grid sx={{ display: "flex", gap: "1rem", margin: "10%" }}>
      {" "}
      {BeachData.map((BeachData, index) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140, width: 400 }}
            image={BeachData.imgUTL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {BeachData.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {BeachData.bairsgil}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={"/Detials"}>{BeachData.tovch}</Link>
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
};

export default Beach;
