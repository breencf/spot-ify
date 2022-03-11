const LOAD_LIBRARY = 'user/LOAD_LIBRARY';
const ADD_LIBRARY = 'user/ADD_LIBRARY';
const DELETE_LIBRARY_ALBUM = 'user/DELETE_ALBUM';
const DELETE_LIBRARY_ARTIST = 'user/DELETE_LIBRARY_ARTIST';
const DELETE_LIBRARY_PLAYLIST = 'user/DELETE_LIBRARY_PLAYLIST';
const DELETE_LIBRARY_SONG = 'user/DELETE_LIBRARY_SOMG';
const ADD_LIBRARY_ALBUM = "user/ADD_LIBRARY_ALBUM"
const ADD_LIBRARY_ARTIST = "user/ADD_LIBRARY_ARTIST"


const deleteLibrarySong = (userId, songId) => {
    return {
        type: DELETE_LIBRARY_SONG,
        userId,
        songId
    }
}

export const delete_LibrarySong = (userId, songId) => async dispatch => {
    const response = await fetch(`/api/users/library/song/delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, songId }),
    })
    const data = await response.json()
    dispatch(deleteLibrarySong(userId, songId))
}

export const add_Library_Song = (userId, songId) => async dispatch => {
    const response = await fetch(`/api/users/library/song/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, songId }),
    })
}


const deleteLibraryPlaylist = (userId, playlistId) => {
    return {
        type: DELETE_LIBRARY_PLAYLIST,
        userId,
        playlistId
    }
}

export const delete_LibraryPlaylist = (userId, playlistId) => async dispatch => {
    const response = await fetch(`/api/users/library/playlist/delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, playlistId }),
    })
    const data = await response.json()
    dispatch(deleteLibraryPlaylist(userId, playlistId))
}


const deleteLibraryArtist = (userId, artistId) => {
    return {
        type: DELETE_LIBRARY_ARTIST,
        userId,
        artistId
    }
}


// const addLibraryArtist = (userId, artistId) => {
//     return {
//         type: DELETE_LIBRARY_PLAYLIST,
//         userId,
//         playlistId
//     }
// }


export const add_Library_Playlist = (userId, playlistId) => async dispatch => {
    const response = await fetch(`/api/users/library/playlist/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, playlistId }),
    })
}

export const delete_LibraryArtist = (userId, artistId) => async dispatch => {
    const response = await fetch(`/api/users/library/artist/delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, artistId }),
    })
    const data = await response.json()
    dispatch(deleteLibraryArtist(userId, artistId))
}


const addLibraryArtist = (userId, artistId) => {
    return {
        type: ADD_LIBRARY_ARTIST,
        userId,
        artistId
    }
}

export const add_Library_Artist = (userId, artistId) => async dispatch => {
    const response = await fetch(`/api/users/library/artist/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, artistId }),
    })
}

const addLibraryAlbum = (userId, albumId) => {
    return {
        type: ADD_LIBRARY_ALBUM,
        userId,
        albumId
    }
}


export const add_Library_Album = (userId, albumId) => async dispatch => {
    const response = await fetch(`/api/users/library/album/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, albumId }),
    })
}


const deleteLibraryAlbum = (libraryId, albumId) => {
    return {
        type: DELETE_LIBRARY_ALBUM,
        albumId,
        libraryId
    }
}

export const delete_LibraryAlbum = (libraryId, albumId) => async dispatch => {
    const response = await fetch(`/api/users/library/${albumId}/delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ libraryId, albumId }),
    })
    const data = await response.json()
    dispatch(deleteLibraryAlbum(libraryId, albumId))
}

const loadLibrary = (data) => {
    return {
        type: LOAD_LIBRARY,
        data
    }
}

export const load_Library = (userId) => async dispatch => {
    const response = await fetch(`/api/users/${userId}/library`)
    const data = await response.json()
    // console.log(data, 'any data coming back? ')
    dispatch(loadLibrary(data))
}






const libraryReducer = (state = {}, action) => {
    let newState
    switch (action.type) {
        case LOAD_LIBRARY:
            newState = { ...state }
            newState = action.data
            return newState
        case DELETE_LIBRARY_ALBUM:
            newState = { ...state }
            newState.album = newState.album.filter(ele => ele.id !== action.albumId);
            return newState
        case DELETE_LIBRARY_ARTIST:
            newState = { ...state }
            newState.artists = newState.artists.filter(artist => artist.id !== action.artistId);
            return newState
        case DELETE_LIBRARY_PLAYLIST:
            newState = { ...state }
            newState.playlist = newState.playlist.filter(ele => ele.id !== action.playlistId);

            return newState
        case DELETE_LIBRARY_SONG:
            newState = { ...state }
            newState.songs = newState.songs.filter(song => song.id !== action.songId);
            return newState
        default:
            return state;
    }
};


export default libraryReducer;
