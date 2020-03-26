import React, { Fragment, useEffect } from 'react';
import { isEmpty } from 'lodash-es';

import Post from './styles/post';
import Title from './styles/title';
import Button from '../../atoms/Button';

const Posts = ({getPosts, posts}) => {
  useEffect(() => {
    getPosts();
  }, []);

  const renderPosts = () => {
    return !isEmpty(posts) && posts.map((i, index) => {
      return (
        <Post key={index}>
          <Title>{i.title}</Title>
          <p>{i.body}</p>
          <Button name='Pokaż komentarze' />
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