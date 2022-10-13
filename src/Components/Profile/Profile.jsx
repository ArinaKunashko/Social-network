import React from "react";
import MyPostContainer from "./Myposts/Post/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
    <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}   />
        <MyPostContainer />
    </div>
    )
}
export default Profile;