import { Typography, Grid, Box } from "@mui/material";
import React from "react";

import { SwipeableDrawer } from "@mui/material";
import vacationData from "../../data/vacation";
const Vacation = () => {
  return (
    <Grid>
       <Typography variant="h3" sx={{  fontSize: "32px",color:"white" }}>
        {" "}
        Top Vacation
      </Typography>
  
    <Grid sx={{ marginTop: "10px", position:"relative",  overflowX: "auto", overflowY:"hidden",   "&::-webkit-scrollbar": {
          display: "none",
        },}}>
     
      <Box
       sx={{
      gap:"60px",
        display:"flex",
      }}
      >
        {vacationData.map((vacationData, index) => (
            <Box
              sx={{
                top: "170px",
                width: "250px",
                borderRadius:"10px",
               
              }}
              key={index}
            >
              <img width="300px" height="200px" src={vacationData.img} alt="" />
              <Typography
                variant="h3"
                sx={{
                  color:"white",
                  fontSize: "24px",
                  position: " absolute",
                  top: "160px",
                  padding:"10px"
        }}
              >
                {vacationData.title}
              </Typography>
            </Box>
        )
        )}
      </Box>
    </Grid>
    </Grid>
  );
};

export default Vacation;
