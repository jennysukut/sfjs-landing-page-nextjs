"use client";

import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = Math.min(Math.max((current / total) * 100, 0), 100);

  return (
    <div className="ProgressBar flex h-5 w-full rounded-full border-2 border-jade bg-cream drop-shadow-smJade">
      <div
        className="Progress rounded-full bg-watermelon"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
