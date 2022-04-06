import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadSong, pause, play, toggle_play } from "../../store/songs";
import "./AudioPlayer.css";
import {
  FaPlay,
  FaList,
  FaStepForward,
  FaStepBackward,
  FaPause,
  FaVolumeUp,
} from "react-icons/fa";

export const AudioPlayer = () => {
  const { queue } = useSelector((state) => state.songsReducer);
  const { playqueue } = useSelector((s) => s.songsReducer);
  const newSong = useSelector((state) => state.songsReducer.newSong);
  const newSid = useSelector((state) => state.songsReducer.newSong?.id);
  const toggleState = useSelector((state) => state.songsReducer.isPlaying);
  const [playedSongs, setPlayedSongs] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSong, setCurrentSong] = useState(false);
  const [lastSong, setLastSong] = useState(null);
  const audioPlayer = useRef();
  const progressBar = useRef();
  const progressRef = useRef();
  const volumeBar = useRef();
  const dispatch = useDispatch();
  let compositeQueue = [...queue, ...playqueue];

  //first time around: this loads the player with the first song of whatever the user clicks on
  //on second play, it loads the next song, and loads the song that just ended to the last song state.
  useEffect(() => {
    if (newSong) {
      setLastSong(currentSong);
      setCurrentSong(newSong);
    }
  }, [newSid]);

  //this useEffect triggers on every change of song. It is responsible for updating the duration on the right of the player bar
  //the if(current song) is to prevent it from triggering play on the initial load of the page, when current song is null, and it would throw an error
  //this is what enables autoplay, i believe
  useEffect(() => {
    if (currentSong !== lastSong) {
      const seconds = Math.floor(audioPlayer.current.duration);
      setDuration(seconds);
      if (currentSong) {
        audioPlayer.current.play();
        progressRef.current = requestAnimationFrame(whilePlaying);
        dispatch(play());
      }
    }
  }, [
    audioPlayer?.current?.loadedmetadata,
    audioPlayer?.current?.readyState,
    currentSong,
  ]);

  //this is like a failsafe to update the duration
  useEffect(() => {
    if (duration) {
      progressBar.current.max = duration;
      dispatch(play());
      audioPlayer.current.play();
      progressRef.current = requestAnimationFrame(whilePlaying);
    }
  }, [duration]);

  //this useEffect handles song changes or stops the player. Once the progressbar reaches its max(the duration)
  //we check if there's anything to be played next. Composite queue is the user-added queue combined with the play queue from pressing play on an album
  //user queued songs play before the playqueue. If we don't have anything left to play, we dispatch pause to change the play button icon, and toggle play to stop the player and animation.
  useEffect(() => {
    if (progressBar?.current?.value === progressBar?.current?.max) {
      if (compositeQueue.length) {
        playedSongs.unshift(currentSong);
        let nextSong = compositeQueue.shift();
        dispatch(loadSong(nextSong.id));
      } else {
        dispatch(pause());
        togglePlay();
      }
    }
  }, [progressBar?.current?.value]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  //this function is what animates our progressbar and updates the seconds on the left
  const whilePlaying = () => {
    if(progressBar.current) progressBar.current.value = audioPlayer.current?.currentTime;
    changePlayerCurrentTime();
    progressRef.current = requestAnimationFrame(whilePlaying);
  };

  //this is what allows for dragging of the progress bar
  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
    dispatch(play());
  };

  //self explanatory
  const changeVolume = () => {
    audioPlayer.current.volume = volumeBar.current.value;
  };

  // changes current time (left of progress bar) and coordinates these values
  const changePlayerCurrentTime = () => {
    setCurrentTime(progressBar?.current?.value);
  };

  //toggle play is what manages play state after the user clicks play not on the audio player
  const togglePlay = () => {
    if (!toggleState === true) {
      audioPlayer.current.play();
      progressRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(progressRef.current);
    }
  };

  //moves us on to the next track
  const onNextClick = () => {
    let nextSong;
    if (queue.length) nextSong = queue.shift();
    else nextSong = playqueue.shift();
    playedSongs.unshift(currentSong);
    dispatch(loadSong(nextSong.id));
  };

  const onLastClick = () => {
    let last = playedSongs.shift();
    if (last) {
      compositeQueue.unshift(currentSong);
      dispatch(loadSong(last?.id));
    }
  };

  return (
    <>
      <div id="player">
        <div className="player-left">
          <div>
            {currentSong && (
              <img
                alt="spotify"
                className="player-image"
                src={currentSong?.album_image}
              />
            )}
          </div>
          <div>
            <Link to={`/albums/${currentSong?.album_id}`}>
              <h4>{currentSong?.name}</h4>
            </Link>
            <Link to={`/artists/${currentSong?.artist_id}`}>
              <h4>{currentSong?.artist}</h4>
            </Link>
          </div>
        </div>

        <div className="player-center">
          <div className="player-center-top">
            <button
              className="button-none"
              onClick={onLastClick}
              disabled={lastSong ? false : true}
            >
              <h5>
                <FaStepBackward />
              </h5>
            </button>
            <button
              className="button-white"
              disabled={currentSong ? false : true}
              onClick={() => {
                togglePlay();
                dispatch(toggle_play());
              }}
            >
              {toggleState ? <FaPause /> : <FaPlay />}
            </button>
            <button
              className="button-none"
              onClick={onNextClick}
              disabled={compositeQueue.length ? false : true}
            >
              <h5>
                <FaStepForward />
              </h5>
            </button>
          </div>
          <div className="player-center-bottom">
            <audio ref={audioPlayer} src={currentSong?.audio}></audio>
            <div className="current-time">
              <h4>{calculateTime(currentTime)}</h4>
            </div>
            <input
              className="progressBar"
              ref={progressBar}
              type="range"
              defaultValue={0}
              onChange={changeRange}
            />
            <div className="current-time">
              <h4>
                {duration && !isNaN(duration)
                  ? calculateTime(duration)
                  : "0:00"}
              </h4>
            </div>
          </div>
        </div>
        <div className="player-right">
          <Link to="/queue">
            <h4>
              <FaList />
            </h4>
          </Link>
          <h4>
            <FaVolumeUp />
          </h4>
          <input
            className="progressBar"
            ref={volumeBar}
            type="range"
            defaultValue={1}
            min={0}
            max={1}
            step={0.01}
            onChange={changeVolume}
          />
        </div>
      </div>
    </>
  );
};
