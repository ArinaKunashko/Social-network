import React from "react";
import { useState, useEffect } from "react";
import s from "./ProfileStatus.module.css"


const ProfileStatusWithHooks = (props) => {


    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    


    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span className = {s.statusSpan} onDoubleClick={activateEditMode} > {props.status || "My status"} </span>
                </div>
            }
            {editMode &&
                <div>
                    <input className = {s.statusSpan}
                    placeholder={'Set status'}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        onChange={onStatusChange}
                        value={status}
                    />
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks