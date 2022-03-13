const LOAD_SONG = "songs/LOAD_SONG";
const PAUSE_SONG = "songs/PAUSE_SONG";
const PLAY_SONG = "songs/PLAY_SONG";
const TOGGLE_IS_PLAYING = "songs/TOGGLE_IS_PLAYING";
const ADD_TO_QUEUE = "songs/ADD_TO_QUEUE";
const PLAY_MULTIPLE = "songs/PLAY_MULTIPLE";


const playMultiple = (songsArr) => {
  return {
    type: PLAY_MULTIPLE,
    songsArr,
  };
};

const load = (songObj) => ({
  type: LOAD_SONG,
  songObj,
});

const queue = (songObj) => ({
  type: ADD_TO_QUEUE,
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

export const addToQueue = (id) => async (dispatch) => {
  const response = await fetch(`/api/songs/${id}`);

  const { song } = await response.json();
  console.log("song in queue thunk", song);
  dispatch(queue(song));
};

export const playMultipleSongs =
  ({ id, type }) =>
  async (dispatch) => {
    const response = await fetch(`/api/${type}/${id}`);
    const mediaDict = await response.json();
    let mediaArr;
    if (type === "playlists") mediaArr = Object.values(mediaDict)[0].songs.dict;
    else if (type === "albums") mediaArr = mediaDict.songs.dict;
    else if (type === "users") mediaArr = mediaDict.songs;
    console.log(mediaArr);
    dispatch(playMultiple(mediaArr));
  };

const initialState = { playqueue: [], queue: [], newSong: null, isPlaying: false };
let newState;

export default function songsReducer(state = initialState, action) {
  switch (action.type) {
    case PLAY_SONG:
      newState = { ...state };
      newState.isPlaying = true;
      return newState;
    case TOGGLE_IS_PLAYING:
      newState = { ...state };
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
    case ADD_TO_QUEUE:
      newState = { ...state };
      newState.queue.push(action.songObj);
      console.log(newState.queue);
      return newState;
    case PLAY_MULTIPLE:
      newState = { ...state };
      newState.newSong = action.songsArr[0];
      newState.playqueue = action.songsArr.splice(1)
      // action.songsArr.splice(1).map((song) => newState.playqueue.push(song));
      return newState;
    default:
      return state;
  }
}
