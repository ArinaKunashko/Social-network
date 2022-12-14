import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import PersonIcon from '@mui/icons-material/Person'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import { useNavigate } from 'react-router-dom'

const User = ({ user, followingInProgress, unfollow, follow }) => {

    const navigate = useNavigate()

    return (

        <Box sx={{ padding: '20px 30px', flexGrow: 1, }}>
            <Card sx={{ minWidth: 300, backgroundColor: '#ffffff' }}>
                <CardActionArea onClick={() => navigate(`/profile/${user.id}`)} >
                    <CardContent>
                        <Grid container>
                            <Grid item xs={5} md={2}>
                                {user.photos.small != null ? <Avatar src={user.photos.small} sx={{ width: 100, height: 100 }} />
                                    : <Avatar sx={{ bgcolor: '#004D40', color: '#004D40'[600], width: 100, height: 100 }}>
                                        <PersonIcon sx={{ width: 50, height: 50 }} />
                                    </Avatar>}
                            </Grid>
                            <Grid item xs={7} md={10}>
                                <Typography variant="h5" component='div'>
                                    {user.name}
                                </Typography>
                                <Typography variant="h7" component='div'>
                                    {user.status}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {user.followed
                        ? <Button
                            color='secondary'
                            size='small'
                            sx={{ margin: '7px 18px' }}
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollow(user.id)
                            }}> Unfollow </Button>
                        : <Button
                            color='secondary'
                            size='small'
                            sx={{ margin: '7px 18px' }}
                            variant='outlined'
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id)
                            }}> Follow </Button>}
                </CardActions>
            </Card>
        </Box>
    )
}

export default User
