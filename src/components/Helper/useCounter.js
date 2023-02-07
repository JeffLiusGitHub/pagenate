import { useEffect, useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const [timeDuration, setTimeDuration] = useState(1000);
  useEffect(() => {
    const handler = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, timeDuration);
    return () => {
      clearInterval(handler);
    };
  }, [timeDuration]);
  return { count, setTimeDuration };
};

export default useCounter;
