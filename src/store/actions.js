import {
  GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE,
  GET_POST_COMMENTS, GET_POST_COMMENTS_SUCCESS, GET_POST_COMMENTS_FAILURE,
  ADD_COMMENT,
  REMOVE_COMMENT
} from './actionTypes';

export const getPosts = () => ({
  type: GET_POSTS
});

export const getPostsSuccess = payload => ({
  type: GET_POSTS_SUCCESS,
  payload
});

export const getPostsFailure = error => ({
  type: GET_POSTS_FAILURE,
  error
});

export const getPostComments = postId => ({
  type: GET_POST_COMMENTS,
  postId,
});

export const getPostCommentsSuccess = payload => ({
  type: GET_POST_COMMENTS_SUCCESS,
  payload,
});

export const getPostCommentsFailure = error => ({
  type: GET_POST_COMMENTS_FAILURE,
  error,
});

export const addComment = (postId, payload) => ({
  type: ADD_COMMENT,
  postId,
  payload,
});

export const removeComment = (postId, commentId) => ({
  type: REMOVE_COMMENT,
  postId,
  commentId,
});
