const ONE_PLAYLIST = "user/ONE_PLAYLIST";
const USER_PLAYLISTS = "user/USER_PLAYLISTS";
const ADD_PLAYLIST = "user/ADD_PLAYLIST";
const DELETE_PLAYLIST = "user/DELETE_PLAYLIST";
const ADD_TO_PLAYLIST = "songs/ADD_TO_PLAYLIST";

const deletePlaylist = (playlistId) => {
  return {
    type: DELETE_PLAYLIST,
    playlistId,
  };
};

export const delete_Playlist = (userId, playlistId) => async (dispatch) => {
  const response = await fetch(
    `/api/users/${userId}/playlists/${playlistId}/delete`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        playlistId,
      }),
    }
  );
  const success = await response.json();
  dispatch(deletePlaylist(playlistId));
  return success;
};

const onePlaylists = (playList) => {
  return {
    type: ONE_PLAYLIST,
    playList,
  };
};

export const one_Playlists = (userId, id) => async (dispatch) => {
  // console.log(userId, id)
  const response = await fetch(`/api/users/${userId}/playlists/${id}`);
  const playList = await response.json();
//   console.log(playList, " am i getting data back in the thunkk??");
  dispatch(onePlaylists(playList));
  return playList;
};

const addPlaylist = (playlist) => {
  return {
    type: ADD_PLAYLIST,
    playlist,
  };
};

const add = (updatedPlaylist) => ({
  type: ADD_TO_PLAYLIST,
  updatedPlaylist,
});

export const add_Playlist = (playlist) => async (dispatch) => {
  const response = await fetch(`/api/users/${playlist.userId}/playlists`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(playlist),
  });
  const data = await response.json();
  console.log(data, 'data being returned ? ')
  dispatch(addPlaylist(data));
  if (data) return data;
};

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
  return {
    type: USER_PLAYLISTS,
    id,
  };
};

export const load_Playlists = (id) => async (dispatch) => {
  const response = await fetch(`/api/users/${id}/playlists`);
  const playLists = await response.json();
  // console.log(playLists, 'am i returning playlists here?')
  dispatch(loadPlaylists(playLists));
  return playLists;
};

const initialState = { playLists: {} };

const playListReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case USER_PLAYLISTS:
      newState = { ...state };
      newState.playLists = {};
      // console.log('waht is ', action.id)
      if (action.id.user_playlists) {
        action.id.user_playlists.forEach(
          (playList) => (newState.playLists[playList.id] = playList)
        );
      }
      return newState;
    case ADD_PLAYLIST:
      newState = { ...state };
    //   console.log(action.playlist.playlist.id, ' what is the playlist')
      newState.playLists[action.playlist.playlist.id] = action.playlist.playlist;
      return newState;
    case ONE_PLAYLIST:
      newState = { ...state };
      // console.log(action.playList, ' action playlist')
      newState.playLists[action.playList.playlist.id] = action.playList;
      return newState;
    case DELETE_PLAYLIST:
      newState = { ...state };
      delete newState.playLists[action.playlistId];
      return newState;
    default:
      return state;
  }
};

export default playListReducer;
