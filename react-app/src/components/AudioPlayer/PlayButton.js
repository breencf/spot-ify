import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    playSong,
    toggle_play,
    loadSong,
    play,
    pause,
  } from "../../store/songs";


export const PlayButton = ({ id, media }) => {

    const { currSong } = useSelector(state => state.songsReducer)
    const toggleState = useSelector(state => state.songsReducer.isPlaying);

    const [isPlaying, setIsPlaying] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {

    }, [dispatch])

    // const clickPlay = () => {
    //     // setIsPlaying(!isPlaying);
    //     dispatch(loadSong(id))
    //     console.log(currSong)
    // }

    const togglePlay = () => {
        console.log("togglePlaycalled");
        if (toggleState === false) {
        //   console.log("playing that song!");
          audioPlayer.current.play();
          dispatch(play());
          progressRef.current = requestAnimationFrame(whilePlaying);
        } else {
        //   console.log("pausing that shiiii");
          audioPlayer.current.pause();
          dispatch(pause());
          cancelAnimationFrame(progressRef.current);
        }
      };

    return (
        <>
            <audio ref={audioPlayer} src={media}></audio>
            <button
            onClick={togglePlay}
            >Play</button>
        </>
    )
}
