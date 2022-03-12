import { useDispatch, useSelector } from "react-redux";
import { add_Library_Playlist } from "../../store/library";
// import { one_Playlists, delete_Playlist } from "../../store/playlists";
import {
  useHistory,
  useParams,
} from "react-router-dom";
import UserPlaylistsEdit from "../userPlaylists/EditPlayListForm";
import { SongsList } from "../songList";
import { delete_Playlist, getOnePlaylist, load_Playlists } from "../../store/playlists";
import { CompoundAlbumImage } from "./CompoundAlbumImage";
import { useEffect } from "react";
import { PlayButton } from "../AudioPlayer/PlayButton";

const ViewOnePlaylist = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const history = useHistory();
  useEffect(()=> {dispatch(getOnePlaylist(playlistId))},[playlistId])

  const playLists = useSelector((state) => state?.playListReducer?.playLists);
  const { id } = useSelector((state) => state.session.user);


  const currPlaylist = useSelector((state) => state?.playListReducer.currentPlaylist)

  const playlistProp = currPlaylist?.songs?.dict;

  const handleDelete = () => {
    dispatch(delete_Playlist({ userId: id, playlistId: currPlaylist.id }));
    dispatch(load_Playlists(id));
    return history.push("/");
  };

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
          {currPlaylist?.id &&
          <button onClick={(() => dispatch(add_Library_Playlist(id, playlistId)))}>Add to library</button>
           }
          <h1>{currPlaylist?.name}</h1>
          <p>{currPlaylist?.description}</p>
          {/* <Link to={`/users/${currPlaylist?.user_id}`}>
            {currPlaylist.user_id}
          </Link> */}
        </div>
      </div>
      <br />
      <div className='page-buttons'>
          <PlayButton mediaId={id} type={'playlists'}/>
      {currPlaylist?.user_id == id && (
        <>
          <UserPlaylistsEdit playList={currPlaylist} />
          <button className="button-green" onClick={handleDelete}>Delete</button>

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
