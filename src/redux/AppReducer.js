import {AuthAPI} from "../API/myApi";
import {isLogged} from "./AuthReducer";

const INITIALIZED_USER = 'INITIALIZED_USER'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_USER: {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state;
        }
    }
}

export const initializedUser = () => ({type: INITIALIZED_USER})

export const initializeApp = () => {
    return async (dispatch) => {
        let promise =  await dispatch(isLogged())
        Promise.all([promise]).then(
            () => {
                dispatch(initializedUser())
            })
    }
}

export default appReducer;