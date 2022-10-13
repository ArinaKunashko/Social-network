import React from "react";
import { updateNewMessageBodyCreator } from "../../Redux/dialogs-reducer";
import { sendMessageCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect} from "react-redux";
import { compose } from "redux";
import { Navigate } from "react-router-dom";
import { withAuthNavigate } from "../../hoc/withAuthNavigare";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
) (Dialogs);