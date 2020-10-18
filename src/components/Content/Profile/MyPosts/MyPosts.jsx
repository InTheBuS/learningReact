import React from 'react';
import MyPostsCss from './MyPosts.module.css'
import Post from './Post/Post'
import {onAddPost} from "../../../../redux/ProfileReducer";

const AllPosts = (props) => {

    let newPostElement = React.createRef();

/*    let changePost = () => {
        let text = newPostElement.current.value;
        props.changePost(text);
    }*/

    let allPostsData = props.allPosts
        .map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={MyPostsCss.content}>
            {allPostsData}
        </div>);
}

export default AllPosts;


