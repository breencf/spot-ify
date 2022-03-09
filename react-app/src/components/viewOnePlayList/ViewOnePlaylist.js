import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { one_Playlists, delete_Playlist } from "../../store/playlists";
import {
  useHistory,
  useParams,
  NavLink,
  Link,
  Redirect,
} from "react-router-dom";
import UserPlaylistsEdit from "../userPlaylists/EditPlayListForm";
import { SongsList } from "../songList";
import { delete_Playlist, load_Playlists } from "../../store/playlists";
import { CompoundAlbumImage } from "./CompoundAlbumImage";

const ViewOnePlaylist = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const history = useHistory();

  const playLists = useSelector((state) => state?.playListReducer?.playLists);
  const { id } = useSelector((state) => state.session.user);
  const currPlaylist = playLists[playlistId];
  const playlistProp = currPlaylist?.songs?.dict;

  const handleDelete = () => {
    dispatch(delete_Playlist({ userId: id, playlistId: currPlaylist.id }));
    dispatch(load_Playlists(id));
    return history.push("/");
  };

  // useEffect(() => {
  //   dispatch(load_Playlists(id))
  //   // console.log('ANGRY USE EFFECT ====================== SO MAD!!!')
  // }, [dispatch, playlistProp])

  // return (
  //     <div>

  //         <p>{playList?.image}</p>
  //         <p>{playList?.description}</p>
  //         <UserPlaylistsEdit />
  //         <NavLink to={`/users/${userId}/playlists/${playlistId}`}>{playList?.name}</NavLink>
  //         {playList &&
  //         <button onClick={() => dispatch(delete_Playlist(userId, playlistId))}>Delete playlist here</button>
  //         }
  //     </div>
  // )

  let imag;

  if (currPlaylist?.image) {
    imag = <img className="albumImage" src={currPlaylist?.image}/>;
  } else {
    imag = <CompoundAlbumImage songs={playlistProp} />;
  }

  return (
    <>
      <div className="albumTop">
        <div>
          {imag}
        </div>
        <div>
          <h4>PLAYLIST</h4>
          <h1>{currPlaylist?.name}</h1>
          <p>{currPlaylist?.description}</p>
          {/* <Link to={`/users/${currPlaylist?.user_id}`}>
            {currPlaylist.user_id}
          </Link> */}
        </div>
      </div>
      <br />
      {currPlaylist?.user_id == id && (
        <div>
          <UserPlaylistsEdit playList={currPlaylist} />
          <button className="button-green" onClick={handleDelete}>Delete</button>
        </div>
      )}
      <hr />

      <br />
      <SongsList songProp={playlistProp} playlistId={currPlaylist?.id} />
    </>
  );
};

export default ViewOnePlaylist;
