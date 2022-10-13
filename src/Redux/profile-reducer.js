import { usersAPI, profileAPI } from "../api/Api"


const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
// const GET_LIKES = 'GET_LIKES'
// const DELETE_LIKES = 'DELETE_LIKES'
const DELETE_POST= 'DELETE_POST'


let initialState = {
    posts: [
        { id: 1, message: 'If you are the smartest person in the room, then you are not in the room where you should be.', likesCount: 12 },
        { id: 2, message: 'All we have to decide is what to do with the time that is given to us', likesCount: 11 },
        { id: 3, message: 'Life is like a box of chocolates, you never know what you’re gonna get', likesCount: 15 },
        
    ],

    profile: null,
    status: ' ',
    
    
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',


            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }

        }

        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter( p=> p.id != action.postId)
            }

        }

        // case GET_LIKES: {
        //     return {
        //         ...state,
        //         likesCount: action.likesCount
        //     }

        // }

        // case DELETE_LIKES: {
        //     return {
        //         ...state,
        //         likesCount: action.likesCount
        //     }

        // }
        default:
            return state

    }
}
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
// export const getLikes = (likesCount) => ({ type: GET_LIKES, likesCount })
// export const deleteLikes = (likesCount) => ({ type: DELETE_LIKES, likesCount })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(response.data))

    }


export const getStatus =(userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data))
    }


export const updateStatus =(status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
}



// export const getLikes = (likesCount) => (dispatch) => {
//     profileAPI.getLikes(likesCount).then(response => {
// dispatch()
//         }
       
//     })
// }

// export const deleteLikes = (likesCount) => (dispatch) => {
//     profileAPI.getLikes(likesCount).then(response => {
//         function onClickLikes 
//         let likesCount = 0{

//         }
//         if (response.data.resultCode === 0) {
//             dispatch(deleteLikes(likesCount))
//         }
//     })
// }


export default profileReducer;
