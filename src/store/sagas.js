import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import Promise from 'lodash-es/_Promise';

import { getPostsSuccess, getPostsFailure } from './actions';
import { GET_POSTS } from './actionTypes';

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

function* postsWatcher() {
  yield takeLatest(GET_POSTS, PostsWorker);
};

export default [
  postsWatcher(),
];