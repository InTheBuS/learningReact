import React from 'react';
import Postcss from './Post.module.css'

const Post = (props) => {
    return (
        <div className={Postcss.item}>
            <img src='https://sun1-19.userapi.com/wMq8GKiVdKh4mCeBMfStDV909t-_wGwwyG7OGQ/SFACa5LAxFk.jpg'></img>
            <div>
                {props.message}
            </div>
            <div>
                Likes: {props.likesCount}
            </div>
        </div>
    );
}

export default Post;