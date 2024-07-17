"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieAnimation = ({ animationData }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData, // Use the passed animation data
    });

    return () => animation.destroy(); // Clean up on unmount
  }, [animationData]);

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center h-64 w-64 m-2"
    >
      {/* Lottie will be rendered here */}
    </div>
  );
};

export default LottieAnimation;
