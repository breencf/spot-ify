const LOAD_ARTIST = 'artist/LOAD_ARTIST';

const loadArtist = (artist) => {
    return {
        type: LOAD_ARTIST,
        artist
    }
}

export const load_artist = (artistId) => async (dispatch) => {
    const response = await fetch(`/api/artists/${artistId}`);

    const artist = await response.json();
    console.log('artist:     ' + artist)
    dispatch(loadArtist(artist))
    
}


let initialState = { artist: {} };

const artistReducer = (state = initialState, action) => {
    let newState;

    switch(action.type) {
        case LOAD_ARTIST:
            newState = {...state};
            newState.artist = action.artist;
            return newState;
        default:
            return state;
    }
}

export default artistReducer;
