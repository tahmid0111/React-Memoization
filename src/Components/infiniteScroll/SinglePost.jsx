import React from "react";

const SinglePost = (props) => {
  const { id, title } = props.post;
  return (
    <div>
        <h1>{id}</h1>
      <h3>{title}</h3>
    </div>
  );
};

export default SinglePost;
