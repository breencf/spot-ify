import { useEffect, useState, useRef, useDebugValue } from "react";
import { useSelector, useDispatch } from "react-redux";
import { playSong, toggle_play, play, pause } from "../../store/songs";

export const AudioPlayer = () => {
  const newSong = useSelector((state) => state.songsReducer.currSong);
  const toggleState = useSelector((state) => state.songsReducer.isPlaying);

  const dispatch = useDispatch();
  // const { queue } = useSelector((state) => state.songsReducer);

  let queue = [
    {
      album: "K+",
      album_id: 2,
      album_image:
        "https://res.cloudinary.com/jadecabbage/image/upload/v1646670512/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/00_-_Kilo_Kish_K-front-large_dqbqps.jpg",
      album_track_number: 1,
      artist: "Kilo Kish",
      artist_id: 2,
      audio:
        "https://res.cloudinary.com/jadecabbage/video/upload/v1646670514/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/01_-_K_Intro_pugikl.mp3",
      created_at: "Wed, 09 Mar 2022 19:25:18 GMT",
      id: 14,
      name: "K+ Intro",
    },
    {
      album: "K+",
      album_id: 2,
      album_image:
        "https://res.cloudinary.com/jadecabbage/image/upload/v1646670512/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/00_-_Kilo_Kish_K-front-large_dqbqps.jpg",
      album_track_number: 2,
      artist: "Kilo Kish",
      artist_id: 2,
      audio:
        "https://res.cloudinary.com/jadecabbage/video/upload/v1646670549/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/02_-_Goldmine_dk0k8t.mp3",
      created_at: "Wed, 09 Mar 2022 19:25:18 GMT",
      id: 15,
      name: "Goldmine",
    },
    {
      album: "K+",
      album_id: 2,
      album_image:
        "https://res.cloudinary.com/jadecabbage/image/upload/v1646670512/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/00_-_Kilo_Kish_K-front-large_dqbqps.jpg",
      album_track_number: 3,
      artist: "Kilo Kish",
      artist_id: 2,
      audio:
        "https://res.cloudinary.com/jadecabbage/video/upload/v1646670529/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/03_-_Ghost_cf6rre.mp3",
      created_at: "Wed, 09 Mar 2022 19:25:18 GMT",
      id: 16,
      name: "Ghost",
    },
    {
      album: "K+",
      album_id: 2,
      album_image:
        "https://res.cloudinary.com/jadecabbage/image/upload/v1646670512/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/00_-_Kilo_Kish_K-front-large_dqbqps.jpg",
      album_track_number: 4,
      artist: "Kilo Kish",
      artist_id: 2,
      audio:
        "https://res.cloudinary.com/jadecabbage/video/upload/v1646670545/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/04_-_Trappin_y6cpt7.mp3",
      created_at: "Wed, 09 Mar 2022 19:25:18 GMT",
      id: 17,
      name: "Trappin",
    },
    {
      album: "K+",
      album_id: 2,
      album_image:
        "https://res.cloudinary.com/jadecabbage/image/upload/v1646670512/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/00_-_Kilo_Kish_K-front-large_dqbqps.jpg",
      album_track_number: 5,
      artist: "Kilo Kish",
      artist_id: 2,
      audio:
        "https://res.cloudinary.com/jadecabbage/video/upload/v1646670522/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/05_-_IOU_ajtlty.mp3",
      created_at: "Wed, 09 Mar 2022 19:25:18 GMT",
      id: 18,
      name: "IOU",
    },
    {
      album: "K+",
      album_id: 2,
      album_image:
        "https://res.cloudinary.com/jadecabbage/image/upload/v1646670512/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/00_-_Kilo_Kish_K-front-large_dqbqps.jpg",
      album_track_number: 6,
      artist: "Kilo Kish",
      artist_id: 2,
      audio:
        "https://res.cloudinary.com/jadecabbage/video/upload/v1646670522/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/06_-_Turquoise_ozt8gl.mp3",
      created_at: "Wed, 09 Mar 2022 19:25:18 GMT",
      id: 19,
      name: "Turquoise",
    },
    {
      album: "K+",
      album_id: 2,
      album_image:
        "https://res.cloudinary.com/jadecabbage/image/upload/v1646670512/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/00_-_Kilo_Kish_K-front-large_dqbqps.jpg",
      album_track_number: 7,
      artist: "Kilo Kish",
      artist_id: 2,
      audio:
        "https://res.cloudinary.com/jadecabbage/video/upload/v1646670536/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/07_-_Scones_sh3axp.mp3",
      created_at: "Wed, 09 Mar 2022 19:25:18 GMT",
      id: 20,
      name: "Scones",
    },
    {
      album: "K+",
      album_id: 2,
      album_image:
        "https://res.cloudinary.com/jadecabbage/image/upload/v1646670512/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/00_-_Kilo_Kish_K-front-large_dqbqps.jpg",
      album_track_number: 8,
      artist: "Kilo Kish",
      artist_id: 2,
      audio:
        "https://res.cloudinary.com/jadecabbage/video/upload/v1646670531/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/08_-_Love2k_ryh0ob.mp3",
      created_at: "Wed, 09 Mar 2022 19:25:18 GMT",
      id: 21,
      name: "Love2k",
    },
    {
      album: "K+",
      album_id: 2,
      album_image:
        "https://res.cloudinary.com/jadecabbage/image/upload/v1646670512/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/00_-_Kilo_Kish_K-front-large_dqbqps.jpg",
      album_track_number: 9,
      artist: "Kilo Kish",
      artist_id: 2,
      audio:
        "https://res.cloudinary.com/jadecabbage/video/upload/v1646670553/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/09_-_Better_och30g.mp3",
      created_at: "Wed, 09 Mar 2022 19:25:18 GMT",
      id: 22,
      name: "Better",
    },
    {
      album: "K+",
      album_id: 2,
      album_image:
        "https://res.cloudinary.com/jadecabbage/image/upload/v1646670512/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/00_-_Kilo_Kish_K-front-large_dqbqps.jpg",
      album_track_number: 10,
      artist: "Kilo Kish",
      artist_id: 2,
      audio:
        "https://res.cloudinary.com/jadecabbage/video/upload/v1646670584/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/10_-_Creepwave_wxg2xq.mp3",
      created_at: "Wed, 09 Mar 2022 19:25:18 GMT",
      id: 23,
      name: "Creepwave",
    },
  ];

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSong, setCurrentSong] = useState(false)
  const audioPlayer = useRef();
  const progressBar = useRef();
  const progressRef = useRef();

  useEffect(() => {console.log('toggle state', toggleState)}, [toggleState])

  useEffect(() => {
    console.log('sending the song to the player', newSong)
    if (newSong) setCurrentSong(newSong)
  },[newSong])

  //uses the metadata of the loaded audio to set duration + progress bar max
  useEffect(() => {
    if(currentSong) {
    console.log('sending the songs metadata from the player to the progressbar')
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
    togglePlay()
    }
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  //checks if the song is over to move on to the next song
  // useEffect(() => {
  //   console.log(progressBar.current.max, progressBar.current.value);
  //   if (progressBar?.current?.value === progressBar?.current?.max) {
  //     console.log("finished song!");
  //     let nextSong = queue.pop();
  //     dispatch(playSong(nextSong.id));
  //   }
  // }, [progressBar?.current?.value]);

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
    if (toggleState === false) {
      dispatch(play());
      console.log("playing that song!");
      audioPlayer.current.play();
      progressRef.current = requestAnimationFrame(whilePlaying);
    } else {
      console.log("pausing that shiiii");
      dispatch(pause());
      audioPlayer.current.pause();
      cancelAnimationFrame(progressRef.current);
    }
  };

  return (
    <>
      <div id="player">
        <audio ref={audioPlayer} src={currentSong?.audio}></audio>
        <div className="current-time">
          <h4>{calculateTime(currentTime)}</h4>
        </div>
        <div>
          <input
            ref={progressBar}
            type="range"
            defaultValue={0}
            onChange={changeRange}
          />
        </div>
        <div className="current-time">
          <h4>
            {duration && !isNaN(duration) ? calculateTime(duration) : "0:00"}
          </h4>
        </div>
        {/* <button onClick={rewindOneSong}>rewind</button> */}
        <button onClick={togglePlay}>Play/Pause</button>
        {/* <button onClick={forwardOneSong}>forward</button> */}
      </div>
    </>
  );
};
