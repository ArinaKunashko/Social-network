import React from "react";
import MyPostContainer from "./Myposts/Post/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus} 
                saveProfile={props.saveProfile}
                />
            <MyPostContainer />
        </div>
    )
}
export default Profile;