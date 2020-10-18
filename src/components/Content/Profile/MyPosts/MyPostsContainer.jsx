import React from 'react';
import {addPost, onAddPost, changePost} from "../../../../redux/ProfileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import Post from "./Post/Post";
import MyPostsCss from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";
import AllPosts from "./MyPosts";

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="message"
                       component="textarea"
                       type="text"
                       placeholder="Tell something"/>
            </div>
            <div>
                <button type='submit'>Add post</button>
            </div>
        </form>
    )
}

const PostFormRedux = reduxForm({form: 'post'})(PostForm)

class myPostContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    allPostsData() {
        return this.props.allPosts
            .map(Post => <Post key={Post.id} message={Post.message} likesCount={Post.likesCount}/>
            )
    }

    addNewPost = (values) => {
        console.log(values)
        this.props.addPost(values.message)
    }

    render() {
        return (

            <div className={MyPostsCss.content}>
                <div>
                    <PostFormRedux onSubmit={this.addNewPost}/>
                </div>
                <div>
                    <AllPosts allPosts={this.props.allPosts}/>
                </div>
            </div>
        )/*<MyPosts allPosts={this.props.allPosts}
                        value={this.props.value}
                        changePost={this.props.changePost}
                        addPost={this.props.addPost}/>*/

    }
}

let mapStateToProps = (state) => {
    return {
        allPosts: state.profilePage.allPosts,
        value: state.profilePage.newPostText

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changePost,
        addPost
    }
}
/*
const myPostsContainer = connect(mapStateToProps,
    {changePost,
    addPost})(MyPosts);

export default myPostsContainer;*/

export default connect(mapStateToProps,
    {
        addPost
    })(myPostContainer)