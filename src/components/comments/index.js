import React, { Fragment } from 'react';
import { isEmpty } from 'lodash-es';
import PropTypes from 'prop-types';

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
  };

  return (
    <Fragment>
      {renderContent()}
    </Fragment>
  );
}

Comments.propTypes = {
  addComment: PropTypes.func,
  data: PropTypes.array,
  isFetching: PropTypes.bool,
  removeComment: PropTypes.func,
};

export default Comments;