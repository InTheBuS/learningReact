import React from "react";
import {NavLink} from "react-router-dom";


const Bar = (props) => {
    return (
        <div className={props.className} >
            <NavLink to={props.nav} activeClassName={props.activeClassName} >{props.name}</NavLink>
        </div>
    )
}

export default Bar