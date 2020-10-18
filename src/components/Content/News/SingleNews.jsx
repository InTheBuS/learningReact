import React from 'react';

const SingleNews = (props) => {
    return (
        <div>
            <div>
                {/*<h3>
                    {props.tittle}
                </h3>*/}
                {props.body}
            </div>
        </div>
    );
}

export default SingleNews;