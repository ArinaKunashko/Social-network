import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'


let classesNew = `${s.item} ${s.active}`
const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" className={({ isActive }) =>
              isActive ? s.activeLink : undefined
            } > Profile </NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs" className={({ isActive }) =>
              isActive ? s.activeLink : undefined
            } > Messages </NavLink>
        </div>
        {/* <div className={s.item}>
            <NavLink to="/news" className={({ isActive }) =>
              isActive ? s.activeLink : undefined
            } > News </NavLink>
        </div> */}
        <div className={s.item}>
            <NavLink to="/users" className={({ isActive }) =>
              isActive ? s.activeLink : undefined
            } > Users </NavLink>
        </div>
        {/* <div className={s.item}>
            <NavLink to="/music" className={({ isActive }) =>
              isActive ? s.activeLink : undefined
            } > Music </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" className={({ isActive }) =>
              isActive ? s.activeLink : undefined
            } > Settings </NavLink>
        </div>

        <div className={s.item}>
            <NavLink to="/friends" className={({ isActive }) =>
              isActive ? s.activeLink : undefined
            } > Friends </NavLink>
        </div> */}

    </nav>
}
export default Navbar;