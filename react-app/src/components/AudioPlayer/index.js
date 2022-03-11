import { useEffect, useState, useRef, useDebugValue } from "react";
import { useSelector, useDispatch } from "react-redux";
import songsReducer, {
  loadSong,
  play,
  pause,
  toggle_play,
} from "../../store/songs";
import "./AudioPlayer.css";
import { FaPlay } from "react-icons/fa";

export const AudioPlayer = () => {
  const { queue } = useSelector((state) => state.songsReducer);
  const newSong = useSelector((state) => state.songsReducer.newSong);
  const newSid = useSelector((state) => state.songsReducer.newSong?.id);
  const toggleState = useSelector((state) => state.songsReducer.isPlaying);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSong, setCurrentSong] = useState(false);
  const [lastSong, setLastSong] = useState(null);
  const audioPlayer = useRef();
  const progressBar = useRef();
  const progressRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("new song loaded from state");
    setLastSong(currentSong);
    setCurrentSong(newSong);
  }, [newSid]);

  useEffect(() => {
    if (currentSong !== lastSong) {
      console.log("song loaded, assigning duration");
      const seconds = Math.floor(audioPlayer.current.duration);
      setDuration(seconds);
      // progressBar.current.max = seconds;
    }
  }, [
    audioPlayer?.current?.loadedmetadata,
    audioPlayer?.current?.readyState,
    currentSong,
  ]);

  useEffect(() => {
    console.log(duration);
    if (duration) {
      progressBar.current.max = duration;
      dispatch(play());
      audioPlayer.current.play();
      progressRef.current = requestAnimationFrame(whilePlaying);
    }
  }, [duration]);

  // useEffect(() => {
  //   if(toggleState !== isPlaying) setIsPlaying(toggleState)
  //   togglePlay()
  // }, [toggleState])

  //checks if the song is over to move on to the next song
  useEffect(() => {
    console.log(progressBar.current.max, progressBar.current.value);
    if (progressBar?.current?.value === progressBar?.current?.max) {
      let nextSong = queue.shift();
      console.log(nextSong.id);
      dispatch(loadSong(nextSong.id));
    }
  }, [progressBar?.current?.value]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  //called while a song is playing, changes the left time and progresses the bar
  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    progressRef.current = requestAnimationFrame(whilePlaying);
  };

  //allows a user to drag the progress bar
  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  // changes current time (left of progress bar)
  const changePlayerCurrentTime = () => {
    setCurrentTime(progressBar?.current?.value);
  };

  const togglePlay = () => {
    if (!toggleState === true) {
      console.log("playing that song!");
      audioPlayer.current.play();
      // dispatch(play());
      progressRef.current = requestAnimationFrame(whilePlaying);
    } else {
      console.log("pausing that shiiii");
      audioPlayer.current.pause();
      // dispatch(pause());
      cancelAnimationFrame(progressRef.current);
    }
  };

  return (
    <>
      <div id="player">
        <div className="player-left">
          <div>
            <img className="player-image" src={currentSong?.album_image} />
          </div>
          <div>
            <p>{currentSong?.name}</p>
            <p>{currentSong?.artist}</p>
          </div>
        </div>

        <div className="player-center">
          <div className="player-center-top">
            <button
              className="button-green"
              onClick={() => {
                togglePlay();
                dispatch(toggle_play());
              }}
            >
              <FaPlay />
            </button>
          </div>
          <div className="player-center-bottom">
            <audio ref={audioPlayer} src={currentSong?.audio}></audio>
            <div className="current-time">
              <h4>{calculateTime(currentTime)}</h4>
            </div>
              <input
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
        <div className="player-right"></div>
      </div>
    </>
  );
};
