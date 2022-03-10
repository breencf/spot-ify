import { useEffect, useRef, useState } from "react";
import { ContextMenu } from "./ContextMenu";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { load_Playlists, delete_from_playlist } from "../../store/playlists";
import { loadSong, pause, play } from "../../store/songs";

export const SongListing = ({ song, playlistId }) => {
  const { currSong } = useSelector((state) => state.songsReducer);
  const { toggleState } = useSelector((state) => state.songsReducer.isPlaying);
  const { id } = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (deleting) dispatch(load_Playlists(id));
    setDeleting(false);
  }, [dispatch, deleting]);

  const handleDelete = () => {
    console.log(playlistId);
    console.log("--------------------");
    console.log(song.id);
    dispatch(
      delete_from_playlist({ playlist_id: playlistId, song_id: song.id })
    );
    setDeleting(true);
    console.log(deleting, "-------------");
  };

  const onClickPlay = () => {
    if (currSong?.id !== song.id) {
      dispatch(loadSong(song.id));
    }
    // else if (currSong?.id === song.id && toggleState === false)
    //   dispatch(play());
    else {
      dispatch(pause());
    }
  };

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
    </div>
  );
};
