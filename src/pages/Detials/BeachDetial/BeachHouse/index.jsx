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

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const BeachHouse = () => {
  return (
    <Grid>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Beach House
          </Typography>
          <Grid>
            <Grid>
              <img src="../img/Beachhouse.png" alt="" />
            </Grid>
            <Grid>
              <Box>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <AccessTimeIcon /> Business Hours
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Open from 5:30pm-10:30pm
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  +84-236-3981234
                </Typography>
              </Box>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BeachHouse;
