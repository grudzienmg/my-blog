import { getPosts, getPostsSuccess, getPostsFailure } from './actions';
import postsWatcher from './sagas';
import postsReducer from './reducers';

export {
  getPosts, getPostsSuccess, getPostsFailure,
  postsWatcher,
  postsReducer
};