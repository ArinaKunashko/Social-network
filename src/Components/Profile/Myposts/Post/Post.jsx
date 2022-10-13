import React from "react";
import s from './Post.module.css'


const Post = (props) => {

    return <div>
        <div className={s.item}>
            <img src="https://sun9-56.userapi.com/impf/c846017/v846017310/23af4/Udp8tKlLIsY.jpg?size=720x720&quality=96&sign=5639328d44f983af139ec12363ff27b3&type=album" />
            {props.message}
    
                <button className={s.buttonLikes} > {props.likesCount} likes</button> 
    
        </div>
    </div>
}
export default Post;