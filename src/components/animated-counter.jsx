"use client";

import { useCounter } from "@/hooks/use-counter";

export default function AnimatedCounter({
  end,
  suffix = "",
  isVisible,
  className = "",
  delay = 0,
}) {
  const count = useCounter({
    end,
    isVisible,
    delay,
    duration: 2000,
  });

  return (
    <div className={` ${className}`}>
      <span className="counter-value">{count}</span>
      <span>{suffix}</span>
    </div>
  );
}
