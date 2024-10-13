import React, { useMemo, useState } from "react";

const HomePage3 = () => {
  const [count, setCount] = useState(0);

  const countNumber = useMemo(() => {
    let myNumber = 5;
    // add three more zero when needed
    for (let index = 0; index < 900000; index++) {
      myNumber += 1;
    }
    return myNumber;
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 2)}>Increment</button>
      <h1>{countNumber}</h1>
    </div>
  );
};

export default HomePage3;
