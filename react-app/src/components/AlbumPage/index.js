import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { load_album } from "../../store/album";
import { SongsList } from "../songList";
import { add_Library_Album } from "../../store/library";
import "./AlbumPage.css";

export const AlbumPage = () => {
  let { albumId } = useParams();

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(load_album(albumId));
  }, [dispatch]);

  const albumObj = useSelector((state) => state.albumReducer);
  const userId = useSelector((state) => state.session.user.id)
  console.log(userId);

  console.log(albumObj?.album?.songs?.dict);
  let songs = albumObj?.album?.songs?.dict;

  return (
    <>
      <div className="albumTop">
        <div>
          <img className="albumImage" src={albumObj?.album?.image} />
        </div>
        <div>
          <h4>ALBUM</h4>
          <button onClick={(() => dispatch(add_Library_Album(userId, albumId)))}>Add Album to Library</button>
          <h1>{albumObj?.album?.name}</h1>
          <img className="artistIcon" src={albumObj?.album?.artist_image} />
          <Link to={`/artists/${albumObj?.album?.artist_id}`}>
            {albumObj?.album?.artist}
          </Link>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <SongsList songProp={songs} />
    </>
  );
};
