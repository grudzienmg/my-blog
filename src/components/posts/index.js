import React, { useEffect } from 'react';

const Posts = ({...props}) => {
  useEffect(() => {
    props.getPosts();
  }, []);

  return (<div>test123</div>);
}

export default Posts;