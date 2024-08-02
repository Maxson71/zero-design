"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

type TitleFrameProps = {
  title: string;
};

const TitleFrame: React.FC<TitleFrameProps> = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex bg-foreground text-background py-2.5 pl-8 pr-24 text-4xl leading-10 text-center uppercase duration-500 transform transition-all 
            ${inView
          ? "opacity-100 translate-y-0 rotate-0"
          : "opacity-0 translate-y-10 rotate-6"
        }`}
    >
      {props.title}
    </div>
  );
};

export default TitleFrame;
