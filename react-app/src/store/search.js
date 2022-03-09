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
  console.log('what is the ', value)
  const data = await response.json();
  console.log(data, " what is the search data?");
  dispatch(search(data));
};

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_VALUE:
      console.log("blank");
    default:
      return state;
  }
};

export default searchReducer;
