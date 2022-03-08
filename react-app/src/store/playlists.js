
const ONE_PLAYLIST = 'user/ONE_PLAYLIST';
const USER_PLAYLISTS = 'user/USER_PLAYLISTS';
const ADD_PLAYLIST = 'user/ADD_PLAYLIST';


const onePlaylists = (playList) => {
    return ({
        type: ONE_PLAYLIST,
        playList
    })
}

export const one_Playlists = (userId, id) => async dispatch => {
    // console.log(userId, id)
    const response = await fetch(`/api/users/${userId}/playlists/${id}`)
    const playList = await response.json()
    console.log(playList, ' am i getting data back in the thunkk??')
    dispatch(onePlaylists(playList))
    return playList
}


const addPlaylist = (playlist) => {
    return ({
        type: ADD_PLAYLIST,
        playlist
    })
}

export const add_Playlist = (playlist) => async dispatch => {
    const response = await fetch(`/api/users/${playlist.userId}/playlists`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(playlist)
    })
        const data = await response.json()
        dispatch(addPlaylist(playlist))
        if (data) return data

}


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
        case ONE_PLAYLIST:
            newState = {...state}
            console.log(action.playList, ' action playlist')
            newState.playLists[action.playList.playlist.id] = action.playList
            return newState
        default:
            return state;
    }
  }


export default playListReducer;
