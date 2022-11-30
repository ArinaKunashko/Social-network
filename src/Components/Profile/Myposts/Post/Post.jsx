import React, { useState } from 'react'
import photosProfile from '../../../../assets/images/profilePhoto.jpeg'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import T from '@mui/material/Typography'

const Post = (props) => {

    const [likesCount, setLikesCount] = useState(0)

    function toggleLike() {
        if (likesCount < 1) {
            setLikesCount((prevLikesCount) => prevLikesCount + 1)
        }
        else {
            setLikesCount((prevLikesCount) => prevLikesCount - 1)
        }
    }

    return <Grid container sx={{ marginBottom: '20px' }}>
        <Grid item xs={3} md={1}>  <Avatar src={photosProfile} /> </Grid>
        <Grid item xs={8} md={10}> <T variant='h7' component='div'> {props.message} </T> </Grid>
        <Grid item xs={1} md={1}>
            <IconButton color='secondary' onClick={toggleLike} >
                {likesCount
                    ? <FavoriteIcon />
                    : <FavoriteBorderIcon />
                }
            </IconButton>
        </Grid>
    </Grid>
}

export default Post
