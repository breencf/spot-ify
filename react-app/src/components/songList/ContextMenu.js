import "./songList.css";
import { useDispatch, useSelector } from "react-redux";
import { addToPlaylist } from "../../store/playlists";
import { Link } from "react-router-dom";
import { FaEllipsisH, FaHeart } from "react-icons/fa";
import { add_Library_Song } from "../../store/library";
import { addToQueue } from "../../store/songs";
import { delete_from_playlist, getOnePlaylist } from "../../store/playlists";
import { useParams } from "react-router-dom";
import {Menu,MenuItem,MenuButton,SubMenu,} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

export const ContextMenu = ({ song, playlistId }) => {
  const { id } = useSelector((state) => state.session.user);
  const { playLists } = useSelector((state) => state.playListReducer);
  // const [menuProps, toggleMenu] = useMenuState();
  const dispatch = useDispatch();
  const playlistArr = Object.values(playLists);

  const onClickAddNew = () => {
    // console.log({ user_id: id, song_id: song.id, playlist_id: null });
    dispatch(addToPlaylist({ user_id: id, song, playlist_id: null }));
  };

  const onClickDelete = () => {
    dispatch(delete_from_playlist({playlist_id: playlistId, song_id: song.id}))
    dispatch(getOnePlaylist(playlistId));
  }



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
        <MenuItem onClick={(() => dispatch(addToQueue(song.id)))} className='menu-item-test'>Add to queue</MenuItem>
        <MenuItem className='menu-item-test'>
          <Link className='menu-item-test link' to={`/artists/${song.artist_id}`}>Go to artist</Link>
        </MenuItem>
        <MenuItem className='menu-item-test'>
          <Link className='menu-item-test link' to={`/albums/${song.album_id}`}>Go to album</Link>
        </MenuItem>
        <MenuItem className='menu-item-test'><button className="button-none menu-item-test link" onClick={onClickDelete}>Delete from this playlist</button></MenuItem>
        {/* <MenuItem className='menu-item-test' onClick={(() => dispatch(add_Library_Song(id, song.id)))}>Save to your liked songs</MenuItem> */}
        {/* <MenuItem className='menu-item-test'>Remove from this playlist</MenuItem> */}
        <SubMenu className='menu-item-test submenu' direction='left' label="Add to playlist" id='testing2'>
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
