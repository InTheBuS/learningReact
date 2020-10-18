import React from "react";

const Friend = (props) => {
    return (
        <div>
            <img src={props.src}/>
            <div>{props.name}</div>
        </div>)
}

export default Friend