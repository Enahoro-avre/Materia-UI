import { Checkbox } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Favorite from '@mui/icons-material/Favorite';

function Post() {
    return (
        <Card sx={{ margin: 5}}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title="John Wick"
            subheader="September 14, 2024"
        />
        <CardMedia
            component="img"
                height="20%"
                image='https://media.istockphoto.com/photos/famous-powerful-skogafoss-waterfall-at-south-iceland-picture-id1133155890?b=1&k=20&m=1133155890&s=612x612&w=0&h=7HlgxNFCs_WgZCTp54tdlUPA57zNCuSdbj4sqhLvZYo='
                // image='https://images.pexels.com/photos/2026960/pexels-photo-2026960.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            The waterfall model is a breakdown of project activities into linear sequential phases, meaning they are passed down onto each other, where each phase depends on the deliverables of the previous one and corresponds to a specialization of tasks. The approach is typical for certain areas of engineering design.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                {/* <FavoriteIcon /> */}
                <Checkbox icon={<FavoriteIcon />} checkedIcon={<Favorite sx={{ color:"red"}} />}  />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
        </CardActions>
        
        </Card>
  )
}

export default Post