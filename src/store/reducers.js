import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from './actionTypes';

const initialState = {
  isFetching: false,
  posts: [],
  error: null,
};

export default (state=initialState, action) => {
  switch (action.type) {
  case GET_POSTS:
    return {
      ...state,
      isFetching: true
    };
  case GET_POSTS_SUCCESS:
    return {
      ...state,
      isFetching: false,
      posts: action.payload,
    };
  case GET_POSTS_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.error,
    };
  default:
    return state;
  }
}
