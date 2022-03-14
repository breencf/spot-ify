import { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { load_album } from "../../store/album";
import { SongsList } from "../songList";
import { add_Library_Album, delete_LibraryAlbum } from "../../store/library";
import "./AlbumPage.css";
import { PlayButton } from "../AudioPlayer/PlayButton";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import "rc-dropdown/assets/index.css";
import { FaEllipsisH } from "react-icons/fa";

export const AlbumPage = () => {
  let { albumId } = useParams();

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(load_album(albumId));
  }, [dispatch, albumId]);

  const albumObj = useSelector((state) => state.albumReducer);
  const userId = useSelector((state) => state.session.user.id);

  const data = useSelector((state) => state.libraryReducer)
  const [us, setus]= useState(false)

  

  useEffect(() => {

    let newArr = data.albums?.filter((user) => {
      return user.id === parseInt(albumId);
    })

    if (data?.albums && newArr?.length > 0){
      setus(false)
    }else{
      setus(true)
    }
    // console.log(newArr)
  }, [dispatch, albumObj ]);


  const menu = (
    <Menu id="user-menu-style">
      {us && <MenuItem
        id="testing_menu"
        onClick={() => {
          setus(false)
          dispatch(add_Library_Album(userId, albumId))}}
        key="1"
      >
        Add to Library
      </MenuItem>}
      {!us && <MenuItem
        id="testing_menu"
        onClick={() => {
          setus(true)
          dispatch(delete_LibraryAlbum(userId, albumId))}}
        key="2"
      >
        Remove from Library
      </MenuItem>}
    </Menu>
  );

  // console.log(albumObj?.album?.songs?.dict);
  let songs = albumObj?.album?.songs?.dict;

  return (
    <>
      <div className="albumTop">
        <div>
          <img
            alt="spotify"
            className="albumImage"
            src={albumObj?.album?.image}
          />
        </div>
        <div>
          <h4>ALBUM</h4>
          <h1>{albumObj?.album?.name}</h1>
          <img
            alt="spotify"
            className="artistIcon"
            src={albumObj?.album?.artist_image}
          />
          <Link to={`/artists/${albumObj?.album?.artist_id}`}>
            {albumObj?.album?.artist}
          </Link>
        </div>
      </div>
      <br />
      {albumObj.album.id && (
        <>
          <div className="page-buttons" id="album">
            <PlayButton type={"albums"} mediaId={albumId} />
            <div>
              <Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
                <p id="icon-color" style={{ width: 150 }}>
                  <FaEllipsisH />
                </p>
              </Dropdown>
            </div>
          </div>
        </>
      )}
      <hr />
      <br />
      <SongsList songProp={songs} />
    </>
  );
};
