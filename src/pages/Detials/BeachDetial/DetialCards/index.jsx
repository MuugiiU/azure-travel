import { Grid } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import datas from "../../../../data/datas";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const DetialCards = ({ Finddata }) => {
  return (
    <Grid>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 44 }} color="text.secondary" gutterBottom>
            Title:{Finddata.title}
          </Typography>
          <Grid>
            <Grid>
              <img src={Finddata.imgUTL} alt="" />
            </Grid>
            <Grid>
              <Box>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <AccessTimeIcon /> {Finddata.bairshil}
                </Typography>
                <Box>
                  <Rating>Rating:{Finddata.rating}</Rating>
                </Box>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Price:{Finddata.price}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Day:{Finddata.day}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small">{Finddata.tovch}</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default DetialCards;
