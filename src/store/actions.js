import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from './actionTypes';

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
