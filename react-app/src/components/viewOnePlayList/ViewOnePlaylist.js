import { useDispatch, useSelector } from "react-redux";
import {
  add_Library_Playlist,
  delete_LibraryPlaylist,
} from "../../store/library";
// import { one_Playlists, delete_Playlist } from "../../store/playlists";
import { useHistory, useParams } from "react-router-dom";
import UserPlaylistsEdit from "../userPlaylists/EditPlayListForm";
import { SongsList } from "../songList";
import {
  add_Playlist,
  delete_Playlist,
  getOnePlaylist,
  load_Playlists,
} from "../../store/playlists";
import { CompoundAlbumImage } from "./CompoundAlbumImage";
import { useEffect } from "react";
import { PlayButton } from "../AudioPlayer/PlayButton";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import "rc-dropdown/assets/index.css";
import { FaEllipsisH } from "react-icons/fa";

const ViewOnePlaylist = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const history = useHistory();
  useEffect(() => {
    dispatch(getOnePlaylist(playlistId));
  }, [playlistId]);

  const playLists = useSelector((state) => state?.playListReducer?.playLists);
  const { id } = useSelector((state) => state.session.user);

  const currPlaylist = useSelector(
    (state) => state?.playListReducer.currentPlaylist
  );
  const menu = (
    <Menu id="user-menu-style">
      <MenuItem
        id="testing_menu"
        onClick={() => dispatch(add_Library_Playlist(id, currPlaylist?.id))}
        key="1"
      >
        Add Playlist to Library
      </MenuItem>
      <MenuItem
        id="testing_menu"
        onClick={() => dispatch(delete_LibraryPlaylist(id, currPlaylist?.id))}
        key="2"
      >
        Remove Playlist from Library
      </MenuItem>
    </Menu>
  );
  const playlistProp = currPlaylist?.songs?.dict;

  const handleDelete = () => {
    dispatch(delete_Playlist({ userId: id, playlistId: currPlaylist.id }));
    dispatch(delete_LibraryPlaylist(id, currPlaylist?.id));
    dispatch(load_Playlists(id));
    return history.push("/");
  };

  let imag;

  if (currPlaylist?.image) {
    imag = (
      <img
        alt="spotify"
        alt="spotify"
        className="albumImage"
        src={currPlaylist?.image}
      />
    );
  } else {
    imag = <CompoundAlbumImage songs={playlistProp} />;
  }

  return (
    <>
      <div className="albumTop">
        <div>{imag}</div>
        <div>
          <h1>{currPlaylist?.name}</h1>
          <p>{currPlaylist?.description}</p>
          {/* <Link to={`/users/${currPlaylist?.user_id}`}>
            {currPlaylist.user_id}
          </Link> */}
        </div>
      </div>
      <br />

      <div className="page-buttons playlist">
        {currPlaylist?.id && (
          <>
            <PlayButton mediaId={id} type={"playlists"} />
            <div>
              {currPlaylist?.user_id === id ? (
                ""
              ) : (
                <Dropdown
                  trigger={["click"]}
                  overlay={menu}
                  animation="slide-up"
                >
                  <p id="icon-color" style={{ width: 150 }}>
                    <FaEllipsisH />
                  </p>
                </Dropdown>
              )}
            </div>
          </>
        )}
        {currPlaylist?.user_id == id && (
          <>
            <UserPlaylistsEdit playList={currPlaylist} />
            <button className="button-green" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </div>
      <hr />

      <br />
      <SongsList songProp={playlistProp} playlistId={currPlaylist?.id} />
    </>
  );
};

export default ViewOnePlaylist;
