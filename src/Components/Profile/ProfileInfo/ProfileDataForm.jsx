import React from 'react'
import { useFormik } from 'formik'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import * as yup from 'yup'

const validationSchema = yup.object({
    fullName: yup
        .string('Enter your fullname')
        .required('Fullname is required'),
})

const ProfileDataForm = ({ profile, isOwner, onSubmit, gotoViewMode }) => {
    const formik = useFormik({
        initialValues: profile,
        validationSchema: validationSchema,
        onSubmit: (values) => { onSubmit(values) }
    })

    return <div>
        <Box sx={{ padding: '30px', flexGrow: 1 }}>
            <Box component='form'
                noValidate
                onSubmit={formik.handleSubmit}
                sx={{ mt: 1, mb: 5 }}>
                <TextField margin='normal'
                    fullWidth
                    label='Your full name'
                    name='fullName'
                    autoComplete='fullName'
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                    helperText={formik.touched.fullName && formik.errors.fullName}
                />
                <TextField margin='normal'
                    fullWidth
                    label='Tell us about yourself'
                    name='aboutMe'
                    autoComplete='aboutMe'
                    value={formik.values.aboutMe}
                    onChange={formik.handleChange}
                />
                <FormControlLabel name='lookingForAJob'
                    control={<Checkbox checked={formik.values.lookingForAJob}
                        onChange={formik.handleChange}
                        color='primary' />}
                    label='Are you looking for a job?'
                />
                <TextField margin='normal'
                    fullWidth
                    label='Tell us about professional skills'
                    name='lookingForAJobDescription'
                    autoComplete='lookingForAJobDescription'
                    value={formik.values.lookingForAJobDescription}
                    onChange={formik.handleChange}
                />
                <TextField margin='normal'
                    fullWidth
                    label='Write your contacts on GitHub '
                    name='contacts.github'
                    autoComplete='contacts.github'
                    value={formik.values.contacts.github}
                    onChange={formik.handleChange}
                />
                <TextField margin='normal'
                    fullWidth
                    label='Write your contacts on Vk '
                    name='contacts.vk'
                    autoComplete='contacts.vk'
                    value={formik.values.contacts.vk}
                    onChange={formik.handleChange}
                />
                <TextField margin='normal'
                    fullWidth
                    label='Write your contacts on Twitter '
                    name='contacts.twitter'
                    autoComplete='contacts.twitter'
                    value={formik.values.contacts.twitter}
                    onChange={formik.handleChange}
                />
                <TextField margin='normal'
                    fullWidth
                    label='Write your contacts on Instagram '
                    name='contacts.instagram'
                    autoComplete='contacts.instagram'
                    value={formik.values.contacts.instagram}
                    onChange={formik.handleChange}
                />
                {isOwner && <div> <Button variant='contained' type='submit' > Save </Button>
                    <Button variant='text' onClick={gotoViewMode}  > Cancel </Button>
                </div>
                }
            </Box>
            <Box item xs={10}>
            </Box>
        </Box>
    </div>
}

export default ProfileDataForm
