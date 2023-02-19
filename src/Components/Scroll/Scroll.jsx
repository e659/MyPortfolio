import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./scroll.scss";
export default function Scroll() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{
          scaleX: scrollYProgress,
        }}
      />
    </>
  );
}
