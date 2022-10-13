import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./Login.module.css"
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import { Navigate } from 'react-router-dom';



const validateLoginForm = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required field';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Email or password is wrong';
    }

    return errors;

};

const validationSchemaLoginForm = Yup.object().shape({
    password: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .max(20, "Must be shorter than 20 characters")
        .required("Required field")
});

const Login = (props) => {

    if (props.isAuth) {
        return <Navigate replace to='/profile' />
    }

    return (
        <div>
            <h2> Login  </h2>

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false
                }}
                validate={validateLoginForm}
                validationSchema={validationSchemaLoginForm}

                onSubmit={(values, { setSubmitting, setStatus }) => {
                    props.login(values.email, values.password, values.rememberMe, setStatus)
                    setSubmitting(false)
                }

                }
            >
                {({ touched }) => (
                    <Form>

                        <div > Email
                            <Field
                                name={'email'}
                                type={'text'}
                                placeholder={'Your e-mail'} />
                        </div>
                        {touched.email}
                        <div>
                            <ErrorMessage name="email" component="span" className={s.errorMessage} />
                        </div>

                        <div> Password
                            <Field
                                name={'password'}
                                type={'password'}
                                placeholder={'Your password'} />
                        </div>
                        {touched.email}
                        <div>
                            <ErrorMessage name="password" component="span" className={s.errorMessage} />
                        </div>

                        <span className={s.rememberMe} >
                            <Field
                                type={'checkbox'}
                                name={'rememberMe'}
                                id='rememberMe' />
                            <label htmlFor={'rememberMe'} > Remember me </label>
                        </span>

                        <div>
                            <button
                                type={'submit'} > Login </button>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    )

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);