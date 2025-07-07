import { useEffect, useState } from "react";

type UseCounterProps = {
  to: number;
  duration?: number;
  start: boolean;
};

export const useCounter = ({ to, duration = 2000, start }: UseCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * to));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [start, to, duration]);

  return count;
};
