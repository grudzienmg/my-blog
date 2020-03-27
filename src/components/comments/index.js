import React, { Fragment } from 'react';

import SingleComment from './styles/singleComment';
import Form from '../form';

const Comments = ({addComment, data, isFetching}) => {
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

  const renderContent = () => {
    if (isFetching) {
      return (<div>Wczytuję dane...</div>);
    } else {
      return (
        <Fragment>
          {renderComments()}
          <Form addComment={addComment} postId={data[0].postId} />
        </Fragment>
      );
    }
  }

  return (
    <Fragment>
      {renderContent()}
    </Fragment>
  );
}

export default Comments;