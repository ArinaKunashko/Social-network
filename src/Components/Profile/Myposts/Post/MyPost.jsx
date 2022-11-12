import React from 'react'
import Post from './Post'
import Button from '@mui/material/Button'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const validationSchema = yup.object({
    newPostText: yup
        .string('Enter your message')
        .required('Message is required')
})

const MyPost = (props) => {
    const postsElements =
        props.posts.map(posts => <Post message={posts.message} likesCount={posts.likesCount} />)
    const onAddPost = (values, { resetForm }) => {
        props.addPost(values.newPostText)
        resetForm({ newPostText: '' })
    }

    const formik = useFormik({
        initialValues: {
            newPostText: ''
        },
        validationSchema: validationSchema,
        onSubmit: onAddPost
    })

    return (

        <div>
            <Box sx={{ padding: '30px', flexGrow: 1 }}>
                <Card  sx={{ minWidth: 275, backgroundColor:'#ffffff' }}>
                    <CardContent>
                        <Typography variant='h5' component='div' sx={{ margin: '20px' }} >
                            My posts
                        </Typography>

                        <Box component='form'
                            noValidate
                            onSubmit={formik.handleSubmit}
                            sx={{ mt: 1, mb: 5 }}>
                            <TextField margin='normal'
                            color='secondary'
                                fullWidth
                                id='newPostText'
                                label='Anything new?'
                                name='newPostText'
                                autoComplete='newPostText'
                                value={formik.values.newPostText}
                                onChange={formik.handleChange}
                                error={formik.touched.newPostText && Boolean(formik.errors.newPostText)}
                                helperText={formik.touched.newPostText && formik.errors.newPostText}
                            />
                            <Button color='secondary' variant='contained' type='submit' sx={{ margin: '20px' }}>Add post</Button>
                            <Box item sx={{ margin: '20px' }}>
                                <List> {postsElements} </List>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}

export default MyPost
