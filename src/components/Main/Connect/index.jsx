import { Grid, Typography } from '@mui/material'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import connectData from '../../../data/connect'

 

const Connect=()=> {
  return (
    <Grid>
      <Grid>
        {connectData.map((connectData)=>(
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={connectData.imgURL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {connectData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {connectData.about}
        </Typography>
        <Typography variant=''>{connectData.view}</Typography>
      </CardContent>
    
    </Card>

        ))}
    
    </Grid>
  </Grid>
  )
}

export default Connect