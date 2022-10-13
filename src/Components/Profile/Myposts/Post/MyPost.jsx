import React from "react";
import s from './MyPost.module.css'
import Post from "./Post";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";



const validateNewPostText = values => {
    const errors = {};
    if (!values.newPostText) {
        errors.newPostText = "Write something";
    }
    return errors;
};


const validateSchemaNewPostText = Yup.object().shape({

    newPostText: Yup.string()
        .min(1, "Must be longer than 2 characters")
        .max(1000, "Must be shorter than 10 characters")
        .required("Write something")
});


const MyPost = (props) => {
    // let state = props.store.getState().profilePage
    let postsElements =
        props.posts.map(posts => <Post message={posts.message} likesCount={posts.likesCount} />)


    let newPostElement = React.createRef();


    let onAddPost = (values, {resetForm}) => {
        // debugger
        props.addPost(values.newPostText)
        // alert(values.onAddPost)
        resetForm({ newPostText: ''})
    }


    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>

            <Formik
                initialValues={{
                    newPostText: ""
                }}

                onSubmit={onAddPost}

                // onSubmit={(onAddPost, {resetForm} ) => {
                //     console.log(onAddPost)   
                //     resetForm({ newPostText: ''})
                    
                //    }}

                // onSubmit={(onAddPost, actions) => {
                //     props.onSubmit(onAddPost).then(() => {
                //         // actions.setSubmitting(false);
                //         actions.resetForm({
                //             onAddPost: {
                //                 newPostText: ""
                //             },
                //         });
                //     });
                // }}


                validate={validateNewPostText}
                validationSchema={validateSchemaNewPostText}
            >

                {() => (
                    <Form >
                        <div>
                            <div>
                                <Field placeholder="Anything new?"
                                    name={'newPostText'}
                                    type={'text'}
                                    className={s.textarea}
                                    ref={newPostElement}
                                    values={props.newPostText} />
                            </div>

                            <div>
                                <ErrorMessage name="newPostText" component="span" className={s.errorMessage} />
                            </div>

                            <div> <button className={s.buttonAddPost} type='submit'> Add post</button>
                            </div>

                        </div>
                    </Form>
                )
                }</Formik>



            <div className={s.newPost} >
                New post
            </div>

            <div className={s.posts}>
                {postsElements}
                {/* <Post /> */}

                <div className={s.item}>
                    {/* Post 2 */}
                </div>
            </div>
        </div>

    )
}

export default MyPost;