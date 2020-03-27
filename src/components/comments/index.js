import React, { Fragment } from 'react';

import SingleComment from './styles/singleComment';

const Comments = ({data, isFetching}) => {
  const renderComments = () => {
    return data && data.map((comment, index) => {
      return (
        <SingleComment key={index}>
          <span>{comment.name} / {comment.email}</span>
          <p>{comment.body}</p>
        </SingleComment>
      );
    })
  };

  return (
    <Fragment>
      {isFetching ? <div>Wczytuję dane...</div> : renderComments()}
    </Fragment>
  );
}

export default Comments;