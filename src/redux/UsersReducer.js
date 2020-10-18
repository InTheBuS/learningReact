import {UsersAPI} from '../API/myApi';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const CURRENT_PAGE = 'CURRENT-PAGE'
const TOTAL_COUNT_USERS = 'TOTAL-COUNT-USERS'
const IS_FETCHED = 'IS-FETCHED'
const WAITING_FOR_FOLLOWING = 'WAITING_FOR_FOLLOWING'

let initialState = {
    users: [
        /*       {id: 1, name: 'Завчик', src: 'https://sun9-17.userapi.com/c855032/v855032104/117129/d1DoxltlEb8.jpg',
                   followed: true, status: ')', location: {country: 'Russia', city: 'Moscow'}},
               {id: 2, name: 'Кiт', src: 'https://sun1-93.userapi.com/wooKIWobbG-1wIqrooLYN8JtxHFWF7MQTx3csQ/TF2RNbpbB0A.jpg',
                   followed: true, status: '^_^', location: {country: 'KittyLand', city: 'Meow'}},
               {id: 3, name: 'Волк', src: 'https://sun1-91.userapi.com/0Ig06bPd1smpzUzvBBrMwpEGg6nW2CGYmsJ4Bg/vPItHVxZe64.jpg',
                   followed: false, status: 'wanna cigarette' , location: {country: 'Russia', city: 'Leningrad'}},*/
    ],
    countUsers: 0,
    pageSize: 5,
    currentPage: 1,
    isFetched: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID)
                        return {
                            ...user, followed: true
                        }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID)
                        return {
                            ...user, followed: false
                        }
                    return user;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOTAL_COUNT_USERS: {
            return {
                ...state,
                countUsers: action.countUsers
            }
        }
        case IS_FETCHED: {
            return {
                ...state,
                isFetched: action.isFetched
            }
        }
        case WAITING_FOR_FOLLOWING: {
            return {
                ...state,
                followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default: {
            return state;
        }
    }
}

export const follow = (userID) => ({type: FOLLOW, userID})

export const unFollow = (userID) => ({type: UNFOLLOW, userID})

export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (currentPage) => ({type: CURRENT_PAGE, currentPage})

export const setTotalUsersCount = (countUsers) => ({type: TOTAL_COUNT_USERS, countUsers})

export const onIsFetched = (isFetched) => ({type: IS_FETCHED, isFetched})

export const toggleFollowingInProgress = (inProgress, userId) => ({type: WAITING_FOR_FOLLOWING, inProgress, userId})

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(onIsFetched(true))
        UsersAPI.settingUsers(currentPage, pageSize)
            .then(data => {
                console.log(data.items)
                dispatch(onIsFetched(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const onChangePage = (page, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(page))
        dispatch(onIsFetched(true))
        UsersAPI.settingUsers(page, pageSize)
            .then(data => {
                dispatch(onIsFetched(false))
                dispatch(setUsers(data.items))
            })
    }
}

export const followingUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        UsersAPI.unfollowingUser(userId)
            .then(response => {
                if (response == 0) {
                    dispatch(unFollow(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })
    }
}

export const unFollowingUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        /*axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY': '3c126ab9-8d6a-4df3-934e-0dc8c3ba8bf6'
            }
        })*/
        UsersAPI.followingUser(userId)
            .then(response => {
                if (response == 0) {
                    dispatch(follow(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })
    }
}

export default usersReducer;