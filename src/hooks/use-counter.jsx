"use client";

import { useState, useEffect } from "react";

export function useCounter({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  isVisible,
}) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isVisible) return;

    // Reset count when visibility changes
    setCount(start);

    let animationFrame;

    const startCounter = () => {
      let startTime;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Use easeOutQuad for smoother animation
        const easeOutQuad = (t) => t * (2 - t);
        const easedProgress = easeOutQuad(progress);

        setCount(Math.floor(easedProgress * (end - start) + start));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };

      animationFrame = requestAnimationFrame(step);
    };

    const delayTimeout = setTimeout(startCounter, delay);

    return () => {
      clearTimeout(delayTimeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [end, start, duration, delay, isVisible]);

  return count;
}
