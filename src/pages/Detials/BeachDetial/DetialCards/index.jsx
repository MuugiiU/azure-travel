import { Grid } from "@mui/material";
import React from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import datas from "../../../../data/datas";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const DetialCards = () => {
  return (
    <Grid>
      {datas.map((datas) => (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Title:{datas.title}
            </Typography>
            <Grid>
              <Grid>
                <img src={datas.imgUTL} alt="" />
              </Grid>
              <Grid>
                <Box>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <AccessTimeIcon /> {datas.bairshil}
                  </Typography>
                  <Box>
                    <Rating>Rating:{datas.rating}</Rating>
                  </Box>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Price:{datas.price}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Day:{datas.day}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button size="small">{datas.tovch}</Button>
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
};

export default DetialCards;
