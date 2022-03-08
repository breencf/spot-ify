
const USER_PLAYLISTS = 'user/USER_PLAYLISTS';
const ADD_PLAYLIST = 'user/ADD_PLAYLIST';
const ADD_TO_PLAYLIST = "songs/ADD_TO_PLAYLIST";


const addPlaylist = (playlist) => {
    return ({
        type: ADD_PLAYLIST,
        playlist
    })
}

const add = (updatedPlaylist) => ({
    type: ADD_TO_PLAYLIST,
    updatedPlaylist,
  });

export const add_Playlist = (playlist) => async dispatch => {
    const response = await fetch(`/api/users/${playlist.userId}/playlists`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(playlist)
    })
    const data = await response.json()
    dispatch(addPlaylist(playlist))
    return data;
}

export const addToPlaylist =
  ({ song_id, user_id, playlist_id }) =>
  async (dispatch) => {
    const response = await fetch(`api/playlists/${playlist_id}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        song_id,
        user_id,
        playlist_id,
      }),
    });

    if (response.ok) {
      const updatedPlaylist = await response.json();
      dispatch(add(updatedPlaylist));
    }
  };


const loadPlaylists = (id) => {
    return ({
        type: USER_PLAYLISTS,
        id
    })
}

export const load_Playlists = (id) => async dispatch => {
    const response = await fetch(`/api/users/${id}/playlists`)
    const playLists = await response.json()
    // console.log(playLists, 'am i returning playlists here?')
    dispatch(loadPlaylists(playLists))
    return playLists
}








const initialState = {playLists: {}}

const playListReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case USER_PLAYLISTS:
            newState = {...state}
            newState.playLists = {}
            // console.log('waht is ', action.id)
            if(action.id.user_playlists){
                action.id.user_playlists.forEach(playList => newState.playLists[playList.id] = playList)
            }
            return newState
        case ADD_PLAYLIST:
            newState = {...state}
            newState.playLists[action.playlist.id] = action.playlist
        default:
            return state;
    }
  }


export default playListReducer;
