import React, { memo } from "react";

const Message2 = ({ count, onHandleCount }) => {
  console.log("rendering message");
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={onHandleCount}>Increment</button>
    </div>
  );
};

export default memo(Message2);
