"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorSpotlight() {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  const dotX = useSpring(mouseX, { stiffness: 700, damping: 30, mass: 0.4 });
  const dotY = useSpring(mouseY, { stiffness: 700, damping: 30, mass: 0.4 });

  const ringX = useSpring(mouseX, { stiffness: 180, damping: 20, mass: 0.7 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 20, mass: 0.7 });

  const spotX = useSpring(mouseX, { stiffness: 55, damping: 18 });
  const spotY = useSpring(mouseY, { stiffness: 55, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Radial spotlight glow */}
      <motion.div
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "560px",
          height: "560px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--accent) 0%, transparent 65%)",
          opacity: 0.08,
          pointerEvents: "none",
          zIndex: 9997,
          x: spotX,
          y: spotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Lagging ring */}
      <motion.div
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          border: "1px solid var(--accent)",
          opacity: 0.5,
          pointerEvents: "none",
          zIndex: 9999,
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Snappy dot */}
      <motion.div
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "var(--accent)",
          pointerEvents: "none",
          zIndex: 10000,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
