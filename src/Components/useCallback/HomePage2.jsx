import React, { useCallback, useState } from "react";
import Message2 from "./Message2";

const HomePage2 = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCount = useCallback(() => {
    setCount(count + 1);
    console.log("rendering Home Page");
  }, [count]);
  return (
    <div>
      <p>{count2}</p>
      <button onClick={() => setCount2(count2 + 5)}>Increment</button>
      
      <Message2 count={count} onHandleCount={handleCount} />
    </div>
  );
};

export default HomePage2;
