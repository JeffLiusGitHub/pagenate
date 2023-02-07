import React from "react";
import useCounter from "./Helper/useCounter";
/* 
For this test the below counter should increment once per second.
Hitting the "Faster" or "Slower" buttons should double or half
the rate of increase respectively. Build out this component to 
achieve the required logic.

*/

function Three() {
  const { count, setTimeDuration } = useCounter();

  const handleFast = () => {
    setTimeDuration((prevTimeDuration) => prevTimeDuration / 2);
  };
  const handleSlow = () => {
    setTimeDuration((prevTimeDuration) => prevTimeDuration * 2);
  };

  return (
    <div>
      <h2>Challenge 3</h2>
      <button onClick={handleFast}>faster</button>
      <p>{count}</p>
      <button onClick={handleSlow}>slower</button>
    </div>
  );
}
export default Three;
