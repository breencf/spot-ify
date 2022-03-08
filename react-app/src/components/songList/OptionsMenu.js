import "./songList.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load_Playlists } from "../../store/playlists";


export const OptionsMenu = ({ song }) => {
    const [showPlaylists, setShowPlaylists] = useState(false)
    const {id} = useSelector(state => state.sessions.user)
    const {playlists} = useSelector(state => state.playlistReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(load_Playlists(id))
    },[])



  return (
    <>
      <div id="optionsMenu">
        <ul>
          <li>
            <h4>Add to Queue</h4>
            <hr />
            <h4>Go To Artist</h4>
            <h4>Go To Album</h4>
            <h4 onMouseEnter={setShowPlaylists(true)}>Add To Playlist</h4>
            <h4>Add to Liked Songs</h4>
          </li>
        </ul>
      </div>
      {showPlaylists &&
        <ul>
            {/* creates a new playlist with the song, and the playlist name = song */}
            <li>Add to new playlist</li>
            <hr/>
            {playlists.map((playlist) => {
                <li onClick={() => "dispatch add to playlist(song id, user id, playlist id)"}>{playlist.name}</li>
            })}
        </ul>
          }
    </>
  );
};
