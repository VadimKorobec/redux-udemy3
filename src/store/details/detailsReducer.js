import { SET_ERROR, SET_LOADING, SET_COUNTRY } from "./detailsActions";

const initialState = {
  status: "idle",
  country: [],
  error: null,
};

export const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        status: "rejected",
        error: payload,
      };
    case SET_COUNTRY:
      return {
        status: "received",
        country: payload,
        error: null,
      };
    default:
      return state;
  }
};
