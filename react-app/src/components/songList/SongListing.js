import { useEffect, useRef, useState } from "react";
import { ContextMenu } from "./ContextMenu";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, SubMenu } from "@szhsin/react-menu";
import { useSelector, useDispatch } from "react-redux";
import { load_Playlists, delete_from_playlist } from "../../store/playlists";
import { playSong } from "../../store/songs";
import { add_Library_Song } from "../../store/library";

export const SongListing = ({ song, playlistId }) => {
  const { playLists } = useSelector((state) => state.playListReducer);
  const { id } = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (deleting) dispatch(load_Playlists(id));
    setDeleting(false)
  }, [dispatch, deleting])

  const handleDelete = () => {
    console.log(playlistId)
    console.log('--------------------')
    console.log(song.id)
    dispatch(delete_from_playlist({playlist_id: playlistId, song_id: song.id }))
    setDeleting(true)
    console.log(deleting, '-------------')
  }

  const onClickPlay = () => {
    dispatch(playSong(song.id));
  }

  return (
    <div className="songListing">
      <span className="song_track_number">
        <p>{song.album_track_number}</p>
      </span>
      <span className="song_image">
        <img src={song.album_image} className="song_album_image" />
      </span>
      <span className="song_name_artist">
        <p>{song.name}</p>
        <Link to={`/artists/${song.artist_id}`}>{song.artist}</Link>
      </span>
      <span className="song_album">
        <Link to={`/albums/${song.album_id}`}>{song.album}</Link>
      </span>
      <span className="song_duration">
        <p>0:00</p>
      </span>

      <span className="song_...">
        <ContextMenu song={song} />
      </span>
      <span className="song_...">
        <button className="button-none" onClick={handleDelete}>
          <h4>x</h4>
        </button>
      </span>

      <button onClick={onClickPlay}>Play</button>
      <button onClick={(() => dispatch(add_Library_Song(id, song.id)))}>Add to Lib</button>
    </div>
  );
};
