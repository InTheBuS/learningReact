import React from 'react';
import loaderGif from "../../subjects/Loader/Ring-Loading.gif";

const loader = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <img src={loaderGif}/>
        </div>
    )
}

export default loader