export const SET_LOADING = "details/SET_LOADING";
export const SET_COUNTRY = "details/SET_COUNTRY";
export const SET_ERROR = "details/SET_ERROR";

export const setLoading = () => ({
  type: SET_LOADING,
});

export const addDetails = (country) => ({
  type: SET_COUNTRY,
  payload: country,
});

export const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});
