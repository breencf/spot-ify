import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { load_artist } from "../../store/artist";
import { ContentList } from "../ContentList";
import { SongsList } from "../songList";
import "./ArtistPage.css";

export const ArtistPage = () => {
    const { artistId } = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(load_artist(artistId));
      }, [dispatch]);

      const artistObj = useSelector((state) => state?.artistReducer?.artist);
    //   console.log('-------------------', artistObj)

      let albums = artistObj?.albums?.dict;
    //   console.log('-------------------', albums)

      let songs = artistObj?.songs?.dict;
    //   console.log('-------------------', songs)


    return (
        <>
            <div className="albumTop">
                <div>
                    <img className="albumImage artistImage" src={artistObj?.image} />
                </div>
                <div>
                    <h1>{artistObj?.name}</h1>
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
