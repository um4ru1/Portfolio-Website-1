"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  stagger?: number;
}

export const AnimatedText = ({
  text,
  className,
  stagger = 100,
}: AnimatedTextProps) => {
  const words = text.split(" ");

  return (
    <h1 className={cn("text-center", className)}>
      {words.map((word, index) => (
        <span key={index} className="inline-block">
          <span
            className="word-animate"
            style={{ animationDelay: `${index * stagger}ms` }}
          >
            {word}
          </span>
          {" "}
        </span>
      ))}
    </h1>
  );
};