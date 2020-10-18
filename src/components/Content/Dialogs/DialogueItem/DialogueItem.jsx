import React from "react";
import DialogsCss from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogue = (props) => {
    return (
        <div className={DialogsCss.dialogue}>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Dialogue;