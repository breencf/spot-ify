import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams, NavLink, Route } from "react-router-dom";
import { load_Library } from "../../store/library";
import { delete_LibraryAlbum, delete_LibraryArtist, delete_LibraryPlaylist } from "../../store/library";
import { delete_Playlist } from "../../store/playlists";
import { ContentList } from "../ContentList";

const Library = () => {
    // const dispatch = useDispatch()
    const { userId } = useParams()

    const data = useSelector((state) => state.libraryReducer)
    const playLists = useSelector((state) => Object?.values(state?.playListReducer?.playLists));

    // // const dataValue = window.libraryInfo;

    // useEffect(() => {
    //     dispatch(load_Library(userId))
    //     // console.log(dataValue)
    // }, [dispatch])


    return (
        <div>
            <Route path={`/${userId}/library/albums`}>
                {data?.albums.length && <ContentList array={data?.albums} heading={'Albums'}/>}
                {/* <h4>TESTING</h4> */}
            </Route>
            <Route path='/:userId/library/artists'>
                {data?.artists.length && <ContentList array={data?.artists} heading={'Artists'}/>}
            </Route>
            <Route path='/:userId/library/playlists'>
                {data?.playlists && playLists && <ContentList array={[...data?.playlists, ...playLists]} heading={'Playlists'}/>}
            </Route>

        </div >
    )
}


export default Library;
