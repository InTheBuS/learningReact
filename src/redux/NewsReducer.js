const ADD_NEWS = 'ADD_NEWS'
const CHANGE_NEWS_TEXT = 'CHANGE_NEWS_TEXT'

let initialState = {
    news: [
        {id: 1,/* tittle: 'Котики', */body: 'котики лучше собак'},
        {id: 2,/* tittle: 'Собачки', */body: 'собачки терпеливее кошек'}
    ],
    /*newNewsTextTittle: 'kek',*/
    newNewsTextBody: 'kok'
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS:
            /*let newsTittle = state.newNewsTextTittle*/
            let newsBody = state.newNewsTextBody
            return {
                ...state,
                newNewsTextTittle: '',
                newNewsTextBody: '',
                news: [...state.news, {id: 3,/* newNewsTextTittle: newsTittle, */body: newsBody}]
            }
        case CHANGE_NEWS_TEXT: {
            return {
                ...state,
                /*newNewsTextTittle: action.tittle,*/
                newNewsTextBody: action.body
            }
        }
        default: {
            return state;
        }
    }
}

export const addNewNews = () => ({type: ADD_NEWS})

export const changeNewNewsText = (/*tittle, */body) => ({type: CHANGE_NEWS_TEXT,/* tittle, */body})

export const addNews = () => {
    return (dispatch) => {
        dispatch(addNewNews())
    }
}

export const changeNewsText = (/*tittle = 'нет титула', */body) => {
    return (dispatch) => {
        dispatch(changeNewNewsText(/*tittle, */body))
    }
}

export default newsReducer;