import React from "react";
import s from './../Dialogs.module.css'



let newMassageElement = React.createRef;
let addMessage = () => {
    let text = newMassageElement.current.value;
    alert(text)
    
}

const Message = (props) => {
    return <div>
        <div className={s.dialogs}>{props.message}</div>
    </div>
}

export default Message;