import React from 'react';
import { useSelector } from 'react-redux';

const BlogScreenWithRedux = () => {
    const blog = useSelector(state=>state.blog);
  return (
    <div>
      {blog[0].username}
    </div>
  );
}

export default BlogScreenWithRedux;
