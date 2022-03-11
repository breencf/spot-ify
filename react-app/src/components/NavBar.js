import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { add_Playlist, load_Playlists } from "../store/playlists";
import LogoutButton from "./TopBar/auth/LogoutButton";
import Modal from "react-modal";
import { CreatePlaylistForm } from "./CreatePlaylistForm";
import { load_Library } from "../store/library";

const NavBar = () => {
  const userId = useSelector((state) => state.session?.user?.id);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);


  const openModal = () => {
    setIsOpen(true);
  };

  function afterOpenModal() {
    console.log("hvfuvhfd");
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (userId) dispatch(load_Playlists(userId))
    if(userId) dispatch(load_Library(userId))

  }, [dispatch, userId]);


  const data = useSelector((state) => state.libraryReducer)
  let lists = data?.playlists

  const playLists = useSelector((state) =>
    Object?.values(state?.playListReducer?.playLists)
  );

  let allPlayLists = playLists?.concat(lists)




  const customStyles = {
    content: {
      backgroundColor: "var(--sp-dark)",
      borderRadius: "10px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      <nav id="sidebar">
        <h2>Spotify</h2>
        <ul>
          {/* <li>
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
            <LogoutButton />
          </li> */}
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              <h3>Home</h3>
            </NavLink>
          </li>

          <li>
            <NavLink to="/search" exact={true} activeClassName="active">
              <h3>Search</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${userId}/library`}
              exact={true}
              activeClassName="active"
            >
              <h3>Your Library</h3>
            </NavLink>
          </li>
          <br />
          <button className="button-none" onClick={openModal}>
            <h3>Create Playlist</h3>
          </button>
          <NavLink to="/songs" exact={true} activeClassName="active">
            <h3>Liked Songs</h3>
          </NavLink>
          <NavLink to="/followers" exact={true} activeClassName="active">
            <h3>Following</h3>
          </NavLink>
        </ul>
        <Modal
          isOpen={isOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <CreatePlaylistForm closeModal={closeModal} />
        </Modal>

        <hr />
        <div id="playlists-nav">
          {allPlayLists.length > 0 && allPlayLists?.map((list, index) => {
            return (
              <div key={index} className="navbar-playlist">
                <NavLink
                  activeClassName="activeNav"
                  to={`/playlists/${list?.id}`}
                  >
                  <h4>{list?.name}</h4>
                </NavLink>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
