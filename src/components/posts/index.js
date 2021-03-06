import React, { useEffect, useRef, useState, memo } from 'react';
import { isEmpty } from 'lodash-es';
import PropTypes from 'prop-types';

import PostsContainer from './styles/postsContainer';
import Post from './styles/post';
import Title from './styles/title';
import Button from '../../atoms/Button';
import Comments from '../comments';
import Pagination from '../../atoms/Pagination';

const Posts = ({...props}) => {
  useEffect(() => {
    props.getPosts();
  }, []);

  const [expandedComments, setExpandedComments] = useState(new Map());
  const [selectedPage, setSelectedPage] = useState(1);
  const pageSize = 10;

  const containerRef = useRef();

  const handleClick = (postId) => {
    const isExpanded = !!expandedComments.get(postId);

    if (!isExpanded) {
      props.getPostComments(postId);
    }

    setExpandedComments(new Map(expandedComments.set(postId, !isExpanded)));
  };

  const renderPosts = () => {
    const start = (selectedPage - 1) * pageSize;
    const end = !start ? pageSize : selectedPage * pageSize;

    return !isEmpty(props.posts) && props.posts.slice(start, end).map((i, index) => {
      const isExpanded = expandedComments.get(i.id);

      return (
        <Post key={index}>
          <Title>{i.title}</Title>
          <p>{i.body}</p>
          <Button name={isExpanded ? 'Ukryj komentarze' : 'Pokaż komentarze'} onClick={() => handleClick(i.id)}/>
          {isExpanded && <Comments
            data={i.comments}
            isFetching={i.areCommentsFetching}
            addComment={props.addComment}
            removeComment={props.removeComment}
            />
          }
        </Post>
      )
    })
  };

  const handlePageChange = (selectedPage) => {
    setSelectedPage(selectedPage);

    containerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PostsContainer ref={containerRef}>
      {renderPosts()}
      {!isEmpty(props.posts) && <Pagination
        totalRecords={props.posts.length}
        pageSize={pageSize}
        onChange={handlePageChange}
      />}
    </PostsContainer>
  );
}

Posts.propTypes = {
  addComment: PropTypes.func,
  getPostComments: PropTypes.func,
  getPosts: PropTypes.func,
  posts: PropTypes.array,
  removeComment: PropTypes.func,
};

export default memo(Posts);