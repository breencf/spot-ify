import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams, NavLink } from "react-router-dom";
import { load_Library } from "../../store/library";
import { delete_LibraryAlbum, delete_LibraryArtist, delete_LibraryPlaylist } from "../../store/library";
import { delete_Playlist } from "../../store/playlists";
import { ContentList } from "../ContentList";

const Library = () => {
    const dispatch = useDispatch()
    const {userId} = useParams()

    const data = useSelector((state) => state.libraryReducer)
    const playLists = useSelector((state) => Object?.values(state?.playListReducer?.playLists));



    useEffect(() => {
        dispatch(load_Library(userId))
    },[dispatch])


    return (
        <div>
            <h3>hello from library</h3>
            <ContentList array={data?.albums} heading={'Albums'}/>
            <ContentList array={data?.artists} heading={'Artists'}/>
            {data?.playlists && playLists && <ContentList array={[...data?.playlists, ...playLists]} heading={'Playlists'}/>}
        </div>
    )
}


export default Library;
