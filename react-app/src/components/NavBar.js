import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import UserPlaylists from "./userPlaylists/UserPlaylists";

const NavBar = () => {
  const userId = useSelector((state) => state.session?.user?.id);
  return (
    <nav id="sidebar">
      <i class="fa-brands fa-spotify"/>
      <h2>Spotify</h2>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to={`/users/${userId}/playlists`}>playlists</NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
