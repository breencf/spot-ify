import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { load_Library } from "../../store/library";
import { delete_LibraryAlbum, delete_LibraryArtist, delete_LibraryPlaylist } from "../../store/library";
import { delete_Playlist } from "../../store/playlists";
const Library = () => {
    const dispatch = useDispatch()
    const {userId} = useParams()

    const data = useSelector((state) => state.libraryReducer)


    console.log(data, 'data on the front end ')

    useEffect(() => {
        dispatch(load_Library(userId))
    },[dispatch])


    return (
        <div>
            <h3>hello from library</h3>
            {data?.albums?.map((album) => <div key={album.id}><p>{album.name}----{album.id}</p> <button onClick={(() => dispatch(delete_LibraryAlbum(data.id, album.id)))}>Delete</button></div>)}
            {data?.artists?.map((artist) => <div key={artist.id}><p>{artist.name}</p><button onClick={(() => dispatch(delete_LibraryArtist(data.id, artist.id)))}>Delete</button></div>)}
            {data?.playlists?.map((playlist) => <div key={playlist.id}><p>this is the added playlist id{playlist.id}{playlist.name}</p><button onClick={(() => {dispatch(delete_LibraryPlaylist(data.id, playlist.id))})}>Delete</button></div>)}
        </div>
    )
}


export default Library;
