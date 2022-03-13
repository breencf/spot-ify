import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { load_artist } from "../../store/artist";
import { ContentList } from "../ContentList";
import { SongsList } from "../songList";
import "./ArtistPage.css";
import { add_Library_Artist, delete_LibraryArtist } from "../../store/library";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import "rc-dropdown/assets/index.css";
import { FaEllipsisH } from "react-icons/fa";

export const ArtistPage = () => {
  const { artistId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load_artist(artistId));
  }, [dispatch, artistId]);

  const artistObj = useSelector((state) => state?.artistReducer?.artist);
  const userId = useSelector((state) => state.session.user.id);
  let albums = artistObj?.albums?.dict;
  let songs = artistObj?.songs?.dict;
  console.log(artistObj?.songs?.dict)

  const menu = (
    <Menu id="user-menu-style">
      <MenuItem
        id="testing_menu"
        onClick={() => dispatch(add_Library_Artist(userId, artistId))}
        key="1"
      >
        Add Artist to Library
      </MenuItem>
      <MenuItem
        id="testing_menu"
        onClick={() => dispatch(delete_LibraryArtist(userId, artistId))}
        key="2"
      >
        Remove Artist from Library
      </MenuItem>
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
      {songs && <SongsList songProp={songs.length <= 5 ? songs : songs?.splice(0, 5)} />}
      {albums && <ContentList array={albums} heading={"Albums"} />}
    </>
  );
};
