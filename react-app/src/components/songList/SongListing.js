import { useEffect, useRef, useState } from "react";
import { ContextMenu } from "./ContextMenu";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { load_Playlists, delete_from_playlist } from "../../store/playlists";
import { FaPlay, FaList, FaEllipsisH, FaTimes } from "react-icons/fa";
import {
  addToQueue,
  loadSong,
  pause,
  play,
  toggle_play,
} from "../../store/songs";
import { add_Library_Song } from "../../store/library";

export const SongListing = ({ song, playlistId }) => {
  const { currSong } = useSelector((state) => state.songsReducer);
  const { toggleState } = useSelector((state) => state.songsReducer.isPlaying);
  const { id } = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [deleting, setDeleting] = useState(false);
  const [duration, setDuration] = useState("0:00");

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

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const songAudio = new Audio(song.audio);
  songAudio.addEventListener("loadedmetadata", () => {
    setDuration(songAudio.duration);
  });

  const onClickPlay = () => {
    dispatch(loadSong(song.id));
    dispatch(loadSong(song.id));
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

      <span className="song_...">
        <button className="button-none" onClick={onClickPlay}>
          <h4><FaPlay/></h4>
        </button>
      </span>
      <span className="song_...">
        <button
          className="button-none"
          onClick={() => dispatch(addToQueue(song.id))}
        >
          <h4>
            <FaList />
          </h4>
        </button>{" "}
      </span>

      <span className="song_duration">
        <p>{duration && !isNaN(duration) ? calculateTime(duration) : "0:00"}</p>
      </span>

      <span className="song_...">
        <ContextMenu song={song} />
      </span>
      <span className="song_...">
        <button className="button-none" onClick={handleDelete}>
          <h4><FaTimes /></h4>
        </button>
      </span>
      <button onClick={(() => dispatch(add_Library_Song(id, song.id)))}>Add to Lib</button>
    </div>
  );
};
