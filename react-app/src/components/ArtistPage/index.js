import { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { load_artist } from "../../store/artist";
import { ContentList } from "../ContentList";
import { SongsList } from "../songList";
import "./ArtistPage.css";
import { add_Library_Artist, delete_LibraryArtist, load_Library} from "../../store/library";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import "rc-dropdown/assets/index.css";
import { FaEllipsisH } from "react-icons/fa";

export const ArtistPage = () => {
  const { artistId } = useParams();
  const dispatch = useDispatch();

  
  const artistObj = useSelector((state) => state?.artistReducer?.artist);
  const userId = useSelector((state) => state.session.user.id);
  let albums = artistObj?.albums?.dict;
  let songs = artistObj?.songs?.dict;

  const data = useSelector((state) => state.libraryReducer)
  const [us, setus]= useState(false)

  
  
  useEffect(() => {
    dispatch(load_artist(artistId));
    dispatch(load_Library(userId))
    

    // if (data?.artists && newArr?.length > 0){
    //   setus(false)
    // }else{
    //   setus(true)
    // }
    // console.log(newArr)
  }, [dispatch, artistId]);

  useEffect(() => {

    let newArr = data.artists?.filter((user) => {
      return user.id === parseInt(artistId);
    })

    if (data?.artists && newArr?.length > 0){
      setus(false)
    }else{
      setus(true)
    }
    console.log(us)
  }, [dispatch, artistObj, us]);


  // const follo = () => {
  //   setus(false)
  //   return "Following"
  // }

  // const followw = () => {
  //   setus(true)
  //   return "Follow"
  // }

  

  

  const menu = (
    <Menu id="user-menu-style">
      {us && <MenuItem
        id="testing_menu"
        onClick={() => {
          setus(false)
          dispatch(add_Library_Artist(userId, artistId))}}
        key="1"
      >
        Add Artist to Library
      </MenuItem>}
      {!us && <MenuItem
        id="testing_menu"
        onClick={() => {
          setus(true)
          dispatch(delete_LibraryArtist(userId, artistId))}}
        key="2"
      >
        Remove Artist from Library
      </MenuItem>}
    </Menu>
  );

  return (
    <>
      <div className="albumTop">
        <div>
          <img
            alt="spotify"
            className="albumImage artistImage"
            src={artistObj?.image}
          />
        </div>
        <div>
          <h1>{artistObj?.name}</h1>

          {/* <img alt="spotify" className="artistIcon" src={artistObj?.image} /> */}
          {/* <Link to={`/albums/${artistObj?.id}`}>
                        {artistObj?.album?.artist}
                    </Link> */}
        </div>
      </div>
      {artistObj?.id && (
        <div id="artist-menu">
          <Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
            <p id="icon-color" style={{ width: 150 }}>
              <FaEllipsisH />
            </p>
          </Dropdown>
        </div>
      )}
      <br />
      <hr />
      <br />
      <h2>{artistObj?.id ? "Popular" : ""}</h2>
      <SongsList songProp={songs?.splice(0, 5)} />
      {albums && <ContentList array={albums} heading={"Albums"} />}
    </>
  );
};
