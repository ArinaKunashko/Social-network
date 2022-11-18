import React from 'react'
import * as yup from 'yup'
import { connect } from 'react-redux'
import { login, getCaptchaUrl } from '../../Redux/auth-reducer'
import { Navigate } from 'react-router-dom'
import { useFormik } from 'formik'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'

const Login = (props) => {
    const validationSchema = yup.object({
        isCaptchaRequire: yup.boolean(),
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(4, 'Password should be of minimum 4 characters length')
            .required('Password is required'),
        captcha: yup
            .string('Enter captcha').when('isCaptchaRequire', {
                is: (isCaptchaRequire) => props.captchaUrl,
                then: yup.string().required('Captcha is required'),
                otherwise: yup.string()
              })
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting, setStatus }) => {
            props.login(values.email, values.password, values.rememberMe, values.captcha, setStatus)
            setSubmitting(false)
        }
    })

    if (props.isAuth) {
        return <Navigate replace to='/profile' />
    }

    return (

        <Grid container
            component='main'
            sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1"
                        variant="h5">
                        Sign in
                    </Typography>
                    <Box component='form'
                        noValidate
                        onSubmit={formik.handleSubmit}
                        sx={{ mt: 1 }}>
                        <TextField margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            autoComplete='email'
                            autoFocus
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        {props.captchaUrl && 
                        <div>
                            <img src={props.captchaUrl} />
                            <TextField
                            margin='normal'
                            required
                            fullWidth
                            name='captcha'
                            label='Enter captcha'
                            type='test'
                            id='captcha'
                            value={formik.values.captcha}
                            onChange={formik.handleChange}
                            error={formik.touched.captcha && Boolean(formik.errors.captcha)}
                            helperText={formik.touched.captcha && formik.errors.captcha}
                        />
                        </div>
                        }
                        <FormControlLabel name='rememberMe'
                            control={<Checkbox onChange={formik.handleChange}
                                checked={formik.values.rememberMe}
                                color='primary' />}
                            label='Remember me'
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            size='large'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)
