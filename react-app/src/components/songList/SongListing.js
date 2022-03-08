import { useState } from "react";
import { OptionsMenu } from "./OptionsMenu";
import { Link } from "react-router-dom";

export const SongListing = ({ song }) => {
  const [showMenu, setShowMenu] = useState(false);

  const onClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <span>
        <img src={song.album_image} className="song_album_image" />
      </span>
      <span>
        {song.name}
        <Link to={`/artists/${song.artist_id}`}>{song.artist}</Link>
      </span>
      <span>
        <Link to={`/albums/${song.album_id}`}>{song.album}</Link>
      </span>
      <span>
        <div onClick={onClick}>...</div>
      </span>
      {showMenu && <OptionsMenu song={song} />}
    </div>
  );
};
