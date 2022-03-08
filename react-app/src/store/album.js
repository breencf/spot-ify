const LOAD_ALBUM = 'album/LOAD_ALBUM';

const loadAlbum = (album) => {
    return {
        type: LOAD_ALBUM,
        album
    }
}

export const load_album = (albumId) => async (dispatch) => {
    const response = await fetch(`/api/albums/${albumId}`);

    const album = await response.json();
    console.log('album:     ' + album)
    dispatch(loadAlbum(album))

}


let initialState = { album: {} };

const albumReducer = (state = initialState, action) => {
    let newState;

    switch(action.type) {
        case LOAD_ALBUM:
            newState = {...state};
            newState.album = action.album;
            return newState;
        default:
            return state;
    }
}

export default albumReducer;
