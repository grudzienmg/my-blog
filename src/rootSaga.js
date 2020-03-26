import { all } from 'redux-saga/effects';

import { postsWatcher } from './store';

export default function* rootSaga() {
  yield all([
    ...postsWatcher,
  ]);
}