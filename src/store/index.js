import {
  getPosts, getPostsSuccess, getPostsFailure,
  getPostComments, getPostCommentsSuccess, getPostCommentsFailure,
  addComment,
} from './actions';
import postsWatcher from './sagas';
import postsReducer from './reducers';

export {
  getPosts, getPostsSuccess, getPostsFailure,
  getPostComments, getPostCommentsSuccess, getPostCommentsFailure,
  addComment,
  postsWatcher,
  postsReducer
};