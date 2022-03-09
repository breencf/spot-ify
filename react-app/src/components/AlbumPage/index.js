import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { load_album } from "../../store/album";
import { SongsList } from "../songList";
import "./AlbumPage.css"

export const AlbumPage = () => {

    let { albumId } = useParams()

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(load_album(albumId))
    }, [dispatch])

    const albumObj= useSelector(state => state.albumReducer);
    console.log('albumObj:      ')
    console.log(albumObj?.album?.songs?.dict)
    let songs = albumObj?.album?.songs?.dict;



    return (
        <>
            <div className="albumTop">
                <div>
                    <img className='albumImage' src={albumObj?.album?.image}/>
                </div>
                <div>
                    <h4>ALBUM</h4>
                    <h1>{albumObj?.album?.name}</h1>
                    <img className='artistIcon' src={albumObj?.album?.artist_image}/>
                    <Link to={`/artists/${albumObj?.album?.artist_id}`}>{albumObj?.album?.artist}</Link>
                </div>
            </div>
            <SongsList songProp={songs}/>
        </>
    )

}
