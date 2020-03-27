import React, { Fragment, useEffect, useState } from 'react';
import { isEmpty } from 'lodash-es';

import Post from './styles/post';
import Title from './styles/title';
import Button from '../../atoms/Button';
import Comments from '../comments';

const Posts = ({...props}) => {
  useEffect(() => {
    props.getPosts();
  }, []);

  const [expandedComments] = useState(new Map());

  const handleClick = (postId) => {
    props.getPostComments(postId);

    const isExpanded = !!expandedComments.get(postId);

    expandedComments.set(postId, !isExpanded);
  };

  const renderPosts = () => {
    return !isEmpty(props.posts) && props.posts.map((i, index) => {
      const isExpanded = expandedComments.get(i.id);

      return (
        <Post key={index}>
          <Title>{i.title}</Title>
          <p>{i.body}</p>
          <Button name={isExpanded ? 'Ukryj komentarze' : 'Pokaż komentarze'} onClick={() => handleClick(i.id)}/>
          {isExpanded && <Comments
            data={i.comments}
            isFetching={props.areCommentsFetching}
            addComment={props.addComment}
            />
          }
        </Post>
      )
    })
  }

  return (
    <Fragment>
      {renderPosts()}
    </Fragment>
  );
}

export default Posts;