import { useState } from "react";
import Message from "./Message";

export default function HomePage() {
  const [count, setCount] = useState(0);
  

  const increaseFunc = () => {
    setCount(count + 1);
    console.log("increasing")
  };
  const decreaseFunc = () => {
    setCount(count - 1);
    console.log("decreasing")
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseFunc}>Increase</button>
      <button onClick={decreaseFunc}>Increase</button>
      <Message count={count} />
    </div>
  );
}
