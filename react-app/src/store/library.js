

const LOAD_LIBRARY = 'user/LOAD_LIBRARY';
const ADD_LIBRARY = 'user/ADD_LIBRARY';
const DELETE_LIBRARY = 'user/DELETE_LIBRARY';


const loadLibrary = (userId) => {
    return {
        type: LOAD_LIBRARY,
        userId
    }
}

export const load_Library = ( userId ) => async dispatch => {
    const response = await fetch(`/api/users/${userId}/library`)
    const data = await response.json()
    console.log(data, 'any data coming back? ')
}






  const libraryReducer = (state = {}, action) => {
    let newState
    switch (action.type) {
      default:
        return state;
    }
  };


  export default libraryReducer;
