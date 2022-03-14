const LOAD_FOLLOWERS = "user/LOAD_FOLLOWERS";
const LOAD_FOLLOWING = "user/LOAD_FOLLOWING";
const ADD_FOLLOWERS = "user/ADD_FOLLOWERS";
const REMOVE_FOLLOWERS = "user/REMOVE_FOLLOWERS";

const removeFollower = (unfollowerObj) => {
  return {
    type: REMOVE_FOLLOWERS,
    unfollowerObj
  };
};

export const remove_Follower = (userId, otherUserId) => async (dispatch) => {
  const response = await fetch(`/api/users/followers/delete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, otherUserId }),
  });
  const data = await response.json();
  console.log(data)
  dispatch(removeFollower(data));
};

const addFollowers = (follower) => {
  return {
    type: ADD_FOLLOWERS,
    follower,
  };
};

export const add_Followers = (userId, otherUserId) => async (dispatch) => {
  const response = await fetch(`/api/users/followers/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, otherUserId }),
  });
  const follower = await response.json();
  console.log(follower)
  dispatch(addFollowers(follower));
};

const loadFollowers = (data) => {
  return {
    type: LOAD_FOLLOWERS,
    data,
  };
};

export const load_Followers = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/followers`);
  const data = await response.json();
  dispatch(loadFollowers(data));
};

const followsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case LOAD_FOLLOWERS:
      newState = { ...state };
      newState = action.data;
      console.log(newState);
      return newState;
    case REMOVE_FOLLOWERS:
      newState = { ...state };
      newState.follows = newState.follows.filter((ele) => ele === action.unfollowerObj);
      console.log(newState);
      return newState;
    case ADD_FOLLOWERS:
      newState = { ...state };
      if (!newState.follows.includes(action.follower)) newState.follows.push(action.follower);
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default followsReducer;
