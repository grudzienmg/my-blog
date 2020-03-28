import React, { Fragment } from 'react';
import { isEmpty } from 'lodash-es';

import SingleComment from './styles/singleComment';
import Form from '../form';
import Button from '../../atoms/Button';

const Comments = ({addComment, data, isFetching, removeComment}) => {
  const renderComments = () => {
    return data && data.map((comment, index) => {
      return (
        <SingleComment key={index}>
          <span>{comment.name} / {comment.email}</span>
          <p>{comment.body}</p>
          <Button name='Usuń komentarz' onClick={() => removeComment(comment.postId, comment.id)}/>
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
          <Form addComment={addComment} postId={!isEmpty(data) && data[0].postId} />
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