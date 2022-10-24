import React from "react";
import s from './Post.module.css'
import photosProfile from '../../../../assets/images/profilePhoto.jpeg'

const Post = (props) => {

    return <div>
        <div className={s.item}>
            <img src={photosProfile} />
            {props.message}
    
                <button className={s.buttonLikes} > {props.likesCount} likes</button> 
    
        </div>
    </div>
}
export default Post;