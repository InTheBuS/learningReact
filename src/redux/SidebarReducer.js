let initialState = {
    wholeBar: [
        {name: 'Profile', nav: '/profile'},
        {name: 'Messages', nav: '/messages'},
        {name: 'News', nav: '/news'},
        {name: 'Music', nav: '/music'},
        {name: 'Settings', nav: '/settings'},
        {name: 'Users', nav: '/users'},
    ],
    friends: [
        {
            id: 1,
            name: 'Завчик',
            src: 'https://sun9-17.userapi.com/c855032/v855032104/117129/d1DoxltlEb8.jpg',
        },
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

const sideBarReducer = (state = initialState, action) => {
    return state;
}

export default sideBarReducer;