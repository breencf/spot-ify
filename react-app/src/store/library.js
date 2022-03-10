

const LOAD_LIBRARY = 'user/LOAD_LIBRARY';
const ADD_LIBRARY = 'user/ADD_LIBRARY';
const DELETE_LIBRARY_SONG = 'user/DELETE_SONG';


const deleteLibrarySong = (libraryId, songId) => {
    return {
        type: DELETE_LIBRARY_SONG,
        songId,
        libraryId
    }
}

export const delete_LibrarySong = (libraryId,songId) => async dispatch => {
    const response = await fetch(`/api/users/library/${songId}/delete`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({libraryId, songId}),
    })
    const data = await response.json()
    dispatch(deleteLibrarySong(libraryId, songId))
}

const loadLibrary = (data) => {
    return {
        type: LOAD_LIBRARY,
        data
    }
}

export const load_Library = ( userId ) => async dispatch => {
    const response = await fetch(`/api/users/${userId}/library`)
    const data = await response.json()
    // console.log(data, 'any data coming back? ')
    dispatch(loadLibrary(data))
}






  const libraryReducer = (state = {}, action) => {
    let newState
    switch (action.type) {
      case LOAD_LIBRARY:
          newState = {...state}
          newState = action.data
          return newState
      case DELETE_LIBRARY_SONG:
          newState = {...state}
          let songs = newState.songs
          for(let i = 0; i < songs.length; i++){
              let userSong = songs[i]
              if(userSong.id === action.songId){
                  songs.pop(i)
              }
          }
          return newState
      default:
        return state;
    }
  };


  export default libraryReducer;
