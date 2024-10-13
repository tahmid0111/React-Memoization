import React, { useState, useTransition } from "react";

const HomePage4 = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleInput = (e) => {
    setText(e.target.value);
    startTransition(() => {
      let m = [];
      for (let i = 0; i < 20000; i++) {
        m.push(e.target.value);
      }
      setList(m);
    });
  };
  return (
    <div>
      <input type="text" value={text} onChange={handleInput} />
      {isPending ? (
        <h1>Loading...</h1>
      ) : (
        list.map((item, index) => <p key={index}>{item}</p>)
      )}
    </div>
  );
};

export default HomePage4;
