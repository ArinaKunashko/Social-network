import React, { useState } from 'react'
import photosProfile from '../../../../assets/images/profilePhoto.jpeg'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'

const Post = (props) => {

    const [likesCount, setLikesCount] = useState(0)

    function increment() {
        setLikesCount((prevLikesCount) => {
            return prevLikesCount + 1
        })
    }

    return <Grid container sx={{ marginBottom: '20px' }}>
        <Grid item xs={1}>  <Avatar src={photosProfile} /> </Grid>
        <Grid item xs={10}>{props.message} </Grid>
        <Grid item xs={1}>
            <Button variant='text' onClick={increment} disabled={likesCount > 0} > {likesCount} likes</Button>
        </Grid>
    </Grid>
}

export default Post
