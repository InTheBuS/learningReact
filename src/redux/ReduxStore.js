import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './ProfileReducer';
import dialoguesReducer from './DialoguesReducer';
import sideBarReducer from './SidebarReducer';
import usersReducer from './UsersReducer';
import authReducer from './AuthReducer';
import thunk from 'redux-thunk';
import newsReducer from "./NewsReducer";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./AppReducer";

let reducerBox = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    sideBar: sideBarReducer,
    friendsPage: usersReducer,
    auth: authReducer,
    news: newsReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducerBox, applyMiddleware(thunk));

window.store = store;

export default store;