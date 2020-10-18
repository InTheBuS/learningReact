import React, {useState, useEffect} from 'react';

const ProfileStatusHook = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

        return (
            <div>
                {!editMode &&
                <div onClick={activateEditMode}>
                    {props.status  || 'пустота'}
                </div>}
                {editMode &&
                <div>
                    <input /*onClick={this.deactivateEditMode}*/onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>}
            </div>)

}

export default ProfileStatusHook