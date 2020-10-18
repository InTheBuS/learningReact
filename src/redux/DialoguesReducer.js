const ADD_MESSAGE = 'ADD-MESSAGE'
/*const CHANGE_MESSAGE = 'CHANGE-MESSAGE'*/

let initialState = {

    allDialogues: [{id: 1, name: 'Питса'},
        {id: 2, name: 'Завчик'}
    ],

    allMessages: [
        {id: 1, message: 'я хочу питсы', me: true},
        {id: 2, message: 'а хуитсы ты не хочешь, дурак', me: false}
    ]
}

const dialoguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let message = action.message
            return {
                ...state,
                allMessages: [...state.allMessages, {id: 3, message: message, me: true}]
            }
        }
/*        case CHANGE_MESSAGE:
            return {
                ...state,
                newMessageText: action.message
            }*/

        default: {
            return state;
        }
    }
}

export const onAddMessage = (message) => ({type: ADD_MESSAGE, message})

/*export const onChangeMessage = (message) => ({type: CHANGE_MESSAGE, message: message})*/

export const addMessage = (message) => {
    return (dispatch) => {
        dispatch(onAddMessage(message))
    }
}
/*
export const changeMessage = (message) => {
    return (dispatch) => {
        dispatch(onChangeMessage(message))
    }
}*/

export default dialoguesReducer;