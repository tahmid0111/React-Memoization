import React, { useMemo, useState } from "react";

const HomePage3 = () => {
  const [count, setCount] = useState(0);

  const countNumber = useMemo(() => {
    let myNumber = 5;
    for (let index = 0; index < 9000000; index++) {
      myNumber += 1;
    }
    return myNumber;
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 2)}>Increment</button>
      {/* {countNumber} */}
      <h1>{countNumber}</h1>
    </div>
  );
};

export default HomePage3;
