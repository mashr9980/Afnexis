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

    // Add delay before starting the counter
    const delayTimeout = setTimeout(() => {
      let startTime;
      let animationFrame;

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

      return () => {
        cancelAnimationFrame(animationFrame);
        clearTimeout(delayTimeout);
      };
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [end, start, duration, delay, isVisible]);

  return count;
}
