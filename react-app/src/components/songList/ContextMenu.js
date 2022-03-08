import "./songList.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToPlaylist, load_Playlists } from "../../store/playlists";
import { Link } from "react-router-dom";

import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu,
  useMenuState,
} from "@szhsin/react-menu";


export const ContextMenu = ({ song }) => {
  const { id } = useSelector((state) => state.session.user);
  const { playLists } = useSelector((state) => state.playListReducer);
  const [menuProps, toggleMenu] = useMenuState();
  const dispatch = useDispatch();
  const playlistArr = Object.values(playLists);


  const onClickAddNew = () => {
    console.log({ user_id: id, song_id: song.id, playlist_id: null });
    dispatch(addToPlaylist({ user_id: id, song, playlist_id: null }));
  };


  return (
    <>
      <Menu className="contextMenu" menuButton={<MenuButton>...</MenuButton>}>
        <MenuItem>Add to queue</MenuItem>
        <hr />

        <MenuItem>
          <Link to={`/artists/${song.artist_id}`}>Go to artist</Link>
        </MenuItem>
        <MenuItem>
          <Link to={`/albums/${song.album_id}`}>Go to album</Link>
        </MenuItem>

        <hr />
        <MenuItem>Save to your liked songs</MenuItem>
        <MenuItem>Remove from this playlist</MenuItem>
        <SubMenu label="Add to playlist">

          <MenuItem onClick={onClickAddNew}>Add to new playlist</MenuItem>
          {
            // playLists &&
            playlistArr?.map((playlist) => {
              return (
                <MenuItem
                  key={playlist?.id}
                  onClick={(e) => {
                    dispatch(
                      addToPlaylist({
                        user_id: id,
                        playlist_id: playlist?.id,
                        song,
                      })
                    );
                  }}
                >
                  {playlist?.name}
                </MenuItem>
              );
            })
          }
        </SubMenu>
      </Menu>
    </>
  );
};
