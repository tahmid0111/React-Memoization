import { memo } from "react";

const Message = (props) => {
    const {count} = props;
  console.log("message rendering");
  return (
    <div>
        <h2>{count}</h2>
      <h2>This is message page</h2>
    </div>
  );
};

export default memo(Message);
