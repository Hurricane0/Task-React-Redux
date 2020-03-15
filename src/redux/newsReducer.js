import { newsAPI } from "../api/api";

const GET_NEWS = "news/GET_NEWS";
const TOGGLE_IS_FETCHING_NEWS = "TOGGLE_IS_FETCHING_NEWS";

const initialState = {
  newsData: null,
  isFetchingNews: true
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        newsData: action.payload.data
      };
    case TOGGLE_IS_FETCHING_NEWS:
      return {
        ...state,
        isFetchingNews: action.payload.isFetching
      };
    default:
      return state;
  }
};

const toggleIsFetchingNews = isFetching => ({
  type: TOGGLE_IS_FETCHING_NEWS,
  payload: {
    isFetching
  }
});

const setNewsData = data => ({
  type: GET_NEWS,
  payload: {
    data
  }
});

export const getNews = () => async dispatch => {
  try {
    dispatch(toggleIsFetchingNews(true));
    const response = await newsAPI.getNews();
    dispatch(setNewsData(response.data.data));
    dispatch(toggleIsFetchingNews(false));
  } catch (error) {
    throw new Error(error);
  }
};

export default newsReducer;
