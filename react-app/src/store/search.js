const SEARCH_VALUE = "user/SEARCH";

const search = (value) => {
  return {
    type: SEARCH_VALUE,
    value,
  };
};

export const searchVal = (value) => async (dispatch) => {
    const response = await fetch("/api/users/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({value}),
    });
    const data = await response.json();
    // console.log(data, " what is the search data?");
    dispatch(search(data));
    return data
  };

  const searchReducer = (state = {}, action) => {
    let newState
    switch (action.type) {
      case SEARCH_VALUE:
        newState = {...state}
        newState = action.value
        // console.log(newState)
        return newState
      default:
        return state;
    }
  };

export default searchReducer;
