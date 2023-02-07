import React, { useState } from "react";

const OneFunctionComponents = () => {
  const [count, setCount] = useState(0);
  const onClickHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 1</h2>
      <p>Count is: {count}</p>
      <button onClick={onClickHandler}>Increase Count!</button>
    </div>
  );
};

export default OneFunctionComponents;
