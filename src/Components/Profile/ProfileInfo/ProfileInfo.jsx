import React, { useState } from "react";
import Preloader from "../../common/preloader/preloader";
import s from './ProfileInfo.module.css'
import styles from '../../Users/users.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png'
import ProfileDataForm from "./ProfileDataForm";



const ProfileInfo = ({ profile, updateStatus, isOwner, savePhoto, saveProfile, status }) => {
    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {

            savePhoto(e.target.files[0])

        }
    }

    const onSubmit = (values) => {
        saveProfile(values)
        setEditMode(false)
    }


    return (
        <div>
            <div>

                <img src='https://img2.akspic.ru/previews/0/1/1/6/4/146110/146110-rev-lev-koshachih-tigr-monohromnyj-x750.jpg' className={styles.header} />
            </div>
            <div className={s.profilePage}>
                <div className={s.descriptionBlock}>

                    <img src={profile.photos.large != null ? profile.photos.large : userPhoto} className={styles.myPhoto} />
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                    <div />

                    <div className={s.information}>
                        <div className={s.fullName}>  {profile.fullName} </div>
                        <div className={s.profileStatus}><ProfileStatusWithHooks status={status} updateStatus={updateStatus} /> </div>
                    </div>

                    {editMode
                        ? <ProfileDataForm profile={profile}
                            isOwner={isOwner}
                            gotoViewMode={() => { setEditMode(false) }}
                            updateStatus={updateStatus}
                            onSubmit={onSubmit}


                        />
                        : <ProfileData profile={profile}
                            isOwner={isOwner}
                            gotoEditMode={() => { setEditMode(true) }}
                            updateStatus={updateStatus} />}


                </div>
            </div >
        </div>
    )
}

const ProfileData = ({ profile, status, updateStatus, isOwner, gotoEditMode, lookingForAJobDescription }) => {
    return <div>


        <div> About Me: {profile.aboutMe} </div>

        <div> Looking For A Job : {profile.lookingForAJob ? "yes" : "no"} </div>

        {profile.lookingForAJob &&
            <div> My professional skills: {profile.lookingForAJobDescription} </div>}

        <div> My professional skills: {profile.lookingForAJobDescription} </div>


        <div> Contact GitHub: {profile.contacts.github} </div>
        <div> Contact Vk: {profile.contacts.vk} </div>
        <div> Contact Twitter: {profile.contacts.twitter} </div>
        <div> Contact Instagram: {profile.contacts.instagram} </div>

        {isOwner && <div> <button className={s.button} onClick={gotoEditMode}> Edit </button> </div>}

    </div>



}


export default ProfileInfo;