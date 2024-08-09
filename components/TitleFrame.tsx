"use client";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

type TitleFrameProps = {
  title: string;
};

const TitleFrame: React.FC<TitleFrameProps> = (props) => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [paddingRight, setPaddingRight] = useState(6);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementPosition = Math.min(Math.max(rect.top, 0), windowHeight);
        const newPaddingRight = 6 + 3 * (1 - elementPosition / windowHeight);
        setPaddingRight(newPaddingRight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={(node) => {
        inViewRef(node);
        elementRef.current = node;
      }}
      className={`flex bg-foreground text-background py-2.5 
        pl-8 text-4xl leading-10 text-center uppercase 
        duration-500 transform transition-all 
        ${inView ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-10 rotate-6"}`}
      style={{ paddingRight: `${paddingRight}rem` }}
    >
      {props.title}
    </div>
  );
};

export default TitleFrame;
