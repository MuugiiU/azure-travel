import { Grid, Typography } from '@mui/material'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import connectData from '../../../data/connect'

 

const Connect=()=> {
  return (
    <Grid>
      <Grid sx={{display:"flex", gap:"10px", marginLeft:"20px", marginTop:"10px",width:"100%"}}>
        {connectData.map((connectData)=>(
          <Card sx={{ width: 550 }}>
      <CardMedia
        sx={{ height:"200px", width:"200p"}}
        image={connectData.imgURL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h3"sx={{fontWeight:"bold",fontSize:"1.5rem",lineHeight: "1.5rem"}} component="div">
          {connectData.title}
        </Typography>
        <Typography variant="h4" color="text.secondary" sx={{fontSize:"1rem",lineHeight: "1.5rem"}}>
         {connectData.about}
        </Typography>
        <Typography variant='h5'sx={{fontSize:"1rem",lineHeight: "1.5rem"}}>{connectData.view}</Typography>
      </CardContent>
    
    </Card>

        ))}
    
    </Grid>
  </Grid>
  )
}

export default Connect