import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { load_Playlists } from "../store/playlists";
import LogoutButton from "./auth/LogoutButton";


const NavBar = () => {
  const userId = useSelector((state) => state.session?.user?.id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) dispatch(load_Playlists(userId));
  }, [dispatch, userId]);

  const playLists = useSelector((state) => Object?.values(state?.playListReducer?.playLists));

  return (
   <>
    <nav id="sidebar">
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
      <hr/>
      <div>
        {playLists?.map((list, index) => {
          return <div key={index}>
              <NavLink to={`/users/${userId}/playlists/${list.id}`}>{list.name}</NavLink>
          </div>
        })}
      </div>
    </nav>
  </>

  );
};

export default NavBar;
