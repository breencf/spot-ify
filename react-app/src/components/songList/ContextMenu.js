import "./songList.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load_Playlists } from "../../store/playlists";
import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu,
  useMenuState,
} from "@szhsin/react-menu";

export const ContextMenu = ({ song, anchorPoint, state }) => {
  const { id } = useSelector((state) => state.session.user);
  const { playLists } = useSelector((state) => state.playListReducer);
  const [menuProps, toggleMenu] = useMenuState();
  const dispatch = useDispatch();
  const playlistArr = Object.values(playLists);

  return (
    <>
      <Menu className="contextMenu" menuButton={<MenuButton>...</MenuButton>}>
        <MenuItem>Add to queue</MenuItem>
        <hr />
        <MenuItem>Go to artist</MenuItem>
        <MenuItem>Go to album</MenuItem>
        <hr />
        <MenuItem>Save to your liked songs</MenuItem>
        <MenuItem>Remove from this playlist</MenuItem>
        <SubMenu label="Add to playlist">
          <MenuItem>Add to new playlist</MenuItem>
          {
            // playLists &&
            playlistArr.map((playlist) => {
             return <MenuItem key={playlist.id}>{playlist.name}</MenuItem>;
            })
          }
        </SubMenu>
      </Menu>
    </>
  );
};
