import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import ListItemButton from '@mui/material/ListItemButton'

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
        <>
            {!editMode &&
                <ListItemButton color='secondary' onClick={activateEditMode} sx={{ mt: '12px', pl: '14px' }} >
                    {props.status || 'My status'}
                </ListItemButton>
                
            }
            {editMode &&
                <TextField margin='dense'
                    fullWidth
                    label={'Set status'}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                    onClick={activateEditMode}
                    value={status}
                    size='small'
                    color='secondary'
                />
            }
        </>
    )
}

export default ProfileStatusWithHooks
