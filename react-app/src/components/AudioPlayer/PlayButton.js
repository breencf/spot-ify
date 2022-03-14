import { useDispatch } from "react-redux";
import { useState } from "react";
import { playMultipleSongs } from "../../store/songs";
import "./AudioPlayer.css";
import { FaPlay, FaPause } from "react-icons/fa";

export const PlayButton = ({ type, mediaId }) => {
  const [toggleIcon, setToggleIcon] = useState(true);

  const dispatch = useDispatch();

  const onClick = () => {
    setToggleIcon(false);
    dispatch(playMultipleSongs({ type, id: mediaId }));
  };

  return (
    <>
      <button className="global-play-button" onClick={onClick}>
        {/* {toggleIcon ? */}
        <FaPlay />
        {/* : <FaPause />} */}
      </button>
    </>
  );
};
