export const getUsers = (state) => {
    return state.friendsPage.users
}

export const countUsers = (state) => {
    return state.friendsPage.countUsers
}

export const pageSize = (state) => {
    return state.friendsPage.pageSize
}

export const currentPage = (state) => {
    return state.friendsPage.currentPage
}

export const isFetched = (state) => {
    return state.friendsPage.isFetched
}
export const followingInProgress = (state) => {
    return state.friendsPage.followingInProgress
}