import { checkCredentials } from "../helpers/credentialsChecker";

const SIGN_IN = "auth/SIGN_IN";
const SIGN_OUT = "auth/SIGN_OUT";
const SIGN_ERROR = "auth/SIGN_ERROR";

const initialState = {
  user: null,
  errMessage: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload.name
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null
      };
    case SIGN_ERROR:
      return {
        ...state,
        errMessage: action.payload.errMessage
      };
    default:
      return state;
  }
};

export const signIn = (params, cb) => dispatch => {
  if (checkCredentials(params)) {
    dispatch({
      type: SIGN_IN,
      payload: {
        name: params.username
      }
    });
    cb();
  } else {
    dispatch({
      type: SIGN_ERROR,
      payload: {
        errMessage: "Email or password is incorrect"
      },
      error: true // https://github.com/redux-utilities/flux-standard-action
    });
  }
};
export const signOut = () => ({
  type: SIGN_OUT
});

export default authReducer;
