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
import { add_Library_Song, delete_LibrarySong } from "../../store/library";

export const SongListing = ({ song, playlistId }) => {
  const { currSong } = useSelector((state) => state.songsReducer);
  const { toggleState } = useSelector((state) => state.songsReducer.isPlaying);
  const { id } = useSelector((state) => state.session.user);
  const { songs } = useSelector(state => state.libraryReducer)
  const dispatch = useDispatch();
  const [deleting, setDeleting] = useState(false);
  const [duration, setDuration] = useState("0:00");
  const [isHovering, setIsHovering] = useState(false);
  const [saved, setSaved] = useState(false);

  const checkIfSaved = () => {
    for (const index in songs) {
      if (songs[index].id === song.id) setSaved(true);

    }
  }

  // console.log('songsReducer', songs)

  useEffect(() => {
    checkIfSaved();
    if (deleting) dispatch(load_Playlists(id));
    setDeleting(false);
  }, [dispatch, deleting]);

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

  const saveItem = () => {
    dispatch(add_Library_Song(id, song.id));
  }
  const removeSaveItem = () => {
    dispatch(delete_LibrarySong(id, song.id));
  }

  const handleButtonClick = () => {
    console.log(saved)
    if (!saved) {
      saveItem();
      setSaved(true);
    }
    else {
      removeSaveItem();
      setSaved(false);
    }
  }

  return (
    <div className="songListing"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
      {!isHovering && (
        <span className="song_track_number">
          <p>{song.album_track_number}</p>
        </span>
      )}
      {isHovering && (
        <span className="song_...">
          <button className="button-none" onClick={onClickPlay}>
            <h4><FaPlay /></h4>
          </button>
        </span>
      )}
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
        <button
          className="button-none"
          onClick={() => dispatch(addToQueue(song.id))}
        >
          <h4>
            <FaList />
          </h4>
        </button>{" "}
      </span>

      {!saved && isHovering && (
         <svg role="img" viewBox="0 0 16 16" className={saved ? 'saved .love-click' : 'love-click'}
         onClick={handleButtonClick}
         >
           <path
             d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z">
           </path>
         </svg>
      )}
      {saved &&  (
         <svg role="img" viewBox="0 0 16 16" className={saved ? 'saved .love-click' : 'love-click'}
         onClick={handleButtonClick}
         >
           <path
             d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z">
           </path>
         </svg>
      )}

      <span className="song_duration">
        <p>{duration && !isNaN(duration) ? calculateTime(duration) : "0:00"}</p>
      </span>

      {isHovering && (
        <span className="song_...">
          <ContextMenu song={song} />
        </span>

      )}



      {/* <span className="song_...">
        <button className="button-none" onClick={handleDelete}>
          <h4><FaTimes /></h4>
        </button>
      </span> */}
      {/* <button onClick={(() => dispatch(add_Library_Song(id, song.id)))}>Add to Lib</button> */}
    </div>
  );
};
