import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css'
import { logout } from "../../Redux/auth-reducer";


const Header = (props) => {
    return <header className={s.header}>
        {/* <img src='https://pronedra.ru/wp-content/uploads/2022/02/proekt.jpg' /> */}
        <div className={s.loginBlock}>
            {props.isAuth 
            ? <div> {props.login} - <button className = {s.buttonLogout} onClick={props.logout}> Log out </button> </div>
            : <NavLink to={'/login'}> Login </NavLink>}

           {/* : <div> {props.login} - <button className = {s.buttonLogout} onClick={props.login} > Login </button> </div> */}
        </div>
    </header>
}

export default Header;