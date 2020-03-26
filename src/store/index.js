import {
  getPosts, getPostsSuccess, getPostsFailure,
  getPostComments, getPostCommentsSuccess, getPostCommentsFailure
} from './actions';
import postsWatcher from './sagas';
import postsReducer from './reducers';

export {
  getPosts, getPostsSuccess, getPostsFailure,
  getPostComments, getPostCommentsSuccess, getPostCommentsFailure,
  postsWatcher,
  postsReducer
};