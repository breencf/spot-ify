// const LOAD_SONGS = "songs/LOAD_SONGS";

// const load = (songsObj) => ({
//   type: LOAD_SONGS,
//   songsObj,
// });



// // // export const loadSongs = () => async (dispatch) => {
// // //   const response = await fetch("/api/users/songs");
// // //   // console.log('thunk after fetch: ' + response.json())
// // //   const { song_array } = await response.json();
// // //   // console.log(song_array)
// // //   dispatch(load(Object.values(song_array)));
// // };



// const initialState = { songs: {}, currentSong: {} };
// let newState;

// export default function songsReducer(state = initialState, action) {
//   switch (action.type) {
//     case LOAD_SONGS:
//       newState = { ...state };
//       action.songsObj.forEach((song) => {
//         // console.log(song)
//         newState.songs[song.id] = song;
//       });
//       return newState;
//     // case ADD_TO_PLAYLIST:
//     //   newState = { ...state };
//     default:
//       return state;
//   }
// }
