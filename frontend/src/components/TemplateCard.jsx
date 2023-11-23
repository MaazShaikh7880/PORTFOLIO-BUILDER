import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Display1 from './Display1.png'
import Display2 from './Display2.png'
import Display3 from './Display3.png'
import Display4 from './Display4.png'
import Display5 from './Display5.png'
const TemplateCard = () => {
    return <div>
        <Card sx={{ maxWidth: 800, margin:2,boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)'}}>
        <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={Display5}
          alt="green iguana"
        />

        <Typography gutterBottom variant="h5" align="center" fontSize={"25px"} fontWeight={"600"} component="div">
            Template1
          </Typography>

          </CardActionArea>


        </Card>


    </div>
}

export default TemplateCard