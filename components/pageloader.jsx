import { useEffect, useRef } from "react";
import gsap, { SteppedEase } from "gsap";

const LoadingAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    // Letter animation
    tl.fromTo(
      textRef.current,
      2,
      {
        width: "0", // Start from 0 width
      },
      {
        width: "auto", // Set width to 'auto' to accommodate full text length
        ease: SteppedEase.config(17),
        repeat: -1,
      },
      0
    );

    // Text cursor animation
    tl.fromTo(
      textRef.current,
      0.5,
      {
        "border-right-color": "rgba(255,255,255,0.75)",
      },
      {
        "border-right-color": "rgba(255,255,255,0)",
        repeat: -1,
        ease: SteppedEase.config(17),
      },
      0
    );

    tl.play();

    // Clean up the timeline when the component unmounts
    return () => tl.kill();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        color: "rgba(255,255,255,.75)",
        background: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <h1
        ref={textRef}
        className="anim-typewriter font-animation"
        style={{
          fontSize: "5rem", // Adjust the font size for better visibility
          whiteSpace: "nowrap", // Prevent line break
          borderRight: "2px solid rgba(255, 255, 255, 0.75)", // Cursor effect
        }}
      >
        UK Boy Fitness
      </h1>
    </div>
  );
};

export default LoadingAnimation;
