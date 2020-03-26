import { connect } from 'react-redux';
import Posts from '../components/posts';
import { getPosts } from '../store';

const mapStateToProps = state => ({
  isFetching: state.postsReducer.isFetching,
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
