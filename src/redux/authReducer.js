import { authAPI } from "../api/api";

const SIGN_OUT = "auth/SIGN_OUT";
const SET_ERROR = "auth/SET_ERROR";
const TOGGLE_IS_FETCHING_LOGIN = "auth/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FETCHING_PROFILE = "auth/TOGGLE_IS_FETCHING_PROFILE";
const SET_USER = "auth/SET_USER";
const SET_PROFILE_DATA = "auth/SET_PROFILE_DATA";

const initialState = {
  user: null,
  errMessage: "",
  isFetchingLogin: false,
  isFetchingProfile: true,
  userId: null,
  profileData: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        userId: null,
        profileData: null
      };
    case SET_ERROR:
      return {
        ...state,
        errMessage: action.payload.errMessage
      };
    case TOGGLE_IS_FETCHING_LOGIN:
      return {
        ...state,
        isFetchingLogin: action.payload.isFetching
      };
    case TOGGLE_IS_FETCHING_PROFILE:
      return {
        ...state,
        isFetchingProfile: action.payload.isFetching
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload.name,
        userId: action.payload.id
      };
    case SET_PROFILE_DATA:
      return {
        ...state,
        profileData: action.payload.data
      };
    default:
      return state;
  }
};

export const setError = errMessage => ({
  type: SET_ERROR,
  payload: {
    errMessage: errMessage
  },
  error: true // https://github.com/redux-utilities/flux-standard-action
});

export const toggleIsFetchingLogin = isFetching => ({
  type: TOGGLE_IS_FETCHING_LOGIN,
  payload: {
    isFetching
  }
});
export const toggleIsFetchingProfile = isFetching => ({
  type: TOGGLE_IS_FETCHING_PROFILE,
  payload: {
    isFetching
  }
});

export const signOut = () => ({
  type: SIGN_OUT
});

export const setUser = id => ({
  type: SET_USER,
  payload: {
    name: "admin",
    id
  }
});

const setProfileData = data => ({
  type: SET_PROFILE_DATA,
  payload: {
    data
  }
});
//Saving user id to LocalStorage
const saveUserLocal = userId => {
  try {
    const serializedState = JSON.stringify(userId);
    localStorage.setItem("userId", serializedState);
  } catch (error) {
    throw new Error(error);
  }
};
///////////////////////////////REDUX-THUNKS/////////////////////////////
export const authUser = (email, password, cb) => async dispatch => {
  dispatch(toggleIsFetchingLogin(true));
  const data = await authAPI.authUser(email, password);
  if (data.status === "ok") {
    dispatch(setUser(data.data.id));
    saveUserLocal(data.data.id);
    dispatch(setError(""));
    dispatch(toggleIsFetchingLogin(false));
    dispatch(toggleIsFetchingProfile(true));
    cb(); //Redirect to previous page
  } else {
    dispatch(setError("Email or password is incorrect"));
    dispatch(toggleIsFetchingLogin(false));
  }
};

export const getProfile = id => async dispatch => {
  dispatch(toggleIsFetchingProfile(true));
  try {
    const response = await authAPI.getProfile(id);
    if (response.satus === "err") {
      dispatch(setError(response.message));
      dispatch(toggleIsFetchingProfile(false));
    } else {
      dispatch(setProfileData(response));
      dispatch(toggleIsFetchingProfile(false));
    }
  } catch (error) {
    throw new Error(error);
  }
};

export default authReducer;
