import React from 'react'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'

let Preloader = (props) => {
    return <Stack alignItems='center' 
    sx={{ paddingTop:'100px', color: 'grey.500' }} spacing={2} >
    <CircularProgress size={500} color='success' />
  </Stack>
}

export default Preloader
