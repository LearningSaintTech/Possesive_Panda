// components/ProgressCircle.js
import { useEffect, useRef, useState } from "react";

const CircleProgress = () => {
  const circleRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (circleRef.current) {
        const { top } = circleRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the top of the circle matches the top of the screen
        if (top <= 0 && !isStuck) {
          setIsStuck(true);
        }

        if (isStuck) {
          const newProgress = Math.min(100, progress + window.scrollY / 10);
          setProgress(newProgress);

          if (newProgress >= 100) {
            setIsStuck(false);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [progress, isStuck]);

  return (
    <div
      ref={circleRef}
      className={`flex items-center justify-center ${
        isStuck ? "fixed top-0" : ""
      } w-full h-screen bg-gray-100`}
    >
      <svg className="w-48 h-48">
        <circle
          cx="50%"
          cy="50%"
          r="22%"
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          className="text-gray-200"
        />
        <circle
          cx="50%"
          cy="50%"
          r="22%"
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          strokeDasharray="100"
          strokeDashoffset={100 - progress}
          className="text-blue-500 transition-all duration-75"
        />
      </svg>
      <span className="absolute text-xl text-blue-500 font-bold">
        {Math.floor(progress)}%
      </span>
    </div>
  );
};

export default CircleProgress;
