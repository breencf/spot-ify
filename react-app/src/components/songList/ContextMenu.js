import "./songList.css";
import { useDispatch, useSelector } from "react-redux";
import { addToPlaylist } from "../../store/playlists";
import { Link } from "react-router-dom";
import { FaEllipsisH, FaHeart } from "react-icons/fa";
import { add_Library_Song } from "../../store/library";
// import Dropdown from "rc-dropdown";
// import Menu, { Item as MenuItem, Divider } from "rc-menu";
// import "rc-dropdown/assets/index.css";

// import "./styles.css";

import {Menu,MenuItem,MenuButton,SubMenu,} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

export const ContextMenu = ({ song }) => {
  const { id } = useSelector((state) => state.session.user);
  const { playLists } = useSelector((state) => state.playListReducer);
  // const [menuProps, toggleMenu] = useMenuState();
  const dispatch = useDispatch();
  const playlistArr = Object.values(playLists);

  const onClickAddNew = () => {
    console.log({ user_id: id, song_id: song.id, playlist_id: null });
    dispatch(addToPlaylist({ user_id: id, song, playlist_id: null }));
  };

  // const menu = (
  //   <Menu>
  //     <MenuItem disabled>disabled</MenuItem>
  //     <MenuItem key="1">Add to Queue</MenuItem>
  //     <Divider />
  //     <MenuItem key="2"><Link to={`/artists/${song.artist_id}`}>Go to artist</Link></MenuItem>
  //     <Divider />
  //     <MenuItem key="3"><Link to={`/albums/${song.album_id}`}>Go to album</Link></MenuItem>
  //     <Divider />
  //     <MenuItem key="4">Add to Playlist</MenuItem>
  //     <Divider />
  //     <MenuItem key="5">Remove from Playlist</MenuItem>
  //     <Divider />
  //     <MenuItem key="6">four</MenuItem>
  //     <Divider />
  //     <MenuItem key="7">four</MenuItem>
  //   </Menu>
  // );

  return (
    <>
      <Menu
        className="contextMenu"
        id='testing1'
        menuButton={
          <MenuButton className="button-none">
            <h4><FaEllipsisH/></h4>
          </MenuButton>
        }
      >
        <MenuItem className='menu-item-test'>Add to queue</MenuItem>
        <hr />

        <MenuItem className='menu-item-test'>
          <Link to={`/artists/${song.artist_id}`}>Go to artist</Link>
        </MenuItem>
        <MenuItem className='menu-item-test'>
          <Link to={`/albums/${song.album_id}`}>Go to album</Link>
        </MenuItem>

        <hr />
        <MenuItem className='menu-item-test' onClick={(() => dispatch(add_Library_Song(id, song.id)))}>Save to your liked songs</MenuItem>
        <MenuItem className='menu-item-test'>Remove from this playlist</MenuItem>
        <SubMenu direction='left' label="Add to playlist" id='testing2'>
          <MenuItem className='menu-item-test' onClick={onClickAddNew}>Add to new playlist</MenuItem>
          {
            playlistArr?.map((playlist) => {
              return (
                <MenuItem
                className='menu-item-test'
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
      {/* <div style={{ margin: 20 }}> */}
        {/* <div style={{ height: 100 }} /> */}
        {/* <div> */}
        {/* <div id='menu-heart'>
          <Dropdown
            trigger={["click"]}
            overlay={menu}
            animation="slide-up"
            style={{ width: 150 }}
            // onVisibleChange={onVisibleChange}
          >
            <p id="icon-color" >
              <FaEllipsisH />
            </p>
            {/* <button style={{ width: 100 }}>open</button> */}
          {/* </Dropdown>
          <p><FaHeart /></p>
        </div> */}
      {/* </div> */}
    </>
  );
};
