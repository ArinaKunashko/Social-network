import React, {useState} from "react";
import s from './Post.module.css'
import photosProfile from '../../../../assets/images/profilePhoto.jpeg'

const Post = (props) => {

    const [likesCount, setLikesCount] = useState(0)

    function increment ( ) {
        setLikesCount((prevLikesCount) => {
            return prevLikesCount + 1
        })
    }

    return <div>
        <div className={s.item}>
            <img src={photosProfile} />
            {props.message}
    
                <button className={s.buttonLikes} onClick ={increment} disabled={likesCount>0} > {likesCount} likes</button> 
    
        </div>
    </div>
}
export default Post;