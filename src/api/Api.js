import * as axios from 'axios';



const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: { "API-KEY": "f9df1d07-d675-41c4-b498-46e8b1da948a" }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    unfollow(userId) {
        return instance.delete(`/follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`/follow/${userId}`, {})
            .then(response => {
                return response.data
            })
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    }

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status:status} )
    },
    // getLikes() {
    //     return instance.get(`profile/`)
    // },
    // updateLikes() {
    //     return instance.delete(`profile/` )
    // },

}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

