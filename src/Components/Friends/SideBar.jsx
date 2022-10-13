import React from "react";
import s from './Friends.css'
import Friends from "./Friends";

const Sidebar = (props) => {
    let sidebarElement =
        props.state.sidebar.map(sidebar => <Sidebar name={sidebar.name} id={sidebar.id} />)
    return (
        <div>
            <div className={s.Sidebar}>
                {sidebarElement}
            </div>
        </div>
    )
}


export default Sidebar;
