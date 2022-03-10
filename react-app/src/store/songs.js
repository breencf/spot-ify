const PLAY_SONG = "songs/PLAY_SONG";
const ADD_TO_QUEUE = "songs/ADD_TO_QUEUE"

const play = (songObj) => ({
    type: PLAY_SONG,
    songObj,
});



export const playSong = (id) => async (dispatch) => {
    const response = await fetch(`/api/songs/${id}`);

    const {song} = await response.json();
    dispatch(play(song));
};



const initialState = { queue: [], currSong: null};
let newState;

export default function songsReducer(state = initialState, action) {
    switch (action.type) {
        case PLAY_SONG:
            newState = { ...state };
            newState.currSong = action.songObj;
            return newState;
        // case ADD_TO_PLAYLIST:
        //   newState = { ...state };
        default:
            return state;
    }
}
