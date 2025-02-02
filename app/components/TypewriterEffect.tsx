"use client";

import React, { useState, useEffect } from "react";

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  punctuationDelay?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  speed = 40,
  delay = 0,
  className = "",
  punctuationDelay = 500, // Default 500ms pause at punctuation
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (isTyping && currentIndex < text.length) {
      const currentChar = text[currentIndex];
      const isPunctuation = [",", ".", "!", "?", ";"].includes(currentChar);
      const nextTimeout = isPunctuation ? punctuationDelay : speed;

      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentChar);
        setCurrentIndex((prev) => prev + 1);
      }, nextTimeout);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isTyping, speed, text, punctuationDelay]);

  return (
    <span className={className}>
      {displayedText}
      <span
        className={`border-r-2 border-current ml-1 ${
          currentIndex < text.length ? "animate-pulse" : "opacity-0"
        }`}
      >
        &nbsp;
      </span>
    </span>
  );
};

export default TypewriterEffect;
