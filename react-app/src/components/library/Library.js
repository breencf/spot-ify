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
            {/* {data?.albums?.map((album) => <div key={album.id}><p>{album.name}----{album.id}</p> <button onClick={(() => dispatch(delete_LibraryAlbum(data.id, album.id)))}>Delete</button></div>)}
            {data?.artists?.map((artist) => <div key={artist.id}><p>{artist.name}</p><button onClick={(() => dispatch(delete_LibraryArtist(data.id, artist.id)))}>Delete</button></div>)}
            {data?.playlists?.map((playlist) => <div key={playlist.id}><p>this is the added playlist id{playlist.id}{playlist.name}</p><button onClick={(() => {dispatch(delete_LibraryPlaylist(data.id, playlist.id),dispatch(delete_Playlist({userId: userId, playlistId: playlist.id})))})}>Delete</button></div>)} */}
            {playLists?.map((list, index) => {
            return <div key={index}>
            {/* <NavLink to={`/users/${userId}/playlists/${list.id}`}>{list.name}</NavLink> */}
            {/* <button onClick={(() => dispatch(delete_Playlist({userId: userId, playlistId: list.id})))}>Delete</button> */}
        </div>
      })}
        </div>
    )
}


export default Library;
