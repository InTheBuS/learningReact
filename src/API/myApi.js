import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '3c126ab9-8d6a-4df3-934e-0dc8c3ba8bf6'
    }
});

export const UsersAPI = {

    settingUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
            return response.data
        })
    },
    followingUser: (id) => {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data.resultCode
            })
    },
    unfollowingUser: (id) => {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data.resultCode
            })

    }
}

export const ProfileAPI = {

    getProfileId(userId) {
        return instance.get(`profile/${userId}`)
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const AuthAPI = {

    authAccount: () => {
        return instance.get(`auth/me`)
    }
}
