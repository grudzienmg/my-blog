import React from 'react';

import SingleComment from './styles/singleComment';

const Comments = ({data}) => {
  const renderComments = () => {
    return data.map((comment, index) => {
      return (
        <SingleComment key={index}>
          <span>{comment.name} / {comment.email}</span>
          <p>{comment.body}</p>
        </SingleComment>
      );
    })
  };

  return (
    <div>
      {renderComments()}
    </div>
  );
}

export default Comments;