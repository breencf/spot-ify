const LOAD_SONG = "songs/LOAD_SONG";
const PAUSE_SONG = "songs/PAUSE_SONG";
const PLAY_SONG = "songs/PLAY_SONG";
const TOGGLE_IS_PLAYING = "songs/TOGGLE_IS_PLAYING";

const load = (songObj) => ({
  type: LOAD_SONG,
  songObj,
});

export const toggle_play = () => {
  return {
    type: TOGGLE_IS_PLAYING,
  };
};

export const pause = () => {
  return {
    type: PAUSE_SONG,
  };
};

export const play = () => {
  return {
    type: PLAY_SONG,
  };
};

export const loadSong = (id) => async (dispatch) => {
  const response = await fetch(`/api/songs/${id}`);

  const { song } = await response.json();
  dispatch(load(song));
};

const initialState = { queue: [], newSong: null, isPlaying: false };
let newState;

export default function songsReducer(state = initialState, action) {
  switch (action.type) {
    case PLAY_SONG:
      newState = { ...state };
      newState.isPlaying = true;
      return newState;
    case TOGGLE_IS_PLAYING:
      newState = { ...state };
      console.log("toggled to", !state.isPlaying);
      newState.isPlaying = !state.isPlaying;
      return newState;
    case PAUSE_SONG:
      newState = { ...state };
      newState.isPlaying = false;
      return newState;
    case LOAD_SONG:
      newState = { ...state };
      newState.newSong = action.songObj;
      return newState;
    // case ADD_TO_PLAYLIST:
    //   newState = { ...state };
    default:
      return state;
  }
}
