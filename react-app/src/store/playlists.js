const USER_PLAYLISTS = "user/USER_PLAYLISTS";
const ADD_PLAYLIST = "user/ADD_PLAYLIST";
const DELETE_PLAYLIST = "user/DELETE_PLAYLIST";

const ADD_TO_PLAYLIST = "songs/ADD_TO_PLAYLIST";
const DELETE_FROM_PLAYLIST = "songs/DELETE_FROM_PLAYLIST";
const EDIT_PLAYLIST = "user/EDIT_PLAYLIST";

const GET_ONE_PLAYLIST = "playlists/GET_ONE_PLAYLIST";

const get_one = (playlistObj) => {
  return {
    type: GET_ONE_PLAYLIST,
    playlistObj,
  };
};

export const getOnePlaylist = (id) => async (dispatch) => {
  const response = await fetch(`/api/playlists/${id}`);
  const { playlist } = await response.json();
  dispatch(get_one(playlist));
};

const editPlaylist = (playlist) => {
  return {
    type: EDIT_PLAYLIST,
    playlist,
  };
};

export const edit_Playlist = (playlist) => async (dispatch) => {
  const response = await fetch(`/api/playlists/${playlist.playlistId}/edit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(playlist),
  });
  const data = await response.json();
  dispatch(editPlaylist(data));
  return data;
};

const deletePlaylist = (playlistId) => {
  return {
    type: DELETE_PLAYLIST,
    playlistId,
  };
};

export const delete_Playlist =
  ({ userId, playlistId }) =>
  async (dispatch) => {
    const response = await fetch(`/api/playlists/${playlistId}/delete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        playlistId,
      }),
    });
    const { deleted } = await response.json();

    dispatch(deletePlaylist(deleted));
    return deleted;
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
  if (response.ok) {
    const data = await response.json();
    dispatch(addPlaylist(data));
    return data;
  } else {
    const data = await response.json();
    return data;
  }
};

export const addToPlaylist =
  ({ song, user_id, playlist_id }) =>
  async (dispatch) => {
    const response = await fetch(
      `/api/playlists/${playlist_id}/${song.id}/add`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          song_id: song.id,
          user_id,
          playlist_id,
        }),
      }
    );
    if (response.ok) {
      const updatedPlaylist = await response.json();
      dispatch(add(updatedPlaylist));
    }
  };

const deleteOne = (updatedPlaylist) => {
  return {
    type: DELETE_FROM_PLAYLIST,
    updatedPlaylist,
  };
};

export const delete_from_playlist =
  ({ playlist_id, song_id }) =>
  async (dispatch) => {
    const response = await fetch(
      `/api/playlists/${playlist_id}/${song_id}/delete`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          song_id,
          playlist_id,
        }),
      }
    );
    const updatedPlaylist = await response.json();
    dispatch(deleteOne(updatedPlaylist));
    return updatedPlaylist;
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
  dispatch(loadPlaylists(playLists));
  return playLists;
};

const initialState = { playLists: {}, currentPlaylist: {} };

const playListReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case USER_PLAYLISTS:
      newState = { ...state };
      newState.playLists = {};
      if (action.id.user_playlists) {
        action.id.user_playlists.forEach(
          (playList) => (newState.playLists[playList.id] = playList)
        );
      }
      return newState;
    case ADD_PLAYLIST:
      newState = { ...state };
      newState.playLists[action.playlist.playlist.id] =
        action.playlist.playlist;
      return newState;
    case EDIT_PLAYLIST:
      newState = { ...state };
      newState.playLists[action.playlist.playlist.id] = action.playlist;
      return newState;
    case DELETE_PLAYLIST:
      newState = { ...state };
      delete newState.playLists[action.playlistId];
      return newState;
    case ADD_TO_PLAYLIST:
      newState = { ...state };
      newState.playLists[action.updatedPlaylist.id] = action.updatedPlaylist;
      return newState;
    case DELETE_FROM_PLAYLIST:
      newState = { ...state };
      newState.playLists[action.updatedPlaylist.id] = action.updatedPlaylist;

      return newState;
    case GET_ONE_PLAYLIST:
      newState = { ...state };
      newState.currentPlaylist = action.playlistObj;
      return newState;
    default:
      return state;
  }
};

export default playListReducer;
