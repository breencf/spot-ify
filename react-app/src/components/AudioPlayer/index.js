
import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux';


export const AudioPlayer = () => {

  const { queue } = useSelector(state => state.songsReducer)

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tracks, setTracks] = useState([]);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const progressRef = useRef();

  

  // useEffect(() => {
  //   audioPlayer.current.play();
  // }, [queue])

  useEffect(() => {
    // total duration of song
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readystate]) // properties provided by audio tag

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const changeRange = () => {
    // sets spot/time of song based on user input (dragging progress bar will set song to that)
    audioPlayer.current.currentTime = progressBar.current.value;
    //
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    // changes current time (left of progress bar)
    setCurrentTime(progressBar.current.value);
    // progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    // whilePlaying();
  }

  const whilePlaying = () => {
    // changes the position of progress bar
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();

    progressRef.current = requestAnimationFrame(whilePlaying)
  }

  const togglePlay = () => {
    const previous = isPlaying;
    setIsPlaying(!isPlaying);

    if (!previous) {
      audioPlayer.current.play();
      progressRef.current = requestAnimationFrame(whilePlaying)
    }
    else {
      audioPlayer.current.pause();
      cancelAnimationFrame(progressRef.current)
    }

  }

  return (
    <>
      <div id="player">
        <audio ref={audioPlayer} src={queue ? queue[0]?.audio : null}></audio>
        <div className='current-time'>
          <h4>{calculateTime(currentTime)}</h4>
        </div>
        <div>
          <input ref={progressBar} type='range'
            defaultValue={0}
            onChange={changeRange}
          />
        </div>
        <div className='current-time'>
          <h4>{(duration && !isNaN(duration)) && calculateTime(duration)}</h4>
        </div>
        <button onClick={togglePlay}>Play</button>
      </div>
    </>
  )
};
