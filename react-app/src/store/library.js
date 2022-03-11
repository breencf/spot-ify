

// const LOAD_LIBRARY = 'user/LOAD_LIBRARY';
// // const ADD_LIBRARY = 'user/ADD_LIBRARY';
// const DELETE_LIBRARY_ALBUM = 'user/DELETE_ALBUM';
// // const ADD_LIBRARY_ALBUM = 'user/ADD_LIBRARY_ALBUM';
// // const ADD_LIBRARY_ARTIST = 'user/ADD_LIBRARY_ARTIST';
// const DELETE_LIBRARY_ARTIST = 'user/DELETE_LIBRARY_ARTIST';
// const DELETE_LIBRARY_PLAYLIST = 'user/DELETE_LIBRARY_PLAYLIST';


// const deleteLibraryPlaylist = (userId, playlistId) => {
//     return {
//         type: DELETE_LIBRARY_PLAYLIST,
//         userId,
//         playlistId
//     }
// }

// export const delete_LibraryPlaylist = (userId, playlistId) => async dispatch => {
//     const response = await fetch(`/api/users/library/playlist/delete`,{
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({userId, playlistId}),
//     })
//     const data = await response.json()
//     dispatch(deleteLibraryPlaylist(userId, playlistId))
// }


// export const add_Library_Playlist = (userId, playlistId) => async dispatch => {
//     const response = await fetch(`/api/users/library/playlist/add`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({userId, playlistId}),
//     })
// }

// const deleteLibraryArtist = (userId, artistId) => {
//     return {
//         type: DELETE_LIBRARY_ARTIST,
//         userId,
//         artistId
//     }
// }

// export const delete_LibraryArtist = (userId, artistId) => async dispatch => {
//     const response = await fetch(`/api/users/library/artist/delete`,{
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({userId, artistId}),
//     })
//     const data = await response.json()
//     dispatch(deleteLibraryArtist(userId, artistId))
// }


// // const addLibraryArtist = (userId, artistId) => {
// //     return {
// //         type: ADD_LIBRARY_ARTIST,
// //         userId,
// //         artistId
// //     }
// // }

// export const add_Library_Artist = (userId, artistId) => async dispatch => {
//     const response = await fetch(`/api/users/library/artist/add`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({userId, artistId}),
//     })
// }

// // const addLibraryAlbum = (userId, albumId) => {
// //     return {
// //         type: ADD_LIBRARY_ALBUM,
// //         userId,
// //         albumId
// //     }
// // }

// export const add_Library_Album = (userId, albumId) => async dispatch => {
//     const response = await fetch(`/api/users/library/album/add`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({userId, albumId}),
//     })
// }


// const deleteLibraryAlbum = (libraryId, albumId) => {
//     return {
//         type: DELETE_LIBRARY_ALBUM,
//         albumId,
//         libraryId
//     }
// }

// export const delete_LibraryAlbum = (libraryId,albumId) => async dispatch => {
//     const response = await fetch(`/api/users/library/${albumId}/delete`,{
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({libraryId, albumId}),
//     })
//     const data = await response.json()
//     dispatch(deleteLibraryAlbum(libraryId, albumId))
// }

// const loadLibrary = (data) => {
//     return {
//         type: LOAD_LIBRARY,
//         data
//     }
// }

// export const load_Library = ( userId ) => async dispatch => {
//     const response = await fetch(`/api/users/${userId}/library`)
//     const data = await response.json()
//     // console.log(data, 'any data coming back? ')
//     dispatch(loadLibrary(data))
// }






//   const libraryReducer = (state = {}, action) => {
//     let newState
//     switch (action.type) {
//       case LOAD_LIBRARY:
//           newState = {...state}
//           newState = action.data
//           return newState
//       case DELETE_LIBRARY_ALBUM:
//           newState = {...state}
//           let albums = newState.albums
//           for(let i = 0; i < albums.length; i++){
//               let userAlbum = albums[i]
//               if(userAlbum.id === action.albumId){
//                   albums.pop(i)
//               }
//           }
//           return newState
//         case DELETE_LIBRARY_ARTIST:
//           newState = {...state}
//           let artists = newState.artists
//           for(let i = 0; i < artists.length; i++){
//               let userArtist = artists[i]
//               if(userArtist.id === action.artistId){
//                   artists.pop(i)
//               }
//           }
//           return newState
//         case DELETE_LIBRARY_PLAYLIST:
//           newState = {...state}
//           let playlists = newState.playlists
//           for(let i = 0; i < playlists.length; i++){
//               let userPlaylist = playlists[i]
//               if(userPlaylist.id === action.playlistId){
//                   playlists.pop(i)
//               }
//           }
//           return newState
//       default:
//         return state;
//     }
//   };


//   export default libraryReducer;
