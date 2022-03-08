import { useEffect, useRef, useState } from "react";
import { ContextMenu } from "./ContextMenu";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, SubMenu } from "@szhsin/react-menu";
import { useSelector } from "react-redux";

export const SongListing = ({ song }) => {
  const [showMenu, setShowMenu] = useState(false);
  const songRef = useRef(null);
  let selectedSong;
  const { playLists } = useSelector((state) => state.playListReducer);

  return (
    <div className="songListing">
      <span className="song_track_number"><p>{song.album_track_number}</p></span>
      <span className="song_image">
        <img src={song.album_image} className="song_album_image" />
      </span>
      {/* <audio controls src={song.audio}>
        audio
      </audio> */}
      <span className="song_name_artist">
        <p>{song.name}</p>
        <Link to={`/artists/${song.artist_id}`}>{song.artist}</Link>
      </span>
      <span className="song_album">
        <Link to={`/albums/${song.album_id}`}>{song.album}</Link>
      </span>
      <span className="song_duration"><p>0:00</p></span>
      <span className="song_...">
        <ContextMenu song={song} />
      </span>
    </div>
  );
};
