export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const BOOKMARK = "BOOKMARK";

export const bookmark = (card) => {
  return {
    type: BOOKMARK,
    payload: card,
  };
};

export const updateData = (cards) => {
  return {
    type: UPDATE_DATA,
    payload:cards,
  };
};

export const requestApiData = () => ({ 
  type: REQUEST_API_DATA 
});

export const receiveApiData = (data) => ({
  type: RECEIVE_API_DATA,
  payload: data,
});
