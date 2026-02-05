import { useState, useEffect, useRef } from "react";

const useThrottle = (value, delay) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const now = Date.now();

    if (now - lastExecuted.current >= delay) {
      lastExecuted.current = now;
      setThrottledValue(value);
    }
  }, [value, delay]);

  return throttledValue;
};

export default useThrottle;
