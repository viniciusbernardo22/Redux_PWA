import { createSlice } from '@reduxjs/toolkit';
import { requestDogAPI, responseDogAPI } from '../models/dogApi';

type initialStateProps = {
  loading: boolean;
  data: unknown;
  error: unknown;
};
const getFetchData = (body: unknown) => {
  return fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};

const slice = createSlice({
  name: 'login',
  initialState: <initialStateProps>{
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchStarted(state: initialStateProps) {
      state.loading = true;
    },
    fetchSuccess(state: initialStateProps, action) {
      (state.loading = false),
        (state.data = action.payload),
        (state.error = null);
    },
    fetchError(state: initialStateProps, action) {
      (state.loading = false),
        (state.data = null),
        (state.error = action.payload);
    },
  },
});

const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export const fetchToken =
  (userInfo: requestDogAPI) => async (dispatch: any) => {
    try {
      dispatch(fetchStarted());

      const response = await getFetchData(userInfo);
      const data: responseDogAPI = await response.json();

      return dispatch(fetchSuccess(data));
    } catch (err: any) {
      dispatch(fetchError(err.message));
    }
  };

export default slice.reducer;
