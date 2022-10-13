import React from "react";

import s from './Friends.css'

const Friends = (props) => {
    return (
        <div className={s.sidebar}>{props.friends}</div>
    )
}


export default Friends;
