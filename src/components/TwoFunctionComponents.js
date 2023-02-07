import React, { useState } from "react";

const TwoFunctionComponents = () => {
  const [carInfo, setCarInfo] = useState({
    year: 1995,
    type: "Mercedes",
    used: true
  });
  const onSwapCarHandler = () => {
    setCarInfo({
      year: 2018,
      type: "BMW",
      used: false
    });
  };
  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 2</h2>
      <h3>Car Spec is:</h3>
      <ul>
        <li>{carInfo.type}</li>
        <li>{carInfo.year}</li>
        <li>{carInfo.used ? "Used Car" : "Brand New!"}</li>
      </ul>
      <button onClick={onSwapCarHandler}>Swap Car!</button>
    </div>
  );
};

export default TwoFunctionComponents;
