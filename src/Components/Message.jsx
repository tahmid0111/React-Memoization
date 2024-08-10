import { memo } from "react";

const Message = () => {
  console.log("message rendering");
  return (
    <div>
      <h2>This is message page</h2>
    </div>
  );
};

export default memo(Message);
