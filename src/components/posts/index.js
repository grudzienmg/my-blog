import React, { Fragment, useEffect } from 'react';
import { isEmpty } from 'lodash-es';

import Post from './styles/post';
import Title from './styles/title';
import Button from '../../atoms/Button';
import Comments from '../comments';

const Posts = ({...props}) => {
  useEffect(() => {
    props.getPosts();
  }, []);

  const renderPosts = () => {
    return !isEmpty(props.posts) && props.posts.map((i, index) => {
      return (
        <Post key={index}>
          <Title>{i.title}</Title>
          <p>{i.body}</p>
          <Button name='Pokaż komentarze' onClick={() => props.getPostComments(i.id)}/>
          {i.comments && <Comments data={i.comments} />}
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