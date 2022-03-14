import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import {Menu, MenuItem, MenuButton} from '@szhsin/react-menu'
import "./LoginMenu.css"

export const LoginMenu = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false);
    const user = useSelector((state) => state.session?.user)

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
      };

      const closeMenu = () => {
        setShowMenu(false);
      };

    let ret;

    if(user) {
        ret=(<Menu menuButton={<button className="button-green">{user.firstName? `${user.firstName}  ${user.lastName}` : user.username}</button>}>
        <MenuItem key="name">
           <h4>{user.firstName? `${user.firstName}  ${user.lastName}` : user.email}</h4>
        </MenuItem>
        <MenuItem key="profile">
            <NavLink to={`/users/${user.id}`}>Your Profile</NavLink>
        </MenuItem>
        <MenuItem key="logout">
            <LogoutButton/>
        </MenuItem>
        </Menu>)}
    else {
        ret=(<>
        <button className="button-white">Sign Up</button>
        <button className="button-green">Log In</button>
        </>)
        }


    return(
        <>
        <div id="top-right-button">
            {ret}
        </div>
        </>
    )










}
