import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from './ProfileInfo.module.css'
import styles from '../../Users/users.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png'

const ProfileInfo = ({profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
               
                <img src='https://img2.akspic.ru/previews/0/1/1/6/4/146110/146110-rev-lev-koshachih-tigr-monohromnyj-x750.jpg' className={styles.header} />
            </div>
            <div className={s.profilePage}>
                <div className={s.descriptionBlock}>

                    <img src={profile.photos.large != null ? profile.photos.large : userPhoto} className={styles.myPhoto} />
                    <div />
    
                    <div className={s.information}>
                        <div className={s.fullName}> {profile.fullName} </div>
                        <div className={s.profileStatus}><ProfileStatusWithHooks  status={status} updateStatus={updateStatus}/> </div>
                        <div> About Me: {profile.aboutMe} </div>
                        <div> Looking For A Job Description: {profile.lookingForAJobDescription} </div>
                        <div> Contact Vk: {profile.contacts.vk} </div>
                        <div> Contact Twitter: {profile.contacts.twitter} </div>
                        <div> Contact Instagram: {profile.contacts.instagram} </div>
                        
                    </div>
                </div>
            </div >
        </div>
    )
}
export default ProfileInfo;