import React, { useState } from 'react'
import Preloader from '../../common/preloader/preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileDataForm from './ProfileDataForm'
import Button from '@mui/material/Button'
import PersonIcon from '@mui/icons-material/Person'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import ListItemText from '@mui/material/ListItemText'

const ProfileInfo = ({ profile, updateStatus, isOwner, savePhoto, saveProfile, status }) => {
    let [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (values) => {
        saveProfile(values)
        setEditMode(false)
    }

    return (
        <Box sx={{ padding: '20px 30px', flexGrow: 1, }}>
            <Card sx={{ minWidth: 275, backgroundColor: '#ffffff' }}>
                <CardContent>
                    <Grid container>
                        <Grid item xs={2.5}>
                            {profile.photos.large != null
                                ? <Avatar src={profile.photos.large} sx={{ width: 200, height: 200 }} />
                                : <Avatar sx={{ bgcolor: '#004D40', color: '#004D40'[600], width: 200, height: 200 }}>
                                    <PersonIcon sx={{ width: 200, height: 200 }} />
                                </Avatar>}
                            {isOwner && editMode &&
                                <Button color='secondary' sx={{ margin: '30px 60px' }} variant='contained' component='label'>
                                    <AddAPhotoIcon />
                                    <input hidden accept='image/*' type='file' onChange={onMainPhotoSelected} />
                                </Button>
                            }
                        </Grid>
                        <Grid item xs={9.5}>
                            <Typography variant='h5' component='div'>
                                {profile.fullName}
                            </Typography>
                            <ListItemText >
                                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                            </ListItemText>
                            <Typography variant='h7' component='div'>
                                {editMode
                                    ? <ProfileDataForm profile={profile}
                                        isOwner={isOwner}
                                        gotoViewMode={() => { setEditMode(false) }}
                                        updateStatus={updateStatus}
                                        onSubmit={onSubmit}
                                    />
                                    : <ProfileData profile={profile}
                                        isOwner={isOwner}
                                        gotoEditMode={() => { setEditMode(true) }}
                                        updateStatus={updateStatus} />}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box >
    )
}
const ProfileData = ({ profile, status, updateStatus, isOwner, gotoEditMode, lookingForAJobDescription }) => {
    return <Box sx={{ padding: '20px 30px', flexGrow: 1, }}>
        <Typography variant='h7' component='div'> About Me: {profile.aboutMe} </Typography>
        <Typography variant='h7' component='div'> Looking For A Job : {profile.lookingForAJob ? "yes" : "no"} </Typography>
        {profile.lookingForAJob &&
            <Typography variant='h7' component='div'> My professional skills: {profile.lookingForAJobDescription} </Typography>}
        <Typography variant='h7' component='div'> Contact GitHub: {profile.contacts.github} </Typography>
        <Typography variant='h7' component='div'> Contact Vk: {profile.contacts.vk} </Typography>
        <Typography variant='h7' component='div'> Contact Twitter: {profile.contacts.twitter} </Typography>
        <Typography variant='h7' component='div'> Contact Instagram: {profile.contacts.instagram} </Typography>
        {isOwner &&
            <Typography variant='h7' component='div'>
                <Button color='secondary' variant='contained' onClick={gotoEditMode} sx={{ margin: '20px 0px' }}> Edit </Button>
            </Typography>}
    </Box>
}

export default ProfileInfo
