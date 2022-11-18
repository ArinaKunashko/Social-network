import React from 'react'
import Stack from '@mui/material/Stack'
import preloader from '../../../assets/images/preloader.gif'

let Preloader = (props) => {
    return <Stack alignItems='center' 
    sx={{ paddingTop:'100px', color: 'grey.500' }} spacing={2} >
    <img src={preloader} />
  </Stack>
}

export default Preloader
