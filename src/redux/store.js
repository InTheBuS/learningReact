import BarCss from "../components/Sidebar/Sidebar.module.css";
import profileReducer from "./ProfileReducer";
import dialoguesReducer from "./DialoguesReducer";
import sideBarReducer from "./SidebarReducer";

let store = {
    _state: {
        profilePage: {

            allPosts: [
                {id: 1, message: 'ну и где моя питса', likesCount: 12},
                {id: 2, message: 'ааа вот она ', likesCount: 2}
            ],
            newPostText: 'кто хочет питсы ?'
        },

        dialoguesPage: {

            allDialogues: [{id: 1, name: 'Питса'},
                {id: 2, name: 'Завчик'}
            ],

            allMessages: [
                {id: 1, message: 'я хочу питсы', me: true},
                {id: 2, message: 'а хуитсы ты не хочешь, дурак', me: false}
            ],

            newMessageText: ''
        },

        sideBar: {

            wholeBar: [
                {name: 'Profile', nav: '/profile', className: BarCss.item, activeClassName: BarCss.active},
                {name: 'Messages', nav: '/messages', className: BarCss.item, activeClassName: BarCss.active},
                {name: 'News', nav: '/news', className: BarCss.item, activeClassName: BarCss.active},
                {name: 'Music', nav: '/music', className: BarCss.item, activeClassName: BarCss.active},
                {name: 'Settings', nav: '/settings', className: BarCss.item, activeClassName: BarCss.active},
                {name: 'Users', nav: '/friends', className: BarCss.item, activeClassName: BarCss.active},
            ],
            friends: [
                {id: 1, name: 'Завчик', src: 'https://sun9-17.userapi.com/c855032/v855032104/117129/d1DoxltlEb8.jpg',},
                {
                    id: 2,
                    name: 'Кiт',
                    src: 'https://sun1-93.userapi.com/wooKIWobbG-1wIqrooLYN8JtxHFWF7MQTx3csQ/TF2RNbpbB0A.jpg'
                },
                {
                    id: 3,
                    name: 'Волк',
                    src: 'https://sun1-91.userapi.com/0Ig06bPd1smpzUzvBBrMwpEGg6nW2CGYmsJ4Bg/vPItHVxZe64.jpg'
                }
            ]
        }
    },

    _callSubscriber() {
        console.log('kek')
    },

    getState() {
        return this._state
    },

    subscribe(listener) {
        this._callSubscriber = listener
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state);

    }
}


export default store
