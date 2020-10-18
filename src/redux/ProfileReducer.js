import {ProfileAPI} from "../API/myApi";

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    allPosts: [
        {id: 1, message: 'ну и где моя питса', likesCount: 12},
        {id: 2, message: 'ааа вот она ', likesCount: 2}
    ],
    newPostText: 'кто хочет питсы ?',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let postText = action.message
            return {
                ...state,
                allPosts: [...state.allPosts, {id: 5, message: postText, likesCount: '0'}]
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default: {
            return state;
        }
    }
}

export const onAddPost = (message) => ({type: ADD_POST, message})

export const onChangePost = (text) => ({type: UPDATE_POST_TEXT, text: text})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})

/*export const getStatus = (userId) => {
    return (dispatch) => {
        ProfileAPI.getProfileStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}*/

export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.updateProfileStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export const getProfile = (paramsUserId, authUserId) => {
    return (dispatch) => {
        let userId = paramsUserId
        if (!userId) {
            userId = authUserId
        }
        ProfileAPI.getProfileId(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
        ProfileAPI.getProfileStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}

export const addPost = (message) => {
        return (dispatch) => {
            dispatch(onAddPost(message))
    }
}

export const changePost = (text) => {
    return (dispatch) => {
        dispatch(onChangePost(text))
    }
}

export default profileReducer;