import React from 'react'
import Message from './Message/Message'
import Button from '@mui/material/Button'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import PersonIcon from '@mui/icons-material/Person'
import { blue } from '@mui/material/colors'
import Grid from '@mui/material/Grid'

const validationSchema = yup.object({
    newMessageBody: yup
        .string('Enter your message')
        .required('Message is required')
})

const Dialogs = (props) => {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const state = props.dialogsPage

    const dialogElements =
        state.dialogs.map(d =>
            <ListItem button onClick={handleClickOpen} key={d.name}>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                        <PersonIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={d.name} />
            </ListItem>
        )

    const messagesElement =
        state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)

    const addNewMassage = (values, { resetForm }) => {
        props.sendMessage(values.newMessageBody)
        resetForm({ newMessageBody: '' })
    }

    const formik = useFormik({
        initialValues: {
            newMessageBody: ''
        },
        validationSchema: validationSchema,
        onSubmit: addNewMassage
    })

    return (

        <Box sx={{ padding: '30px', flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <List>{dialogElements}</List>
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ paddingTop: '23px' }} > {messagesElement} </Box>
                    <Box component='form'
                        noValidate
                        onSubmit={formik.handleSubmit}
                        sx={{ mt: 1 }}>
                        <TextField margin='normal'
                            fullWidth
                            id='newMessageBody'
                            label='Your message'
                            name='newMessageBody'
                            autoComplete='newMessageBody'
                            autoFocus
                            value={formik.values.newMessageBody}
                            onChange={formik.handleChange}
                            error={formik.touched.newMessageBody && Boolean(formik.errors.newMessageBody)}
                            helperText={formik.touched.newMessageBody && formik.errors.newMessageBody}
                        />
                        <Button variant='contained' type='submit' >Send</Button>
                    </Box>
                </Grid>
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle>
                        Coming soon
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose}>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        </Box>
    )
}

export default Dialogs
