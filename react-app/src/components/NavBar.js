import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { load_Playlists } from "../store/playlists";
import Modal from "react-modal";
import { CreatePlaylistForm } from "./CreatePlaylistForm";
import { load_Library } from "../store/library";
import {
  FaSpotify,
  FaHome,
  FaSearch,
  FaStream,
  FaPlus,
  FaRegHeart,
  FaHeadphones,
} from "react-icons/fa";

const NavBar = () => {
  const userId = useSelector((state) => state.session?.user?.id);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  function afterOpenModal() {
    return null;
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (userId) dispatch(load_Playlists(userId));
    if (userId) dispatch(load_Library(userId));
  }, [dispatch, userId]);

  const data = useSelector((state) => state.libraryReducer);
  let lists = data?.playlists;

  const playLists = useSelector((state) =>
    Object?.values(state?.playListReducer?.playLists)
  );

  let allPlayLists = playLists?.concat(lists);

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
        <Link id="spot-icon" to="/home">
          <h2>
            <FaSpotify /> Spot-ify
          </h2>
        </Link>
        <div className="navbar-playlist">
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
              <NavLink to="/home" exact={true} activeClassName="active">
                <h3>
                  <FaHome /> Home
                </h3>
              </NavLink>
            </li>

            <li>
              <NavLink to="/search" exact={true} activeClassName="active">
                <h3>
                  <FaSearch /> Search
                </h3>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${userId}/library/playlists`}
                exact={true}
                activeClassName="active"
              >
                <h3>
                  <FaStream /> Your Library
                </h3>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/about`} exact={true} activeClassName="active">
                <h3>
                  <FaHeadphones /> About
                </h3>
              </NavLink>
            </li>
            <br />
            <button className="button-none" onClick={openModal}>
              <h3>
                <FaPlus /> Create Playlist
              </h3>
            </button>

            <NavLink to="/songs" exact={true} activeClassName="active">
              <h3>
                <FaRegHeart /> Liked Songs
              </h3>
            </NavLink>
            {/* <NavLink to="/followers" exact={true} activeClassName="active">
            <h3>Following</h3>
          </NavLink> */}
          </ul>
        </div>
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
          {allPlayLists.length > 0 &&
            allPlayLists?.map((list, index) => {
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
