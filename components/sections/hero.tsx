"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["300", "400"],
  variable: "--font-display",
});

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hi there.";
  const typingSpeed = 150; // ms per character
  const pauseAfterHi = 1000; // 1 second pause

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    let currentTime = 300; // slight delay before typing starts

    // Type "Hi"
    for (let i = 0; i < 2; i++) {
      timeouts.push(
        setTimeout(() => {
          setDisplayedText(fullText.slice(0, i + 1));
        }, currentTime)
      );
      currentTime += typingSpeed;
    }

    // Pause after "Hi"
    currentTime += pauseAfterHi;

    // Type " there."
    for (let i = 2; i < fullText.length; i++) {
      timeouts.push(
        setTimeout(() => {
          setDisplayedText(fullText.slice(0, i + 1));
        }, currentTime)
      );
      currentTime += typingSpeed;
    }

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section
      className={`${fraunces.variable} relative min-h-screen flex items-center justify-center bg-[#F0F9EC]`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-[#1a3d2e] font-light leading-none tracking-tight"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
        }}
      >
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block w-[2px] h-[0.7em] bg-[#1a3d2e] ml-[0.15em] align-text-bottom"
        />
      </motion.div>
    </section>
  );
}