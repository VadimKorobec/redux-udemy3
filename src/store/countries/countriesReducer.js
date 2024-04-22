import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./countriesActions";

const initialState = {
  status: "idle",
  list: [],
  error: null,
};

export const countriesReducer = (state = initialState, { type, payload }) => {
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
        status: "reject",
        error: payload,
      };
    case SET_COUNTRIES:
      return {
        ...state,
        status: "received",
        list: payload,
      };
    default:
      return state;
  }
};
