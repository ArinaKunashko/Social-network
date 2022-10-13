import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import s from './Dialogs.module.css'
import DialogItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validateNewMessageText = values => {
    const errors = {};
    if (!values.newMessageBody) {
        errors.newMessageBody = "Write something";
    }
    return errors;
};

const validateSchemaNewMessageText = Yup.object().shape({

    newMessageBody: Yup.string()
        .min(1, "Must be longer than 2 characters")
        .max(1000, "Must be shorter than 10 characters")
        .required("Write something")
});



const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogElements =
        state.dialogs.map(d => <DialogItems name={d.name} key={d.id} id={d.id} />)

    let messagesElement =
        state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)

    // let newMessageElement = React.createRef();
        

    let addNewMassage = (values, {resetForm}) => {
        
        props.sendMessage(values.newMessageBody)
        resetForm({newMessageBody:''})
    }
    return (
        <div className={s.dialogs}>
            {dialogElements}

            <div className={s.messages}>

                <div> {messagesElement} </div>
<div>
                <Formik
                    initialValues={{
                        newMessageBody: ""
                    }}
                    onSubmit={addNewMassage}
                    validate={validateNewMessageText}
                    validationSchema={validateSchemaNewMessageText}
                >

                    {() => (
                        <Form>
                            <div>


                                <div className={s.fieldNewMessageBody}>
                                    <Field placeholder="Enter your message"
                                        name={'newMessageBody'}
                                        values={props.newMessageBody}
                                        type={'text'}
                                       

                                    />

                                </div>
                                <div>
                                    <ErrorMessage name="newMessageBody" component="span" className={s.errorMessage} />
                                </div>

                                <div><button  type='submit'> Send </button></div>
                            </div> 

                        </Form>
                    )}
                </Formik>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;