import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import Promise from 'lodash-es/_Promise';

import {
  getPostsSuccess, getPostsFailure,
  getPostCommentsSuccess, getPostCommentsFailure
} from './actions';
import { GET_POSTS, GET_POST_COMMENTS } from './actionTypes';

const getPosts = () => {
  const url = `https://jsonplaceholder.typicode.com/posts`;

  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function* PostsWorker() {
  try {
    const response = yield call(getPosts);
    yield put(getPostsSuccess(response.data));
  } catch (error) {
    yield put(getPostsFailure(error));
  }
}

const getPostComments = (postId) => {
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;

  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function* PostCommentsWorker(action) {
  try {
    const response = yield call(getPostComments, action.postId);
    yield put(getPostCommentsSuccess(response.data));
  } catch (error) {
    yield put(getPostCommentsFailure(error));
  }
}

function* postsWatcher() {
  yield takeLatest(GET_POSTS, PostsWorker);
  yield takeLatest(GET_POST_COMMENTS, PostCommentsWorker);
};

export default [
  postsWatcher(),
];