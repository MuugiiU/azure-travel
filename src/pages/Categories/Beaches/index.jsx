import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Grid, Rating } from "@mui/material";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

const Beach = ({ filteredData }) => {
  console.log(filteredData);
  return (
    <Grid sx={{ display: "flex", gap: "1rem", margin: "10%" }}>
      {filteredData.map((filterData, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140, width: 400 }}
            image={filterData.imgUTL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {filterData.title}
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ color: "blue", fontWeight: "bold" }}
            >
              {filterData.bairsgil}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {filterData.viewer}
            </Typography>
            <Rating value={filterData.rating} />
          </CardContent>
          <CardActions>
            <Link to={"/Detials/" + filterData.id}>{filterData.tovch}</Link>
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
};

export default Beach;
