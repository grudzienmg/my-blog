import {
  GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE,
  GET_POST_COMMENTS, GET_POST_COMMENTS_SUCCESS, GET_POST_COMMENTS_FAILURE,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from './actionTypes';

const initialState = {
  areCommentsFetching: false,
  error: null,
  isFetching: false,
  postId: null,
  posts: [],
};

export default (state=initialState, action) => {
  const idx = state.posts.findIndex(i => i.id === state.postId);
  let posts = [...state.posts];

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
    case GET_POST_COMMENTS:
      return {
        ...state,
        areCommentsFetching: true,
        postId: action.postId,
      };
    case GET_POST_COMMENTS_SUCCESS:
      state.posts[idx].comments = action.payload;

      return {
        ...state,
        areCommentsFetching: false,
      };
    case GET_POST_COMMENTS_FAILURE:
      return {
        ...state,
        areCommentsFetching: false,
        error: action.error,
      };
    case ADD_COMMENT:
      posts[idx].comments = [...posts[idx].comments, action.payload];

      return {
        ...state,
        posts: posts
      };
    case REMOVE_COMMENT:
      const commentIdx = posts[idx].comments.findIndex(i => i.id === action.commentIdx);
      posts[idx].comments.splice(commentIdx, 1);

      return {
        ...state,
        posts: posts
      };
  default:
    return state;
  }
}
