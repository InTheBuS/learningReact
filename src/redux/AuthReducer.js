import {AuthAPI} from "../API/myApi";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    email: null,
    userId: null,
    login: null,
    isAuth: false,
    isFetched: false,
}

const authReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case SET_USER_DATA: {
            /*let message = state.newMessageText*/
            return {
                ...state,
                email: action.email,
                userId: action.userId,
                login: action.login,
                isAuth: action.isAuth,
                isFetched: action.isFetched
            }
        }
        default: {
            return state;
        }
    }
}

export const setAuthUserData = (email, userId, login, isAuth, isFetched) => ({type: SET_USER_DATA, email, userId, login, isAuth, isFetched})

export const isLogged = () => {
    return (dispatch) => {
        console.log('IS_LOGGED')
        AuthAPI.authAccount()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data
                    console.log(email, id, login)
                    dispatch(setAuthUserData(email, id, login, true, true))
                } else if(response.data.resultCode === 1) {
                    dispatch(setAuthUserData(null, null, null, false, true))
                    /*console.log('не вошел')*/
                }
            })
    }
}

export default authReducer;