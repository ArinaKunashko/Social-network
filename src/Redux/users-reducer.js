import { usersAPI } from "../api/Api"
import { updateObjectInArray } from "../utilis/object-helpers"


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFatching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW:
            // let stateCopy = {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true} )


                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: true }
                //     }
                //     return u;
                // })
            }

        case UNFOLLOW:
            return {
                ...state,

                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false} )
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: false }
                //     }
                //     return u;
                // })
            }

        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFatching: action.isFatching }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFatching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}


export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFatching = (isFatching) => ({ type: TOGGLE_IS_FETCHING, isFatching })
export const toggleFollowingProgress = (isFatching) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFatching })



export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {

        dispatch(toggleIsFatching(true))
        dispatch(setCurrentPage(page))
        let data = await usersAPI.getUsers(page, pageSize)

        dispatch(toggleIsFatching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    debugger
    if (response.resultCode == 0) {
        debugger
        dispatch(actionCreator(userId))
    }
    debugger
    dispatch(toggleFollowingProgress(false, userId))
}


export const follow = (userId) => {
    return async (dispatch) => {
        // let apiMethod = usersAPI.follow.bind(usersAPI)
        // let actionCreator = followSuccess

        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        // let apiMethod = usersAPI.unfollow.bind(usersAPI)
        // let actionCreator = unfollowSuccess
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}


export default usersReducer;