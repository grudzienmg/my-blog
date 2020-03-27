import { connect } from 'react-redux';
import Posts from '../components/posts';
import { getPosts, getPostComments, addComment } from '../store';

const mapStateToProps = state => ({
  isFetching: state.postsReducer.isFetching,
  posts: state.postsReducer.posts,
  areCommentsFetching: state.postsReducer.areCommentsFetching,
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  getPostComments: (postId) => dispatch(getPostComments(postId)),
  addComment: (postId, payload) => dispatch(addComment(postId, payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
