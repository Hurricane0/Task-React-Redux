import { authAPI } from "../api/api";

const SIGN_OUT = "auth/SIGN_OUT";
const SIGN_ERROR = "auth/SIGN_ERROR";
const TOGGLE_IS_FETCHING = "auth/TOGGLE_IS_FETCHING";
const SET_USER = "auth/SET_USER";
const SET_PROFILE_DATA = "auth/SET_PROFILE_DATA";

const initialState = {
  user: null,
  errMessage: "",
  isFetching: false,
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
    case SIGN_ERROR:
      return {
        ...state,
        errMessage: action.payload.errMessage
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching
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
      }
    default:
      return state;
  }
};

export const signError = () => ({
  type: SIGN_ERROR,
  payload: {
    errMessage: "Email or password is incorrect"
  },
  error: true // https://github.com/redux-utilities/flux-standard-action
});

export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  payload: {
    isFetching
  }
});

export const signOut = () => ({
  type: SIGN_OUT
});

const setUser = id => ({
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
})
///////////////////////////////REDUX-THUNKS/////////////////////////////
export const authUser = (email, password, cb) => async dispatch => {
  dispatch(toggleIsFetching(true));
  const data = await authAPI.authUser(email, password);
  if (data.status === "ok") {
    dispatch(setUser(data.data.id));
    dispatch(toggleIsFetching(false));
    cb();
  } else {
    dispatch(signError());
    dispatch(toggleIsFetching(false));
  }
};

export const getProfile = id => async dispatch => {
  try {
    dispatch(toggleIsFetching(true));
    const response = await authAPI.getProfile(id);
    dispatch(setProfileData(response));
    dispatch(toggleIsFetching(false));
  } catch (error) {
    throw new Error(error);
  }
};

export default authReducer;
