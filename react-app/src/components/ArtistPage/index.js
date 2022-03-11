import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { load_artist } from "../../store/artist";
import { ContentList } from "../ContentList";
import { SongsList } from "../songList";
import "./ArtistPage.css";
import { add_Library_Artist } from "../../store/library";

export const ArtistPage = () => {
    const { artistId } = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(load_artist(artistId));
      }, [dispatch]);

      const artistObj = useSelector((state) => state?.artistReducer?.artist);
      const userId = useSelector((state) => state.session.user.id)
      let albums = artistObj?.albums?.dict;
      let songs = artistObj?.songs?.dict;


    return (
        <>
            <div className="albumTop">
                <div>
                    <img className="albumImage artistImage" src={artistObj?.image} />
                </div>
                <div>
                    <h1>{artistObj?.name}</h1>
                    <button onClick={(() => dispatch(add_Library_Artist(userId, artistObj.id)))}>Add artist to library</button>
                    {/* <img className="artistIcon" src={artistObj?.image} /> */}
                    {/* <Link to={`/albums/${artistObj?.id}`}>
                        {artistObj?.album?.artist}
                    </Link> */}
                </div>
            </div>
            <br />
            <hr />
            <br />
            <h2>Popular</h2>
            <SongsList songProp={songs?.splice(0, 5)} />
            {albums && <ContentList array={albums} heading={'Albums'}/>}
        </>
    )
}
