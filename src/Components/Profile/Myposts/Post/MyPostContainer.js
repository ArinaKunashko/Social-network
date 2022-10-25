
import { addPostActionCreator } from "../../../../Redux/profile-reducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost) 

export default MyPostContainer;