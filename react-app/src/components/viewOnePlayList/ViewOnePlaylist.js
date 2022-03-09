import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { one_Playlists, delete_Playlist } from "../../store/playlists";
import { useHistory, useParams, NavLink, Link } from "react-router-dom";
import UserPlaylistsEdit from "../userPlaylists/EditPlayListForm";
import { SongsList } from "../songList";

const ViewOnePlaylist = () => {
    const dispatch = useDispatch();
    const { userId, playlistId } = useParams();
    const history = useHistory();

    const playLists = useSelector((state) => state?.playListReducer?.playLists);
    const currPlaylist = playLists[playlistId];
    const playlistProp = currPlaylist?.songs?.dict;

    // let defaultImage;

    // useEffect(() => {
    //     if (!currPlaylist?.image) {
    //         if (playlistProp) defaultImage = playlistProp[0]?.album_image;
    //     }
    // }, [playlistProp])

    // console.log('-----------------', playlistId)
    // console.log('----------', playlistProp[0]?.album_image)
    // useEffect(() => {
    //     dispatch(one_Playlists(userId, playlistId));
    // }, [dispatch, playlistId, userId]);

    // return (
    //     <div>
    //         <p>hello from playlists</p>
    //         <p>hello from playlists</p>
    //         <p>route is not hitting</p>
    //         <p>{playList?.image}</p>
    //         <p>{playList?.description}</p>
    //         <UserPlaylistsEdit />
    //         <NavLink to={`/users/${userId}/playlists/${playlistId}`}>{playList?.name}</NavLink>
    //         {playList &&
    //         <button onClick={() => dispatch(delete_Playlist(userId, playlistId))}>Delete playlist here</button>
    //         }
    //     </div>
    // )
    return (
        <>
            <div className="albumTop">
                <div>
                    <img className='albumImage' src={currPlaylist?.image} />
                </div>
                <div>
                    <h4>ALBUM</h4>
                    <h1>{currPlaylist?.name}</h1>
                    <p>{currPlaylist?.description}</p>
                    <Link to={`/users/${currPlaylist?.userId}`}>USERNAME</Link>
                </div>
            </div>
            <SongsList songProp={playlistProp} />
        </>
    )
}

export default ViewOnePlaylist
